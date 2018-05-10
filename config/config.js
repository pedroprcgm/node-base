
const config = {
    envDevelopment: {
        PORT: 3000
    },
    envProduction: {
        PORT: 443
    },
    dbDevelopment: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'database',
    },
    dbProduction: {
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'database',
    }
};

module.exports = config;