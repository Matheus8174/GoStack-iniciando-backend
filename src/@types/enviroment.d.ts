import { Secret } from 'jsonwebtoken';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT: number | string;
      SECRET: Secret;
      EXPIRESIN: string | number;
    }
  }
}
