const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if(!members && !members != null && !Array.isArray(members)) { console.log(false);return false;}

    let membersSecret = [];
    if(Array.isArray(members)) {
    for(let i of members) {
      if(i !== undefined && typeof i === 'string' && i !== null) {console.log(i);
        let k = i.trim().toUpperCase(); membersSecret.push(k);}
    }
    if(membersSecret.length === 0) return false;
    let membersSort = membersSecret.sort();
    let res;
    res = membersSort.map(function(num) { if(num !== undefined && (typeof num === 'string')) { return  num[0];} });

    return res.join("");
  } else return false;
}

module.exports = {
  createDreamTeam
};
/*createDreamTeam([  { 'foo': 'bar' }]);//
createDreamTeam([ false]);//
createDreamTeam([ undefined]);//
createDreamTeam([3]);//
createDreamTeam([   'Amelia',
null,
undefined,
'Ruby',
'Lily',
11,
'Grace',
22,
'Millie',
'Daisy',
true,
'Freya',
false,
'Erin',
new Set([1, 2, 3, 4, 5]),
'Megan',
{
  'John': 'Smith'
},
'Jasmine',
1,
2,
3,
4,
5,
'Brooke',]);
createDreamTeam([null]);
createDreamTeam([null]);*/