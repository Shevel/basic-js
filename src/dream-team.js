module.exports = function createDreamTeam(members) {
  if(!members || !members.length){
    return false;
  }
    return members.map((a)=> typeof(a) === 'string' ? a.trim()[0] : '').join('').toUpperCase().split('').sort().join('');
};