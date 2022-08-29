const env = process.env;

// do not put password or any sensitive info here, done only for demo
const config = {
    db: {
        host: env.DB_HOST || 'sql6.freemysqlhosting.net',
        user: env.DB_USER || 'sql6515614',
        password: env.DB_PASSWORD || 'uBWMzgb7gS',
        database: env.DB_NAME || 'sql6515614',
        waitForConnections: true
    }
};

module.exports = config;