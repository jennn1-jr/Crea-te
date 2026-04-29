const mysql = require('mysql2/promise')

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'pmw_create',
  port: process.env.DB_PORT || 4000,
  waitForConnections: true,
  
  // --- PENGATURAN KHUSUS SERVERLESS (VERCEL) ---
  connectionLimit: 5, 
  queueLimit: 0,
  enableKeepAlive: true,
  idleTimeout: 10000,
  
  ssl: {
    rejectUnauthorized: true
  }
})

export async function query(sql, params = []) {
  const [rows] = await pool.execute(sql, params)
  return rows
}