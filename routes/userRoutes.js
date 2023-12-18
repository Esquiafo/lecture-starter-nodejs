import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

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
