import { fighterRepository } from "../repositories/fighterRepository.js";

class FighterService {
  // TODO: Implement methods to work with fighter
  findAll(){
    const fighter = fighterRepository.getAll();
    console.log('/////////////////////')
    console.log(fighter)
    console.log('/////////////////////')
    if (!fighter) {
      return null;
    }
  //   let cleanedResponse = {
  //     "fighters": fighter.fighters.map(fighter => {
  //         const { id, ...fighterWithoutId } = fighter;
  //         return fighterWithoutId;
  //     })
  // };
      return fighter;
  }
  update(idFighter,dataToUpdate){
    const fighter = fighterRepository.update(idFighter,dataToUpdate)
    if (!fighter) {
      return null;
    }
    const {id, ...fighterResponse} = fighter
      return fighterResponse;
  }
  search(idFighter) {
    const fighter = fighterRepository.getOne(idFighter);
    if (!fighter) {
      return null;
    }
    const {id, ...fighterResponse} = fighter
      return fighterResponse;
  }
  create(data) {
  //   const allfighter = this.findAll()
  //   const checkFighter = allfighter.map(fighter => {
  //     if(fighter.name == data.name){
  //       return 'Name already taken'
  //     }
  //   })
  // const filteredArray = checkFighter.filter((element) => element !== undefined);
  const fighter = fighterRepository.create(data)
  if (!fighter) {
    return null;
  }
  const {id, ...fighterResponse} = fighter
  return fighterResponse;
  }
  delete(idFighter) {
    const fighter = fighterRepository.delete(idFighter)
    return fighter;
  }
}

const fighterService = new FighterService();

export { fighterService };
