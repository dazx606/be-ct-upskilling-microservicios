const server = require('./src/server');

const { Character, Film, Planet } = require('./src/database');
    
    //Planet.get('1').then(res=> console.log(res))

server.listen(8004, () => {
    console.log('Database service on PORT 8004')
})