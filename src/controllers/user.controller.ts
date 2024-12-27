import { Request, Response } from 'express';
import { StatusCodes } from '../enums/status-codes.js';
import * as githubService from '../services/github.service.js';

export const getUser = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const { page, per_page } = req.query;

    const user = await githubService.fetchUser(username, page as string, per_page as string);
    res.status(StatusCodes.OK).json({ success: true, data: user });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        message: (err as Error).message || 'Internal Server Error',
      },
    });
  }
};

export const getRepos = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const { page, per_page } = req.query;

    const repos = await githubService.fetchRepos(username, page as string, per_page as string);
    res.status(StatusCodes.OK).json({ success: true, data: repos });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        message: (err as Error).message || 'Internal Server Error',
      },
    });
  }
};

export const getGists = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const { page, per_page } = req.query;

    const gists = await githubService.fetchGists(username, page as string, per_page as string);
    res.status(StatusCodes.OK).json({ success: true, data: gists });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        message: (err as Error).message || 'Internal Server Error',
      },
    });
  }
};

export const getOrgs = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const { page, per_page } = req.query;

    const orgs = await githubService.fetchOrgs(username, page as string, per_page as string);
    res.status(StatusCodes.OK).json({ success: true, data: orgs });
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
      error: {
        message: (err as Error).message || 'Internal Server Error',
      },
    });
  }
};
