export const APP_CONFIG = {
  APP_NAME: 'SRAJ Connect',
  API_BASE_URL: process.env.VITE_API_BASE_URL || 'http://localhost:3000',
  DEFAULT_LANGUAGE: 'fr',
};

export const ROUTES = {
  HOME: '/',
  CHAT: '/chat',
  LIBRARY: '/library',
  TOOLS: '/tools',
  RESOURCES: '/resources',
  PROFILE: '/profile',
};

export const RESOURCE_TYPES = {
  ARTICLE: 'article',
  VIDEO: 'video',
} as const;