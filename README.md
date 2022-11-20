# Web attack playground

This app is available at: https://web-attacks-playground.fly.dev/

Web app which has web vulnerabilites embedded with guides with gamification elements on how to exploit them. Goal of this app and paper is to present these vulnerabilities in a user-friendly way and enable hands-on approach how to identify them to raise awareness of these issues.

# Running the app locally
## First time setup
1. Make sure you have [Node.js](https://nodejs.org/en/) version >= 18 installed
2. Run `npm install` to install all dependencies

### Setting up a custom PostgreSQL server
1. Setup a PostgreSQL server with a new database
2. Run `./src/seed.sql` to seed your database
3. In `./env` file edit `DATABASE_URL` variable to contain your [database's connection string](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING)

## Start the app
1. Start your custom PostgreSQL server
2. Run `npm run build` to build the frontend
3. Run `npm run start` to start the web server
4. App will be available at `localhost:5000`
