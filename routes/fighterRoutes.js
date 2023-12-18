import { Router } from "express";
import { fighterService } from "../services/fighterService.js";
import {
  createFighterValid,
  updateFighterValid,
} from "../middlewares/fighter.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get('/', (req, res, next) => {
  
  return res.json({ fighters: fighterService.findAll() });
});

router.get('/:id', (req, res, next) => {
  const id = req.params;
  return res.json({ fighter: fighterService.search(id) });
});

router.post('/', createFighterValid, (req, res, next) => {
 

  console.log(req.body);
  return res.json({ fighter: fighterService.create(req.body) });
});

router.put('/:id', updateFighterValid, (req, res, next) => {
  const { id } = req.params;
  console.log(req.params);
  return res.json({ fighter: fighterService.update(id, req.body) });
});

router.delete('/:id', (req, res, next) => {
  const { id } = req.params;
  const fighterDeleted = fighterService.delete(id);
  if (fighterDeleted.length == 0) {
    return res.json({ message: 'Fighter not found' });
  } else {
    return res.json({ message: 'Fighter has been deleted' });
  }
});

export { router };
