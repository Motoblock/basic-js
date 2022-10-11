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
class VigenereCipheringMachine {
  contructor(ttype = true) {
    this.ttype = ttype;
  }

  encrypt(message , key) {
    if (message === '') {
      throw new Error('Error!')
    }
    key = key.toUpperCase();
  //  throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
  decrypt(message , key) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return message.toUpperCase();
  }
}
  const user = new VigenereCipheringMachine('attack at dawn!','alphonse');
console.log(user);
module.exports = {
  VigenereCipheringMachine
};
