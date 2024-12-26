import dotenv from 'dotenv';
dotenv.config();

const defaultPort = 8081;

export const config = {
  PORT: process.env.PORT || defaultPort,
  API_URL_GITHUB: process.env.API_URL_GITHUB,
  API_TOKEN_GITHUB: process.env.API_TOKEN_GITHUB,
};
