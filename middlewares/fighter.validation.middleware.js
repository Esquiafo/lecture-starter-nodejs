import { FIGHTER } from "../models/fighter.js";

const validStats = (params) => {
  if (params.power < 1 || params.power > 100) {
    return  "Invalid power";
  }
  if (params.defense < 1 || params.defense > 10) {
    return  "Check defense";
  }
  if (params.health < 80 || params.health > 100) {
    return  "Check health";
  }
};

const createFighterValid = (req, res, next) => {
 

  let fighterRequest = req.body;
  fighterRequest.id = '';
  fighterRequest.health = req.body.health === undefined ? 100 : req.body.health;
  const fighterKeys = Object.keys(fighterRequest).sort();
  const modelKeys = Object.keys(FIGHTER).sort();
  const validation = JSON.stringify(fighterKeys) === JSON.stringify(modelKeys);
  if (validation) {
     const verificationValues = validStats(fighterRequest)
     if(verificationValues){
      res.json({ error: true, message: verificationValues});
     }else{
      next();
     }
    
  } else {
    return res.json({ error: true, message: "Fighter entity to create isn’t valid" });
  }
};

const updateFighterValid = (req, res, next) => {
  let fighterRequest = req.body;
  console.log(Object.entries(fighterRequest).length);
  if (!Object.entries(fighterRequest).length == 0) {
    for (const key in fighterRequest) {
      if (!FIGHTER.hasOwnProperty(key)) {
        return res.json({ error: true, message: "Fighter entity to create isn’t valid" });
      }
    }
    const verificationValues = validStats(fighterRequest)
    if(verificationValues){
     res.json({ error: true, message: verificationValues});
    }else{
     next();
    }
  } else {
    return res.json({ error: true, message: "Empty fighter" });
  }
};

export { createFighterValid, updateFighterValid };
