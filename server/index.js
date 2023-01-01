require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const pg = require('pg');

const app = express();

app.use(staticMiddleware);

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

app.use(express.json());

// ---------------------------- Get Requests---------------------//

app.get('/api/players', (req, res, next) => {
  const sql = `
  SELECT *
  FROM "players"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

app.get('/api/crow-facts', (req, res, next) => {
  const sql = `
  SELECT *
  FROM "facts"
  `;
  db.query(sql)
    .then(result => {
      res.json(result.rows);
    })
    .catch(err => next(err));
});

// ---------------------------- Post Requests---------------------//
app.post('/api/uploads/contact', (req, res, next) => {
  const { name, email, message } = req.body;
  if (!message) {
    throw new ClientError(400, 'Message is empty');
  }
  const sql = `
    insert into "contact" ("name", "email", "message")
    values ($1, $2, $3)
    returning *
    `;
  const params = [name, email, message];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});

app.post('/api/uploads/crow-facts', (req, res, next) => {
  const { name, fact } = req.body;
  if (!fact) {
    throw new ClientError(400, 'Fact is empty');
  }
  const sql = `
    insert into "facts" ("name", "fact")
    values ($1, $2)
    returning *
    `;
  const params = [name, fact];
  db.query(sql, params)
    .then(result => {
      res.json(result.rows[0]);
    })
    .catch(err => next(err));
});
// ---------------------------- END REQUESTS ---------------------//

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
