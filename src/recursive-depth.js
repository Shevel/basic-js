module.exports = class DepthCalculator {
    calculateDepth (arr) {
        let count = 0;
        if(arr.length > 0){count = 1;} 
        let i = 0;
        let isArray = true;
        while(isArray){
            for(i = 0;i < arr.length;i++){
                Array.isArray(arr[i]) ? isArray = true : isArray = false;
                if(isArray === true){
                    count++;
                    //arr = arr.flat();
                    arr = arr.reduce((acc, val) => acc.concat(val), []);
                    i--;
                }
            }
        }
        return count;
    }
};