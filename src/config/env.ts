import dotenv from 'dotenv';
dotenv.config();

const defaultPort = 8081;

export const config = {
  PORT: process.env.PORT || defaultPort,
  GITHUB_API_URL: 'https://api.github.com',
};
