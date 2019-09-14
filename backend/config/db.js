const config = {
	client: 'mysql',
	connection: {
		host : 'mysql11-farm76.kinghost.net',
        user : 'peruibemelhor01',
        password : '5iCvQQgeFMLPSE',
        database : 'peruibemelhor01'
	}
}

const knex = require('knex')(config)

module.exports = knex