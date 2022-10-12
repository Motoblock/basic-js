const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
var   alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
  'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
  'Y', 'Z'
]
class VigenereCipheringMachine {

  contructor(ttype = true) {
    this.ttype = ttype;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined || message === '') {
      throw new Error('Incorrect arguments!');
    }
    key = key.toUpperCase();
    console.log(key);
     let keystr = '', messtr = ''; //let i = 2;
     messtr = message.toUpperCase().split("");
    //  if(this.ttype != true) messtr = messtr.reverse();

    //  while(keystr.length < message.length) {
    //   keystr = key.repeat(i);
    //   i++;
    // }

    let index = [];
    let countstr = 0;
   // console.log(messtr);
     for(let i = 0; i < messtr.length; i++) {
      if (countstr === key.length) {
          countstr = 0;
        }
        let tmp = (message.charCodeAt(i) + key.charCodeAt(countstr)) % 26;
        console.log(tmp);
        index.push(alphabet[tmp]);
        countstr++;
      
  //  i = ++i % key.length
    //return charCodeAt(index);
  }
  if(this.ttype != true) index.reverse();
  index.join('');
  
    //return message.split("").reverse().join("").toUpperCase();
  
  //  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message , key) {
    if (message == undefined || key == undefined || message === '') {
      throw new Error('Incorrect arguments!');
    }
    key = key.toUpperCase();
    let keystr = '', messtr = ''; let i = 2;
    messtr = message.toUpperCase().split("");
  
    
  //   while(keystr.length < message.length) {
  //    keystr = key.repeat(i);
  //    i++;
  //  }
   console.log(keystr);
   let index = [];
   let countstr = 0;
    for(let i = 0; i < messtr.length; i++) {
      if (countstr === key.length) {
        countstr = 0;
      }
  let tmp = (charCodeAt(messtr[i]) + charCodeAt(key[countstr])) % 26;
   index.push(charCodeAt(tmp));
   countstr++;
  //  if (code < 0) {
  //   code = 26 + code;
  // }
 //  i = ++i % key.length
   //return charCodeAt(index);
 }
 if(this.ttype != true) index.reverse();
 index.join('');

  }
}

module.exports = {
  VigenereCipheringMachine
};

  // const user = new VigenereCipheringMachine('attack at dawn!','alphonse');
  const user = new VigenereCipheringMachine();
console.log(user.encrypt('attack at dawn!','alphonse'));
