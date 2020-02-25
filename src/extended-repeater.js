module.exports = function repeater(str, options) {
    const repeatTimes  = options.repeatTimes || 1;
    const separator = options.separator || '+';
    let addition;
    options.addition === undefined ? addition = '' : addition = options.addition + '';
    const additionRepeatTimes  = options.additionRepeatTimes || 1;
    const additionSeparator = options.additionSeparator || '|';
    
    let primaryString = '';
    let resultString = '';
    let i = 1;
    let j = 1;
    if(additionRepeatTimes > 1){
        primaryString = `${str}${addition}`;
        while(i < additionRepeatTimes){
            primaryString +=`${additionSeparator}${addition}`;
            i++;
        }
    } else {
        primaryString = `${str}${addition}`;
    }
    if(repeatTimes > 1){
        resultString = primaryString;
        while(j < repeatTimes){
            resultString += `${separator}${primaryString}`;
            j++;
        }
        return resultString;
    }
    return primaryString;
};