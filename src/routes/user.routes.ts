import express from 'express';
import {
  getGists,
  getOrgs,
  getRepos,
  getUser,
} from '../controllers/user.controller.js';

const router = express.Router();

router.get('/:username', getUser);
router.get('/:username/repos', getRepos);
router.get('/:username/gists', getGists);
router.get('/:username/orgs', getOrgs);

export default router;
