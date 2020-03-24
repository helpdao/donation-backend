/**
 * Checks if the given string is an address
 *
 * @method isAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
module.exports.isAddress = (address) => {
  return new Promise(async (resolve, reject) => {
    let isHex = new RegExp("^(0x)?[0-9a-f]{40}$", "i");
    let isHexUpper = new RegExp("^(0x)?[0-9a-f]{40}$");
    let isHexLower = new RegExp("^(0x)?[0-9A-F]{40}$");
    console.log(
      "Lower:" +
        isHexLower.test(address) +
        " Length: " +
        address.length +
        " UPPER: " +
        isHexUpper.test(address)
    );
    if (!isHex.test(address)) {
      console.log("Falla isAddress" + address);
      console.log("RESULT: " + /^(0x)?[0-9a-f]{40}$/i.test(address));
      // check if it has the basic requirements of an address
      reject(false);
    } else if (isHexLower.test(address) || isHexUpper.test(address)) {
      // If it's all small caps or all all caps, return true
      resolve(true);
    } else {
      // Otherwise check each case
      isChecksumAddress(address)
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    }
  });
};

/**
 * Checks if the given string is a checksummed address
 *
 * @method isChecksumAddress
 * @param {String} address the given HEX adress
 * @return {Boolean}
 */
function isChecksumAddress(address) {
  return new Promise((resolve, reject) => {
    // Check each case
    address = address.replace("0x", "");
    let addressHash = sha3(address.toLowerCase());
    for (let i = 0; i < 40; i++) {
      // the nth letter should be uppercase if the nth digit of casemap is 1
      if (
        (parseInt(addressHash[i], 16) > 7 &&
          address[i].toUpperCase() !== address[i]) ||
        (parseInt(addressHash[i], 16) <= 7 &&
          address[i].toLowerCase() !== address[i])
      ) {
        console.log("Falla en checkSum");
        reject(false);
      }
    }
    resolve(true);
  });
}
