module.exports = class DepthCalculator {

    calculateDepth (arr) {
        if(Array.isArray(arr) && arr.length === 0){return 1}
        if(!Array.isArray(arr)){ return 0}
        return 1 + Math.max.apply(null, arr.map((a) => this.calculateDepth(a)));
    }
};