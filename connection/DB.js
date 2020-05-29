const sql = require('mssql');
const config = {
	user: 'sa',
	password: '8ik,mnbhu8',
	server: '172.16.165.202',
	database: 'SageNet_DIO'
};
const poolPromise = new sql.ConnectionPool(config)
	.connect()
	.then((pool) => {
		console.log('Connected to MSSQL');
		return pool;
	})
    .catch((err) => console.log('Database Connection Failed! Bad Config: ', err));
    

module.exports = {
	sql,
	poolPromise
};



