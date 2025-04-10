## Como executar o projeto

### 1. Clone o repositório ou baixe o arquivo ZIP

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
```

Caso opte por baixar o ZIP, descompacte o arquivo em uma pasta de sua preferência.

---

### 2. Configure o banco de dados MySQL

- Execute a query presente no arquivo `create_computer_table.sql` em seu servidor MySQL para criar a tabela necessária.

---

### 3. Abra o projeto em sua IDE ou editor de código (opcional)

Recomendo o uso do [Visual Studio Code](https://code.visualstudio.com/), mas qualquer editor funcionará.

---

### 4. Acesse os diretórios do frontend e backend

Abra dois terminais *no projeto* e execute:

```bash
# Terminal 1 - Backend
cd backend

# Terminal 2 - Frontend
cd frontend
```

---

### 5. Instale as dependências

Em **cada terminal**, execute:

```bash
npm install
```

Aguarde a instalação de todas as dependências.

---

### 6. Inicie os servidores

Ainda em **cada terminal**, execute:

```bash
npm start
```

- O backend será iniciado em uma porta
- O frontend será iniciado em outra
---
