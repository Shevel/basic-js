const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity){
  if(typeof(sampleActivity) === "boolean" || sampleActivity === undefined 
  || typeof(sampleActivity) === "number" || sampleActivity === null 
  || typeof(sampleActivity) === "object" || !sampleActivity){
    return false;
  }
  if (typeof sampleActivity != 'string' || /[a-zA-Z]/g.test(sampleActivity) || (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY)) {
    return false;
  }
  return Math.ceil(( Math.log(15 / parseFloat(sampleActivity) )) / (0.693 / 5730));
};
