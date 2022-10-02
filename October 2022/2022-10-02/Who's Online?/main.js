/*

Codewars, 7k: Who's Online?


You have a group chat application, but who is online!?

You want to show your users which of their friends are online and available to chat!

Given an input of an array of objects containing usernames, status and time since last activity (in mins), create a function to work out who is online, offline and away.

If someone is online but their lastActivity was more than 10 minutes ago they are to be considered away.

The input data has the following structure:

[{
  username: 'David',
  status: 'online',
  lastActivity: 10
}, {
  username: 'Lucy', 
  status: 'offline',
  lastActivity: 22
}, {
  username: 'Bob', 
  status: 'online',
  lastActivity: 104
}]
The corresponding output should look as follows:

{
  online: ['David'],
  offline: ['Lucy'],
  away: ['Bob']
}
If for example, no users are online the output should look as follows:

{
  offline: ['Lucy'],
  away: ['Bob']
}

*/

const whosOnline = f => {
  let obj = {}
  
  for (let i of f) {
    if (i.status === 'online' && i.lastActivity <= 10) {
      if (!obj.online) {
        obj.online = [];
      }
      obj.online.push(i.username);
    } else if (i.status === 'offline') {
      if (!obj.offline) {
        obj.offline = [];
      }
      obj.offline.push(i.username);
    } else if (i.status === 'away' || i.lastActivity > 10) {
      if (!obj.away) {
        obj.away = [];
      }
      obj.away.push(i.username);
    }
  }
  
  return obj;
}