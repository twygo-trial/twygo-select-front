# Twygo Select Front

![image](https://github.com/user-attachments/assets/b9a1dc73-8b27-4dc0-82d0-2ed5602c7566)

Este é o frontend do projeto [**Twygo Select**](https://github.com/twygo-trial/twygo-select), uma aplicação web de cursos responsiva que exibe uma lista de cursos e permite o cadastro, edição e exclusão de cursos. O projeto foi criado utilizando **React**, **Vite**, **TypeScript** e **Chakra UI**, com suporte para **Docker**.

## Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Vite**: Ferramenta de build rápida para projetos front-end.
- **TypeScript**: Superconjunto tipado de JavaScript.
- **Chakra UI**: Biblioteca de componentes acessíveis e customizáveis para React.
- **Docker**: Plataforma de contêineres para simplificar a execução de ambientes de desenvolvimento.
- **Jest**: Framework de testes unitários.

## Funcionalidades

- Listagem de cursos ativos.
- Formulário de cadastro de cursos.
- Edição e exclusão de cursos.
- Layout responsivo para dispositivos móveis.
- Visualização otimizada de vídeos nos cursos.
- Relatório do tamanho total ocupado pelos vídeos dos cursos.

## Requisitos do Sistema

- Node.js v20 ou superior
- Yarn
- Docker (opcional, para rodar com contêineres)

## Instalação e Configuração

```bash
git clone https://github.com/twygo-trial/twygo-select-front.git
cd twygo-select-front
yarn
yarn dev
# acesse http://localhost:5173/
```

Opcionalmente você pode usar `docker compose up --build` e acessar via `http://localhost:3001/`

## Estrutura do Projeto

```bash
twygo-select-front/
│
├── src/
│   ├── components/      # Componentes reutilizáveis
│   ├── pages/           # Páginas da aplicação (listagem, cadastro)
│   ├── routes/          # Configuração das rotas
│   ├── App.tsx          # Componente principal
│   └── main.tsx         # Ponto de entrada da aplicação
├── public/              # Arquivos públicos estáticos
├── Dockerfile           # Definição do ambiente Docker
├── docker-compose.yml   # Configuração do Docker Compose
├── package.json         # Dependências e scripts
└── README.md            # Documentação do projeto
```

## Testes

Você pode usar as [**fixtures de vídeos**](https://github.com/twygo-trial/twygo-select/tree/main/test/fixtures/files) para testar o projeto.
