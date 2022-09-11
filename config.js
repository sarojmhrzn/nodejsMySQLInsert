const env = process.env;

// do not put password or any sensitive info here, done only for demo
const config = {
    PORT: env.PORT || 3000,
    db: {
        DB_USERNAME: env.USERNAME || 'sr6y7uc3u5c3tojios79',
        DB_PASSWORD: env.PASSWORD,
        DB_HOST: env.HOST || 'us-east.connect.psdb.cloud',
        NAME: env.NAME || 'cars'
    },
    listPerPage: env.LIST_PER_PAGE || 10,
};

module.exports = config;