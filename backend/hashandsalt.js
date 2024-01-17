const bcrypt = require('bcrypt');

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(password, salt);
  return { hash, salt };
}

function comparePassword(password, hash, salt) {
  const newHash = bcrypt.hashSync(password, salt);
  return hash === newHash;
}

module.exports = { hashPassword, comparePassword};