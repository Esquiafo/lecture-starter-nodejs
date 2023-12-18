import { userRepository } from "../repositories/userRepository.js";

class UserService {
  // TODO: Implement methods to work with user
  findAll(){
    const user = userRepository.getAll()
    if (!user) {
      return null;
    }
    
    const removedIds = {
      "users": user.map( user =>{
        const {id, ...noIds} = user;
        return noIds
      })
    }

    return  removedIds
  }
  update(idUser,dataToUpdate){
    const user = userRepository.update(idUser,dataToUpdate)
    if (!user) {
      return null;
    }
    const {id, ...userResponse} = user
      return userResponse;
  }
  search(idUser) {
    const user = userRepository.getOne(idUser);
    if (!user) {
      return null;
    }
    const {id, ...userResponse} = user
      return userResponse;
  }
  create(data) {
    const {users} = this.findAll()
    const checkUser = users.map(user => {
      if(user.email == data.email){
        return 'User already taken'
      }
      if(user.phoneNumber == data.phoneNumber){
        return 'Cellphone already taken'
      }
    })
  const filteredArray = checkUser.filter((element) => element !== undefined);
    if(!filteredArray.length == 0){
      return filteredArray
    }else{
      const user = userRepository.create(data)
      if (!user) {
        return null;
      }
      const {id, ...userResponse} = user
      return userResponse;
    }

  }
  delete(idUser) {
    const user = userRepository.delete(idUser)
    return user;
  }
}

const userService = new UserService();

export { userService };
