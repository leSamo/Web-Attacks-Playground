const { Client } = require('pg');

const dbExecute = async (query, values = [], callback = () => {}) => {
    const client = new Client({
        connectionString: process.env.DATABASE_URL,
        ssl: false
    });

    console.log(process.env.DATABASE_URL);

    await client.connect()

    return client.query(query, values).then((res) => {
        callback(res);

        client.end()
        return res;
    });
}

module.exports = { dbExecute };
