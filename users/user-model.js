const db = require('../data/db-config.js');

module.exports = {
    findUserPost,
}

function findUserPost(id) {
    return db('posts as p')
    .join('users as u', 'u.id', 'p.user_id')
    .where({ user_id: id })
    .select('p.id','p.contents', 'u.username')
    
}
    
  