# 🛠️ Projeto Backend - Cadastro de Usuários

Este é um projeto backend desenvolvido com **Node.js**, **Express**, **MySQL** e **Docker**, utilizando **TypeScript** e **Joi** para validação de dados.

---

## 🚀 **Como Executar o Projeto**

### 📌 **1. Clonar o Repositório**

```sh
git clone https://github.com/ConstantinoRafael/teste-backend.git
cd teste-backend
```

### 📌 **2. Criar o Banco de Dados com Docker**

```sh
docker-compose up -d
```

Isso criará um **container MySQL** com a estrutura do banco.

### 📌 **3. Instalar as Dependências**

```sh
npm install
```

### 📌 **4. Iniciar o Servidor**

```sh
npm start
```

O servidor iniciará na porta **`4568`**.

---

## 📡 **Endpoints da API**

### **📌 Criar um Usuário**

- **URL:** `POST http://localhost:4568/users/register`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**

```json
{
  "person_type": "JURIDIC",
  "cnpj": "12.345.678/0001-90",
  "responsibleCpf": "123.456.789-09",
  "name": "Empresa Teste",
  "mobile": "11987654321",
  "phone": "1134567890",
  "email": "teste@email.com",
  "zip_code": "01010-010",
  "street": "Rua Teste",
  "number": "123",
  "complement": "Sala 2",
  "city": "São Paulo",
  "neighborhood": "Centro",
  "state": "SP",
  "terms": true
}
```

### **📌 Respostas Possíveis**

| Código                         | Descrição                                 |
| ------------------------------ | ----------------------------------------- |
| `201 Created` ✅               | Usuário cadastrado com sucesso            |
| `400 Bad Request` ❌           | Erro de validação (exemplo: CPF inválido) |
| `409 Conflict` ❌              | E-mail já cadastrado                      |
| `500 Internal Server Error` ❌ | Erro interno no servidor                  |

---

## 🛠️ **Tecnologias Utilizadas**

- **Node.js**
- **Express.js**
- **MySQL** (Docker)
- **TypeScript**
- **Joi** (Validação de dados)
- **Docker Compose**

---

