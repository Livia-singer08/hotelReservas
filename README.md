🏨 **Hotel Reservas**
Sistema de gerenciamento de quartos e reservas desenvolvido para facilitar o controle de hospedagens, permitindo o cadastro de quartos, administração de reservas e visualização de informações de forma simples e organizada.

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
* Listagem de quartos cadastrados
* Remoção de quartos
* Visualização das reservas associadas a cada quarto

📅 **Gerenciamento de Reservas**

* Cadastro de reservas
* Listagem de reservas por quarto
* Exclusão de reservas
* Relacionamento entre quartos e reservas

---

📂 **Estrutura do Projeto**

```
hotelreservas/
│
├── src/
│   ├── controllers/
│   │   ├── quartos.controller.js
│   │   └── reservas.controller.js
│   │
│   ├── routes/
│   │   ├── quartos.routes.js
│   │   └── reservas.routes.js
│   │
│   ├── config/
│   │   └── prisma.js
│   │
│   ├── prisma/
│   │   └── schema.prisma
│   │
│   └── server.js
│
├── web/
│   ├── index.html
│   ├── reservas.html
│   ├── style.css
│   └── script.js
│
├── docs/
│   ├── insomnia.json
│   └── migration.sql
│
├── wireframes/
│   ├── Página 1 - Quartos
│   └── Página 2 - Reservas
│
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

3. Configurar variáveis de ambiente
   Crie um arquivo `.env` na raiz do projeto:

```
DATABASE_URL="mysql://root@localhost:3306/hotel_db"
PORT=3000
```

4. Executar migrations

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
* DELETE `/quarto/:id` → remover quarto

**Reservas**

* POST `/reserva` → cadastrar reserva
* GET `/reserva/:quarto_id` → listar reservas do quarto
* DELETE `/reserva/:id` → remover reserva

---

📸 **Protótipos**

![Protótipo de Referência](./Wireframes/Protótipo%20de%20Referência.png)

### Tela de Quartos

![Quartos Cadastrados](./Wireframes/Página%201%20-%20Quartos%20Cadastrados.png)
![Cadastrar Novo Quarto](./Wireframes/Página%201%20-%20Cadastrar%20Novo%20Quarto.png)

### Tela de Reservas

![Reservas do Quarto](./Wireframes/Página%202%20-%20Reservas%20do%20Quarto.png)
![Cadastrar Nova Reserva](./Wireframes/Página%202%20-%20Cadastrar%20Nova%20Reserva.png)

---

📖 **Documentação**

* Insomnia: `docs/insomnia.json`
* Banco de dados: `docs/migration.sql`

---

👩‍💻 **Autora**
Lívia Mazzolini Guarizo

Projeto acadêmico desenvolvido para fins de aprendizado, aplicando conceitos de desenvolvimento web full stack com Node.js, Express, Prisma e MySQL.