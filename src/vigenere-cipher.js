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
  'Y', 'Z']

class VigenereCipheringMachine {
  constructor (ttype = true) {
    this.ttype = ttype;
  }

  encrypt(message, key) {
    if (message == undefined || key == undefined || message === '') {
      throw new Error('Incorrect arguments!');
    }
    key = key.toUpperCase();
    console.log(key);
    let messtr = message.toUpperCase();
    let index = [];
    let countstr = 0;
    for(let i = 0; i < messtr.length; i++) {
    if (countstr === key.length) {
        countstr = 0;
      }
      if(messtr.charCodeAt(i) > 64 && messtr.charCodeAt(i) < 91) {
        //console.log('message=',messtr.charCodeAt(i), 'key=',key.charCodeAt(countstr));
        let tmp = (messtr.charCodeAt(i) + key.charCodeAt(countstr)) % 26;
        index.push(alphabet[tmp]);
        countstr++;
      } else {
        index.push(messtr[i]);
      }
    }
    if(!this.ttype) index.reverse();
    return index.join('');
  }

  decrypt(message , key) {
    if (message == undefined || key == undefined || message === '') {
      throw new Error('Incorrect arguments!');
    }
    key = key.toUpperCase();
    let messtr = '';
    messtr = message.toUpperCase();
    let index = [];
    let countstr = 0;
    for(let i = 0; i < messtr.length; i++) {
    if (countstr === key.length) {
        countstr = 0;
      }
      if(messtr.charCodeAt(i) > 64 && messtr.charCodeAt(i) < 91) {
        let tmp = ((messtr.charCodeAt(i) - key.charCodeAt(countstr)) + 26 ) % 26;
        index.push(alphabet[tmp]);
        countstr++;
      } else {
        index.push(messtr[i]);
      }
    }
    if(!this.ttype) index.reverse();
    return index.join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};

  const user = new VigenereCipheringMachine();
//console.log(user.decrypt('attack at dawn!','alphonse'));
