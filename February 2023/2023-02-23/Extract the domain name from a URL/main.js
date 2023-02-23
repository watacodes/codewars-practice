/*

Codewars, 5k: Extract the domain name from a URL

*/

function domainName(url) {
  return url.replace(/^https?:\/\//, '')
            .replace(/^www\./, '')
            .replace(/\..*/, '');
}