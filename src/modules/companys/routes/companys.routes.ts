import { Router } from "express";
import CompanysController from "../controllers/CompanysController";

const companysRoutes = Router();
const companysController = new CompanysController();

companysRoutes.get('/', companysController.index);
companysRoutes.get('/:id', companysController.show);
companysRoutes.post('/', companysController.create);
companysRoutes.put('/:id', companysController.update);
companysRoutes.delete('/:id', companysController.delete);

export default companysRoutes;