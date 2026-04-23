const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'pmw_create',
  waitForConnections: true,
  connectionLimit: 10,
})

export async function query(sql, params = []) {
  const [rows] = await pool.execute(sql, params)
  return rows
}