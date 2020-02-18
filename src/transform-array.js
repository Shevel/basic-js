module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw new Error('err');
    let resultArray = [];
    if (arr.length < 1) {return [];}
    for (let i = 0, length = arr.length; i < length; i++) {
        if(arr[i] === '--discard-next') {
            i++;
            continue;
        }
        if(arr[i] === '--discard-prev') {
            resultArray.length !== 0 ? resultArray.pop() : null;
            continue;
        }
        if(arr[i] === '--double-next') {
            i < (length - 1) ? resultArray.push(arr[i + 1]) : null;
            continue;
        }
        if(arr[i] === '--double-prev') {
            i >= 1 ? resultArray.push(arr[i - 1]) : null;
            continue;
        }
        resultArray.push(arr[i]);
    }
    return resultArray;
};
