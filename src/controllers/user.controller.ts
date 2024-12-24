import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from '../enums/status-codes.js';
import * as githubService from '../services/github.service.js';

export const getUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.params;
    const user = await githubService.fetchUser(username);
    res.status(StatusCodes.OK).json({ success: true, data: user });
  } catch (err) {
    next(err);
  }
};

export const getRepos = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.params;
    const repos = await githubService.fetchRepos(username);
    res.status(StatusCodes.OK).json({ success: true, data: repos });
  } catch (err) {
    next(err);
  }
};

export const getGists = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.params;
    const gists = await githubService.fetchGists(username);
    res.status(StatusCodes.OK).json({ success: true, data: gists });
  } catch (err) {
    next(err);
  }
};

export const getOrgs = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { username } = req.params;
    const orgs = await githubService.fetchOrgs(username);
    res.status(StatusCodes.OK).json({ success: true, data: orgs });
  } catch (err) {
    next(err);
  }
};