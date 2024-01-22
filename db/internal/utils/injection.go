package utils

const TableExistQuery = `SELECT EXISTS (
  SELECT FROM
    pg_tables
  WHERE
    schemaname = 'public' AND
    tablename = 'user'
  )`

const TableCreateUserQuery = `CREATE TABLE IF NOT EXISTS 'user' (
  id serial PRIMARY KEY,
  created_at TIMESTAMP NOT NULL,
  first_name VARCHAR(32) NOT NULL,
  last_name VARCHAR(32) NOT NULL,
  username VARCHAR(32) UNIQUE NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL
  )`

const NewUserQuery = `
  INSERT INTO 'user' (created_at, first_name, last_name, username, email)
  VALUES ($1, $2, $3, $4, $5)
  `
