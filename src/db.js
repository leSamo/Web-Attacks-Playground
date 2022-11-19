const { Client } = require('pg');

const dbExecute = async (query, values = [], callback = () => {}) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: false
    });

    await client.connect()

    try {
        return client.query(query, values).then((res) => {
            callback(res);
    
            client.end()
            return res;
        });
    }
    catch (e) {
        return e;
    }
}

module.exports = { dbExecute };
