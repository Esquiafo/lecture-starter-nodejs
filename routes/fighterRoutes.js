import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";

const router = Router();

router.get('/', (req, res, next) => {
  
});
router.get('/:id', (req, res, next) => {
  
});
router.post('/', (req, res, next) => {
  
});
router.put('/:id', (req, res, next) => {
  
});
router.delete('/:id', (req, res, next) => {
  
});

export { router };
