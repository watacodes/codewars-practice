/*

Codewars, 6k: Can you keep a secret?

*/

function createSecretHolder(secret) {
  return {
    getSecret: () => secret,
    setSecret: value => secret = value
  };
};