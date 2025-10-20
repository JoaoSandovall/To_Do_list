ToDo List Full-Stack (React + Python)Uma aplicação completa de gerenciamento de tarefas (To-Do List) construída com uma arquitetura de serviços desacoplada. O projeto é estruturado como um monorepo, contendo um front-end reativo em React (com Vite e TypeScript) e um back-end de API RESTful em Python (com Flask).Arquitetura do ProjetoO repositório está dividido em duas partes principais:/frontend: Contém a aplicação client-side em React./backend: Contém o servidor da API RESTful em Python.Tech Stack (Tecnologias Utilizadas)Front-EndReact 19Vite (Build tool e servidor de desenvolvimento)TypeScriptCSS Modules (Para estilo de componentes escopados)Back-EndPython 3Flask (Servidor web e roteamento de API)Flask-CORS (Gerenciamento de Cross-Origin Resource Sharing)SQLite 3 (Banco de dados SQL leve para persistência de dados)Funcionalidades ImplementadasCRUD completo de Tarefas:Create: Adicionar novas tarefas.Read: Listar todas as tarefas cadastradas.Update: Marcar/Desmarcar tarefas como concluídas.Delete: Excluir tarefas da lista.Estado Reativo: A interface do usuário é atualizada dinamicamente com base nas interações.Contadores Dinâmicos: Cálculo em tempo real do total de tarefas criadas e concluídas.Persistência de Dados: As tarefas são salvas no servidor e persistem após o recarregamento da página.Pré-requisitosPara executar este projeto localmente, você precisará ter as seguintes ferramentas instaladas:Python (versão 3.8 ou superior)Node.js (versão 18 ou superior) e npm.Instalação e ExecuçãoSiga os passos abaixo para configurar e executar a aplicação em seu ambiente de desenvolvimento. Ambos os servidores (back-end e front-end) devem estar rodando simultaneamente.1. Configuração do Back-end (API Python)Primeiro, prepare o servidor que fornecerá os dados.Bash# 1. Navegue até a pasta do back-end
cd backend

# 2. Crie um ambiente virtual (recomendado)
python -m venv venv
source venv/bin/activate  # No Windows, use: venv\Scripts\activate

# 3. Instale as dependências
# (Se você não tiver um requirements.txt, crie-o com os pacotes abaixo)
pip install Flask Flask-CORS

# 4. Inicie o servidor
# O banco de dados (tarefas.db) será criado automaticamente
python main.py

# O servidor estará rodando em: http://127.0.0.1:5000
2. Configuração do Front-end (Aplicação React)Em um segundo terminal, configure e inicie a interface do usuário.Bash# 1. Navegue até a pasta do front-end
cd frontend

# 2. Instale os pacotes npm
npm install

# 3. Inicie o servidor de desenvolvimento
npm run dev
Após executar os comandos, seu navegador será aberto automaticamente no endereço http://localhost:5173 (ou porta similar) e a aplicação estará totalmente funcional, conectada ao seu back-end local.Definição da API (Endpoints)O servidor back-end expõe os seguintes endpoints RESTful:MétodoEndpointDescriçãoGET/tasksRetorna um array JSON com todas as tarefas.POST/tasksCria uma nova tarefa. Requer um corpo JSON: {"tarefa": "Nome da tarefa"}.PUT/tasks/<int:id_tarefa>/completeAlterna o status completada (de true para false e vice-versa) de uma tarefa específica.DELETE/tasks/<int:id_tarefa>Exclui uma tarefa específica com base no seu id.