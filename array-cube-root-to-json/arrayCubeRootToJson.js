const arrayCubeRootToJson = (array) => {
    if(array == {} || array == undefined || array == false) 
        throw new Error('Invalid Array');
      let Json = {};
      array.map((number) => {
        let root = Math.cbrt(number);
        if (root === 0 || isNaN(number)) throw new Error('Invalid!');;
        Json[number] = root;
      });
      return Json;
    
  };
  
  module.exports = arrayCubeRootToJson;
