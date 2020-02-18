const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== "number" || position > this.chain.length - 1 || position <= 0) {
      this.chain = [];
      throw new Error('err');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    let str = "( ";
    this.chain.forEach((a, i) => {
      if (i === this.chain.length - 1) { str += `${a} )`;} 
      else {str += `${a} )~~( `;}
    });
    this.chain = [];
    return str;
  }
};

module.exports = chainMaker;
