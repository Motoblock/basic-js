const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats( domains ) {
  
  let dns = {};

  for (const onedomain of domains) {
    let dom = '';
    let strdomainn = onedomain.split(".").reverse();
  //console.log(strdomainn);
    for (const onedns of strdomainn) {
      dom = `${dom}.${onedns}`;
      if (!dns[dom]) {
        dns[dom] = 0;
      }
      dns[dom] += 1;
    }
  }
  return dns;
}

module.exports = {
  getDNSStats
};

console.log(getDNSStats([
    'code.yandex.ru',
    'music.yandex.ru',
    'yandex.ru'
   ]))