import request from 'supertest';
import { StatusCodes } from '../src/enums/status-codes';
import { app, server } from '../src/index';

jest.mock('../src/config/logger.ts');

describe('Express App', () => {
  afterAll(() => {
    server.close();
  });

  describe('Middleware and Routes', () => {
    it('should respond with 404 for an unknown route', async () => {
      const response = await request(app).get('/unknown-route');
      expect(response.status).toBe(StatusCodes.NOT_FOUND);
      expect(response.body.error.message).toBe('Route not found');
    });
  });

  describe('User Routes', () => {
    it('should handle user routes under /api correctly', async () => {
      const response = await request(app).get('/api/Paramesh98');
      expect(response.status).toBe(StatusCodes.OK);
    });

    it('should handle wrong user routes under /api with 500', async () => {
      const response = await request(app).get('/api/xzxzxz$$$$');
      expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    });
  });

  describe('Repo Routes', () => {
    it('should handle repos routes under /api correctly', async () => {
      const response = await request(app).get('/api/Paramesh98/repos');
      expect(response.status).toBe(StatusCodes.OK);
    });

    it('should handle wrong repos routes under /api with 500', async () => {
      const response = await request(app).get('/api/xzxzxz$$$$/repos');
      expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    });
  });

  describe('gists Routes', () => {
    it('should handle gists routes under /api correctly', async () => {
      const response = await request(app).get('/api/Paramesh98/gists');
      expect(response.status).toBe(StatusCodes.OK);
    });

    it('should handle wrong gists routes under /api with 500', async () => {
      const response = await request(app).get('/api/xzxzxz$$$$/gists');
      expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    });
  });

  describe('Organization Routes', () => {
    it('should handle organization routes under /api correctly', async () => {
      const response = await request(app).get('/api/Paramesh98/orgs');
      expect(response.status).toBe(StatusCodes.OK);
    });

    it('should handle wrong organization routes under /api with 500', async () => {
      const response = await request(app).get('/api/xzxzxz$$$$/orgs');
      expect(response.status).toBe(StatusCodes.INTERNAL_SERVER_ERROR);
    });
  });
});
