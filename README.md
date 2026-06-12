### 🏨 **Hotel Reservas**
Sistema de gerenciamento de quartos e reservas criado para facilitar o controle de hospedagens, permitindo cadastrar quartos, gerenciar reservas e visualizar informações de forma simples e organizada.

---

🚀 **Tecnologias Utilizadas**

**Backend**

* Node.js
* Express.js
* Prisma ORM
* MySQL

**Frontend**

* HTML5
* CSS3
* JavaScript

---

📋 **Funcionalidades**

🛏️ **Gerenciamento de Quartos**

* Cadastro de quartos
* Listagem de quartos
* Exclusão de quartos
* Visualização das reservas vinculadas

📅 **Gerenciamento de Reservas**

* Cadastro de reservas
* Listagem por quarto
* Exclusão de reservas
* Relação entre quartos e reservas

---

📂 **Estrutura do Projeto**

```
hotelreservas/
│
├── api/
│   ├── controllers/
│   ├── routes/
│   ├── config/
│   ├── prisma/
│   └── server.js
│
├── web/
│   ├── index.html
│   ├── reservas.html
│   ├── style.css
│   └── script.js
│
├── docs/
├── wireframes/
└── README.md
```

---

⚙️ **Instalação**

1. Clonar o repositório

```bash
git clone <url-do-repositorio>
cd hotelreservas
```

2. Instalar dependências

```bash
npm install
```

3. Configurar `.env`

```
DATABASE_URL="mysql://usuario:senha@localhost:3306/hotel_db"
PORT=3000
```

4. Rodar migrations

```bash
npx prisma migrate dev
```

5. Gerar Prisma Client

```bash
npx prisma generate
```

6. Iniciar servidor

```bash
npm start
```

---

🔗 **Endpoints da API**

**Quartos**

* GET `/quarto` → listar quartos
* POST `/quarto` → cadastrar quarto
* DELETE `/quarto/:id` → excluir quarto

**Reservas**

* POST `/reserva` → cadastrar reserva
* GET `/reserva/:quarto_id` → listar reservas
* DELETE `/reserva/:id` → excluir reserva

---

📸 **Protótipos**

* Tela de quartos
* Tela de reservas

---

👩‍💻 **Autora**
Lívia Mazzolini Guarizo

Projeto acadêmico voltado ao aprendizado de desenvolvimento full stack com Node.js, Express, Prisma e MySQL.
