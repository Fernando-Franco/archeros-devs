const config = {
	client: 'mysql',
	connection: {
		host : 'localhost',
        user : 'root',
        password : '',
        database : 'peruibe'
	}
}

const knex = require('knex')(config)

module.exports = knex