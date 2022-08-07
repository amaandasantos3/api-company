import companysRoutes from '@modules/companys/routes/companys.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/companys', companysRoutes);

export default routes;
