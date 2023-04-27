import express, { Request, Response } from 'express';

import { getBalancingAuthorityController } from '../controllers';

const router = express.Router();

const healthController = (_req: Request, res: Response) => res.status(200).json({ message: 'service healthy.' });

router.get('/', healthController);
router.get('/health', healthController);

router.get('/balancingAuthority', getBalancingAuthorityController.execute);

export { router };


