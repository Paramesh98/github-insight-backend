import dotenv from 'dotenv';
dotenv.config();

const defaultPort = 8081;

export const config = {
  PORT: process.env.PORT || defaultPort,
  GITHUB_API_URL: process.env.GITHUB_API_URL,
  GITHUB_TOKEN: process.env.GITHUB_TOKEN,
};
