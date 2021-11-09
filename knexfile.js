require('dotenv').config();

module.exports = {
  github_pages: {
    client: process.env.BD_DRIVER,
    connection: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      user: process.env.DB_USERNAME,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
    migrations: {
      directory: './src/database/migrations'
    }
  }
}