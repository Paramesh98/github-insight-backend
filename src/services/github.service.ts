import axios from 'axios';
import { config } from '../config/env.js';

const client = axios.create({
  baseURL: config.API_URL_GITHUB,
  headers: { Authorization: `token ${config.API_TOKEN_GITHUB}` },
});

export const fetchUser = async (username: string, page: string = '1', per_page: string = '100') => {
  const response = await client.get(`/users/${username}?page=${page}&per_page=${per_page}`);
  return response.data;
};

export const fetchRepos = async (
  username: string,
  page: string = '1',
  per_page: string = '100'
) => {
  const response = await client.get(`/users/${username}/repos?page=${page}&per_page=${per_page}`);
  return response.data;
};

export const fetchGists = async (
  username: string,
  page: string = '1',
  per_page: string = '100'
) => {
  const response = await client.get(`/users/${username}/gists?page=${page}&per_page=${per_page}`);
  return response.data;
};

export const fetchOrgs = async (username: string, page: string = '1', per_page: string = '100') => {
  const response = await client.get(`/users/${username}/orgs?page=${page}&per_page=${per_page}`);
  return response.data;
};
