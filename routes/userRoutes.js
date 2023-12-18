import { Router } from "express";
import { userService } from "../services/userService.js";
import {
  createUserValid,
  updateUserValid,
} from "../middlewares/user.validation.middleware.js";
import { responseMiddleware } from "../middlewares/response.middleware.js";

const router = Router();

router.get('/', (req, res, next) => {
  return res.json({users: userService.findAll()})
});
router.get('/:id', (req, res, next) => {
  const id = req.params
  return res.json({user: userService.search(id)})
});
router.post('/', (req, res, next) => {
  return res.json({user: userService.create(req.body)})
});
router.put('/:id', (req, res, next) => {
  const {id} =   req.params
  console.log(req.params)
  return res.json({user: userService.update(id,req.body)})
  
});
router.delete('/:id', (req, res, next) => {
  const {id} = req.params
  const userDeleted = userService.delete(id)
  if(!userDeleted.length){
    return res.json({message: 'User not found'})
  }else{
    return res.json({message: 'User has been deleted'})
  }
});

export { router };
