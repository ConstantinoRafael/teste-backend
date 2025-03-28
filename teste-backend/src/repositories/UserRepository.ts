import pool from "../config/db";
import { User } from "../models/User";

export class UserRepository {
  async findByEmail(email: string): Promise<User | null> {
    const [rows] = await pool.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
    return (rows as User[])[0] || null;
  }

  async create(user: User): Promise<void> {
    const query = `
      INSERT INTO users (
        person_type, cnpj, responsibleCpf, name, mobile, phone, email, zip_code, 
        street, number, complement, city, neighborhood, state, terms, createdAt, updatedAt
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())
    `;

    try {
      const result = await pool.query(query, [
        user.person_type,
        user.cnpj || null,
        user.responsibleCpf || null,
        user.name,
        user.mobile || null,
        user.phone || null,
        user.email,
        user.zip_code || null,
        user.street || null,
        user.number || null,
        user.complement || null,
        user.city || null,
        user.neighborhood || null,
        user.state || null,
        user.terms ?? true,
      ]);

      console.log("✅ Usuário criado com sucesso!", result);
    } catch (error) {
      console.error("❌ Erro ao inserir usuário:", error);
      throw error;
    }
  }
}
