import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user
  findAll(){
    const user = userRepository.getAll()
    if (!user) {
      return null;
    }
    return user;
  }
  update(id,dataToUpdate){
    const user = userRepository.update(id,dataToUpdate)
    if (!user) {
      return null;
    }
    return user;
  }
  search(id) {
    const user = userRepository.getOne(id);
    if (!user) {
      return null;
    }
    return user;
  }
  create(data) {
    const user = userRepository.create({params: data})
    if (!user) {
      return null;
    }
    return user;
  }
  delete(id) {
    const user = userRepository.delete(id)
    return user
  }
}

const userService = new UserService();

export { userService };
