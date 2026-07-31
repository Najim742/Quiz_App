const fs = require('fs');
const path = require('path');

const DEFAULT_OPENAI_MODEL = 'gpt-4.1-mini';
const DEFAULT_GEMINI_MODEL = 'gemini-3.5-flash';
const GEMINI_FALLBACK_MODELS = ['gemini-3.5-flash-lite'];
const OPENAI_API_URL = 'https://api.openai.com/v1/chat/completions';
const GEMINI_API_BASE_URL = 'https://generativelanguage.googleapis.com/v1beta/models';

const RUNTIME_SETTINGS_FILE_NAME = 'ai-settings.json';
const runtimeSettings = {};
let runtimeSettingsFilePathOverride = null;

function getRuntimeSettingsPath() {
  if (runtimeSettingsFilePathOverride) {
    return runtimeSettingsFilePathOverride;
  }
  if (process.env.APPDATA) {
    return path.join(process.env.APPDATA, 'QuizMaster', RUNTIME_SETTINGS_FILE_NAME);
  }
  if (process.platform === 'darwin') {
    return path.join(process.env.HOME || '', 'Library', 'Application Support', 'QuizMaster', RUNTIME_SETTINGS_FILE_NAME);
  }
  return path.join(process.env.HOME || '', '.config', 'QuizMaster', RUNTIME_SETTINGS_FILE_NAME);
}

function setRuntimeSettingsFilePath(filePath) {
  runtimeSettingsFilePathOverride = filePath;
}

function loadAISettings() {
  const settingsPath = getRuntimeSettingsPath();
  try {
    if (fs.existsSync(settingsPath)) {
      const raw = fs.readFileSync(settingsPath, 'utf8');
      const parsed = JSON.parse(raw || '{}');
      Object.keys(parsed).forEach((key) => { runtimeSettings[key] = parsed[key]; });
    }
  } catch (_err) {
    // Ignore corrupt files and start fresh
  }
  return getAllAISettings();
}

function saveAISettings(settings = {}) {
  Object.keys(settings).forEach((key) => {
    const value = settings[key];
    if (value === undefined || value === null) {
      delete runtimeSettings[key];
    } else {
      runtimeSettings[key] = String(value);
    }
  });
  const settingsPath = getRuntimeSettingsPath();
  try {
    fs.mkdirSync(path.dirname(settingsPath), { recursive: true });
    fs.writeFileSync(settingsPath, JSON.stringify(runtimeSettings, null, 2), 'utf8');
  } catch (_err) {
    // Silently skip persistence errors (e.g. read-only filesystems)
  }
  return getAllAISettings();
}

function getAllAISettings() {
  return {
    OPENAI_API_KEY: runtimeSettings.OPENAI_API_KEY || getEnvValue('OPENAI_API_KEY') || '',
    OPENAI_MODEL: runtimeSettings.OPENAI_MODEL || getEnvValue('OPENAI_MODEL') || DEFAULT_OPENAI_MODEL,
    GOOGLE_API_KEY: runtimeSettings.GOOGLE_API_KEY || getEnvValue('GOOGLE_API_KEY') || getEnvValue('GEMINI_API_KEY') || '',
    GEMINI_MODEL: runtimeSettings.GEMINI_MODEL || getEnvValue('GEMINI_MODEL') || DEFAULT_GEMINI_MODEL,
    AI_PROVIDER: runtimeSettings.AI_PROVIDER || getEnvValue('AI_PROVIDER') || '',
    AI_TEMPERATURE: Number(runtimeSettings.AI_TEMPERATURE ?? getEnvValue('AI_TEMPERATURE') ?? 0.6),
    AI_MAX_TOKENS: Number(runtimeSettings.AI_MAX_TOKENS ?? getEnvValue('AI_MAX_TOKENS') ?? 1400)
  };
}

function parseDotEnvFile() {
  const envPath = path.resolve(__dirname, '../../.env');
  if (!fs.existsSync(envPath)) return {};

  const env = {};
  const lines = fs.readFileSync(envPath, 'utf8').split(/\r?\n/);

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) continue;

    const key = trimmed.slice(0, separatorIndex).trim();
    let value = trimmed.slice(separatorIndex + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"'))
      || (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    env[key] = value;
  }

  return env;
}

let cachedDotEnv = null;
function getEnvValue(key) {
  const directValue = process.env[key];
  if (directValue) return directValue;
  if (cachedDotEnv === null) cachedDotEnv = parseDotEnvFile();
  return cachedDotEnv[key] || '';
}

function getConfigValue(key) {
  if (Object.prototype.hasOwnProperty.call(runtimeSettings, key) && runtimeSettings[key] !== '') {
    return runtimeSettings[key];
  }
  return getEnvValue(key);
}

function cleanText(value) {
  return String(value == null ? '' : value).trim();
}

function buildSystemPrompt() {
  return [
    'You are a quiz-building assistant inside a desktop quiz app.',
    'You can either help the user with normal study/chat questions or generate quiz questions.',
    'The user may attach files (text, CSV, JSON, images) containing content for you to reference.',
    'When files are attached, read their content carefully and use it as context for answering or generating questions.',
    'You can also generate vector diagrams in SVG format, BUT ONLY when the user explicitly asks for a diagram, chart, graph, flowchart, illustration, timeline, cycle, or SVG/vector image.',
    'Do NOT mention images, diagrams, SVG, inline rendering, or visuals unless the user specifically asks for them. Do NOT invent or reference any limitations about rendering or images.',
    'Return valid JSON only. Do not wrap the JSON in markdown fences.',
    'Use this JSON shape exactly:',
    '{',
    '  "assistantMessage": "natural language reply",',
    '  "questions": [',
    '    {',
    '      "text": "question text",',
    '      "options": ["option A", "option B", "option C", "option D"],',
    '      "correctOption": "a"',
    '    }',
    '  ],',
    '  "svgContent": "<svg>...</svg>   (omit entirely unless user requested a diagram/chart/flowchart/SVG)"',
    '}',
    'Rules:',
    '- If the user asks for explanation, help, definitions, formulas, equations, or general chatbot support, answer in assistantMessage and return "questions": [].',
    '- If the user provides files, reference their content directly in your answer or use them to craft accurate quiz questions.',
    '- If the user asks to create, revise, expand, or replace quiz questions, return a full revised question list in questions.',
    '- Never return a partial question patch. When returning questions, always return the full revised question list.',
    '- Each question must have exactly 4 options.',
    '- correctOption must be one of: a, b, c, d.',
    '- Keep question text at or below 500 characters.',
    '- Keep each option at or below 200 characters.',
    '- Make the questions classroom-ready and internally consistent.',
    '- If the user asks for more questions, include them in the full returned list.',
    '- Keep assistantMessage concise but useful.',
    '- svgContent rules (use ONLY when the user specifically requests a diagram, flowchart, chart, graph, illustration, timeline, cycle drawing, or SVG/vector):',
    '  - Generate a clean, valid standalone SVG with proper xmlns attribute on the root <svg> tag.',
    '  - Include viewBox and width/height attributes so the SVG renders predictably.',
    '  - Use readable font sizes (14-16px minimum), good contrast, and distinct colors.',
    '  - For flowcharts or processes: use rectangles for steps, diamonds for decisions, arrows for direction, labels on arrows.',
    '  - For diagrams: add clear labels and structure. Avoid tiny details that will be illegible.',
    '  - Return the complete SVG markup as a string in the "svgContent" field. Do NOT use HTML entities inside it.',
    '  - Keep the SVG reasonable in size (under 1200px wide/tall and under 40KB of markup).',
    '  - Include a short caption in assistantMessage explaining what the diagram shows.',
    '  - If the user did NOT explicitly request a visual/diagram, leave svgContent out of the JSON entirely.',
    '- If the user asked for quiz questions or general help (NOT a diagram/chart), NEVER output svgContent. NEVER mention that you could have made a diagram. Just answer the request.'
  ].join('\n');
}

function formatAttachmentsForPrompt(attachments) {
  if (!Array.isArray(attachments) || !attachments.length) return '';

  const sections = ['', 'Attached Files (use content below as context):'];

  attachments.forEach((att, idx) => {
    const fileName = cleanText(att && att.name) || `file_${idx + 1}`;
    const mimeType = cleanText(att && att.mimeType) || 'unknown';
    const fileType = cleanText(att && att.type);
    const fileSize = att && typeof att.size === 'number' ? att.size : 0;
    const sizeKB = Math.round(fileSize / 1024);

    sections.push('');
    sections.push(`--- File ${idx + 1}: ${fileName} ---`);
    sections.push(`Type: ${fileType} | MIME: ${mimeType} | Size: ${sizeKB} KB`);

    if (fileType === 'image') {
      sections.push('(Image file attached - text description not available for images)');
    } else if (att && typeof att.text === 'string' && att.text.length > 0) {
      sections.push('Content:');
      sections.push(att.text.slice(0, 8000));
      if (att.text.length > 8000) {
        sections.push(`[... file truncated, ${att.text.length - 8000} more chars omitted]`);
      }
    } else if (att && typeof att.dataUrl === 'string' && att.dataUrl.startsWith('data:')) {
      sections.push('(Binary file attached - decoded as base64)');
    } else {
      sections.push('(No readable text content extracted from this file)');
    }
  });

  sections.push('--- End of attached files ---');
  sections.push('');

  return sections.join('\n');
}

function normalizeConversation(conversation) {
  if (!Array.isArray(conversation)) return [];

  return conversation
    .filter((message) => message && (message.role === 'user' || message.role === 'assistant'))
    .map((message) => ({
      role: message.role,
      content: cleanText(message.content)
    }))
    .filter((message) => message.content);
}

function normalizeQuizContext(quizContext = {}) {
  return {
    title: cleanText(quizContext.title),
    durationMinutes: cleanText(quizContext.durationMinutes),
    semester: cleanText(quizContext.semester),
    session: cleanText(quizContext.session)
  };
}

function normalizeCurrentQuestions(currentQuestions) {
  if (!Array.isArray(currentQuestions)) return [];

  return currentQuestions
    .map((question) => ({
      text: cleanText(question && question.text),
      opt_a: cleanText(question && question.opt_a),
      opt_b: cleanText(question && question.opt_b),
      opt_c: cleanText(question && question.opt_c),
      opt_d: cleanText(question && question.opt_d),
      correct_opt: cleanText(question && question.correct_opt).toLowerCase()
    }))
    .filter((question) => question.text || question.opt_a || question.opt_b || question.opt_c || question.opt_d);
}

function buildContextMessage(payload) {
  const quizContext = normalizeQuizContext(payload && payload.quizContext);
  const currentQuestions = normalizeCurrentQuestions(payload && payload.currentQuestions);
  const attachmentsSection = formatAttachmentsForPrompt(payload && payload.attachments);

  return JSON.stringify({
    task: 'Answer the user request inside the quiz builder. Provide help normally, or generate a full replacement question set when they ask for quiz questions.',
    quizContext,
    currentQuestions,
    guidance: [
      'Use the quiz metadata when it helps.',
      'Treat currentQuestions as the current draft already shown in the form.',
      'For normal chat help, respond in assistantMessage and leave questions empty.',
      'For quiz generation, return a complete replacement list that the app can write directly into the question builder.',
      'Read any attached files and incorporate their content into your response.'
    ]
  }) + attachmentsSection;
}

function extractJsonObject(text) {
  const trimmed = cleanText(text);
  if (!trimmed) {
    throw new Error('The AI service returned an empty response.');
  }

  const withoutFence = trimmed.replace(/^```json\s*/i, '').replace(/^```\s*/i, '').replace(/\s*```$/, '');
  try {
    return JSON.parse(withoutFence);
  } catch (_) {
    const firstBrace = withoutFence.indexOf('{');
    const lastBrace = withoutFence.lastIndexOf('}');
    if (firstBrace === -1 || lastBrace === -1 || lastBrace <= firstBrace) {
      throw new Error('The AI service did not return valid JSON.');
    }
    return JSON.parse(withoutFence.slice(firstBrace, lastBrace + 1));
  }
}

function normalizeCorrectOption(value, options) {
  const normalized = cleanText(value).toLowerCase();
  if (['a', 'b', 'c', 'd'].includes(normalized)) return normalized;
  if (['1', '2', '3', '4'].includes(normalized)) return ['a', 'b', 'c', 'd'][parseInt(normalized, 10) - 1];

  const optionMatch = normalized.match(/^(?:option\s*)?([abcd])$/i);
  if (optionMatch) return optionMatch[1].toLowerCase();

  const lowerOptions = options.map((option) => cleanText(option).toLowerCase());
  const matchedIndex = lowerOptions.findIndex((option) => option && option === normalized);
  return matchedIndex >= 0 ? ['a', 'b', 'c', 'd'][matchedIndex] : 'a';
}

function normalizeAssistantPayload(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('The AI service returned an invalid payload.');
  }

  const assistantMessage = cleanText(payload.assistantMessage);
  const hasQuestions = Array.isArray(payload.questions) && payload.questions.length > 0;
  const rawSvg = typeof payload.svgContent === 'string' ? payload.svgContent.trim() : '';
  const svgContent = rawSvg && /<svg[\s>]/i.test(rawSvg) && /<\/svg>/i.test(rawSvg) ? rawSvg : '';

  if (!hasQuestions) {
    if (!assistantMessage && !svgContent) {
      throw new Error('The AI service did not return a usable reply.');
    }

    return {
      assistantMessage: assistantMessage || (svgContent ? 'Here is the diagram you requested.' : ''),
      questions: [],
      svgContent: svgContent || undefined
    };
  }

  const questions = payload.questions.map((question, index) => {
    const text = cleanText(question && question.text).slice(0, 500);
    const rawOptions = Array.isArray(question && question.options)
      ? question.options
      : [question && question.opt_a, question && question.opt_b, question && question.opt_c, question && question.opt_d];
    const options = rawOptions.slice(0, 4).map((option) => cleanText(option).slice(0, 200));

    if (!text) {
      throw new Error(`Generated question ${index + 1} is missing text.`);
    }
    if (options.length !== 4 || options.some((option) => !option)) {
      throw new Error(`Generated question ${index + 1} must contain exactly 4 options.`);
    }

    return {
      text,
      opt_a: options[0],
      opt_b: options[1],
      opt_c: options[2],
      opt_d: options[3],
      correct_opt: normalizeCorrectOption(
        question.correctOption || question.correct_opt || question.answer,
        options
      )
    };
  });

  const result = {
    assistantMessage: assistantMessage || `Prepared ${questions.length} questions for the builder.`,
    questions
  };
  if (svgContent) result.svgContent = svgContent;
  return result;
}

async function requestOpenAI(messages) {
  if (typeof fetch !== 'function') {
    throw new Error('Fetch API is unavailable in this Electron runtime.');
  }

  const apiKey = getConfigValue('OPENAI_API_KEY');
  if (!apiKey) {
    throw new Error('OPENAI_API_KEY is not configured. Add your OpenAI key in AI Settings.');
  }

  const model = getConfigValue('OPENAI_MODEL') || DEFAULT_OPENAI_MODEL;
  const temperature = Number(getConfigValue('AI_TEMPERATURE') ?? 0.6);
  const maxTokens = Number(getConfigValue('AI_MAX_TOKENS') ?? 1400);
  const response = await fetch(OPENAI_API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model,
      temperature: Number.isFinite(temperature) ? temperature : 0.6,
      max_tokens: Number.isFinite(maxTokens) && maxTokens > 0 ? maxTokens : 1400,
      response_format: { type: 'json_object' },
      messages
    })
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data && data.error && data.error.message
      ? data.error.message
      : 'OpenAI request failed.');
  }

  const content = data
    && Array.isArray(data.choices)
    && data.choices[0]
    && data.choices[0].message
    ? data.choices[0].message.content
    : '';

  return normalizeAssistantPayload(extractJsonObject(content));
}

function buildGeminiPrompt(payload = {}) {
  const conversation = normalizeConversation(payload.conversation);
  const contextMessage = buildContextMessage(payload);
  const attachmentsInfo = formatAttachmentsForPrompt(payload && payload.attachments);

  const sections = [
    buildSystemPrompt(),
    '',
    'Context:',
    contextMessage,
    attachmentsInfo ? attachmentsInfo : '',
    '',
    'Conversation:'
  ];

  if (!conversation.length) {
    sections.push('User: Generate a complete question set for this quiz.');
  } else {
    conversation.forEach((message) => {
      const roleLabel = message.role === 'assistant' ? 'Assistant' : 'User';
      sections.push(`${roleLabel}: ${message.content}`);
    });
  }

  sections.push('');
  sections.push('Return JSON only.');

  return sections.join('\n');
}

async function requestGemini(payload) {
  if (typeof fetch !== 'function') {
    throw new Error('Fetch API is unavailable in this Electron runtime.');
  }

  const apiKey = getConfigValue('GOOGLE_API_KEY') || getConfigValue('GEMINI_API_KEY');
  if (!apiKey) {
    throw new Error('GOOGLE_API_KEY is not configured. Add your Gemini API key in AI Settings.');
  }

  const preferredModel = getConfigValue('GEMINI_MODEL') || DEFAULT_GEMINI_MODEL;
  const temperature = Number(getConfigValue('AI_TEMPERATURE') ?? 0.6);
  const maxTokens = Number(getConfigValue('AI_MAX_TOKENS') ?? 1400);
  const modelsToTry = [preferredModel, ...GEMINI_FALLBACK_MODELS.filter((model) => model !== preferredModel)];
  let lastError = null;

  for (const model of modelsToTry) {
    const response = await fetch(`${GEMINI_API_BASE_URL}/${encodeURIComponent(model)}:generateContent?key=${encodeURIComponent(apiKey)}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        contents: [
          {
            role: 'user',
            parts: [
              {
                text: buildGeminiPrompt(payload)
              }
            ]
          }
        ],
        generationConfig: {
          temperature: Number.isFinite(temperature) ? temperature : 0.6,
          maxOutputTokens: Number.isFinite(maxTokens) && maxTokens > 0 ? maxTokens : 1400,
          responseMimeType: 'application/json'
        }
      })
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      const errorMessage = data && data.error && data.error.message
        ? data.error.message
        : 'Gemini request failed.';
      lastError = new Error(errorMessage);

      const isRetryable = /high demand|try again later|unavailable|overloaded/i.test(errorMessage);
      if (isRetryable) {
        continue;
      }

      throw lastError;
    }

    const content = data
      && Array.isArray(data.candidates)
      && data.candidates[0]
      && data.candidates[0].content
      && Array.isArray(data.candidates[0].content.parts)
      ? data.candidates[0].content.parts.map((part) => part.text || '').join('\n')
      : '';

    return normalizeAssistantPayload(extractJsonObject(content));
  }

  throw lastError || new Error('Gemini request failed.');
}

async function generateQuizAssistantResponse(payload = {}) {
  const provider = (getConfigValue('AI_PROVIDER') || '').toLowerCase();
  const openaiKey = getConfigValue('OPENAI_API_KEY');
  const geminiKey = getConfigValue('GOOGLE_API_KEY') || getConfigValue('GEMINI_API_KEY');

  if (provider === 'openai') {
    const messages = [
      { role: 'system', content: buildSystemPrompt() },
      { role: 'user', content: buildContextMessage(payload) },
      ...normalizeConversation(payload.conversation)
    ];
    return await requestOpenAI(messages);
  }

  if (provider === 'gemini') {
    return await requestGemini(payload);
  }

  if (geminiKey) {
    return await requestGemini(payload);
  }

  const messages = [
    { role: 'system', content: buildSystemPrompt() },
    { role: 'user', content: buildContextMessage(payload) },
    ...normalizeConversation(payload.conversation)
  ];

  return await requestOpenAI(messages);
}

module.exports = {
  generateQuizAssistantResponse,
  loadAISettings,
  saveAISettings,
  getAllAISettings,
  setRuntimeSettingsFilePath
};
