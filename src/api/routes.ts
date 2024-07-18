import { Router } from 'express';
import esameapi from './EsameAPI/esameapi.router';

const router = Router();

router.use("/esameapi",esameapi);


export default router;