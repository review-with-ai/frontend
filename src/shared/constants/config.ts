export const RUNTIME_ENV = process.env.NODE_ENV === 'development' ? 'development' : 'production';

export const BASE_URL = {
  development: 'http://dev.api.ai-review.site',
  production: 'http://api.ai-review.site',
};
