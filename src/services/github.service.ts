import axios from 'axios';
import { config } from '../config/env.js';

const client = axios.create({
  baseURL: config.GITHUB_API_URL,
});

export const fetchUser = async (username: string) => {
  const response = await client.get(`/users/${username}`);
  return response.data;
};

export const fetchRepos = async (username: string) => {
  const response = await client.get(`/users/${username}/repos`);
  return response.data;
};

export const fetchGists = async (username: string) => {
  const response = await client.get(`/users/${username}/gists`);
  return response.data;
};

export const fetchOrgs = async (username: string) => {
  const response = await client.get(`/users/${username}/orgs`);
  return response.data;
};
