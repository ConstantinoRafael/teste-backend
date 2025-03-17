import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

// Criando pool de conexões
const pool = mysql.createPool({
  host: process.env.MYSQLDB_HOST || "127.0.0.1",
  port: Number(process.env.MYSQLDB_PORT) || 3306,
  user: process.env.MYSQLDB_USER || "root",
  password: process.env.MYSQLDB_PASSWORD,
  database: process.env.MYSQLDB_NAME || "wefit",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

// Função para criar a tabela se não existir
export async function initializeDatabase() {
  const connection = await pool.getConnection();
  try {
    console.log("🔄 Verificando/criando a tabela 'users'...");

    await connection.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        person_type ENUM('PHYSICS', 'JURIDIC') NOT NULL,
        cnpj VARCHAR(18) NULL,
        responsibleCpf VARCHAR(14) NULL,
        name VARCHAR(255) NOT NULL,
        mobile VARCHAR(20) NULL,
        phone VARCHAR(20) NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        zip_code VARCHAR(10) NULL,
        street VARCHAR(255) NULL,
        number VARCHAR(10) NULL,
        complement VARCHAR(255) NULL,
        city VARCHAR(100) NULL,
        neighborhood VARCHAR(100) NULL,
        state VARCHAR(2) NULL,
        terms BOOLEAN NOT NULL,
        createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );
    `);

    console.log("✅ Tabela 'users' verificada/criada com sucesso!");
  } catch (error) {
    console.error("❌ Erro ao criar/verificar tabela:", error);
  } finally {
    connection.release();
  }
}

export default pool;
