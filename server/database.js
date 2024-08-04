import pg from 'pg'
const { Pool } = pg
import dotenv from 'dotenv'

dotenv.config()

const env = process.env.NODE_ENV

const SSL = process.env.POSTGRES_SSL === 'true' ? true : false

const pool = new Pool({
  host: process.env.POSTGRES_HOST,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DATABASE,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  ssl: SSL
})

pool.connect()

export const getDriver = async (number) => {
  const {rows} = await pool.query(`SELECT name FROM table1 WHERE number = $1`, [number])
  return rows[0].name
}