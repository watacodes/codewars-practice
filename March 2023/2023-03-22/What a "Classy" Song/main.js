/*

Codewars, 7k: What a "Classy" Song

*/

class Song {
  constructor (title, artist) {
    this.title = title;
    this.artist = artist;
    this.pastUsers = [];
  }
  
  howMany(users) {
    let counter = 0;
    for (let user of users) {
      user = user.toLowerCase()
      if (!this.pastUsers.includes(user)) {
        this.pastUsers.push(user);
        counter++;
      }
    }
    return counter;
  }
}
