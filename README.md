# NestJS CQRS GraphQL Template

![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg) ![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)

Welcome to the NestJS CQRS GraphQL Template! This template is designed to kickstart your NestJS project with a focus on CQRS (Command Query Responsibility Segregation), PostgreSQL, GraphQL, Prisma, Adminer, and Docker. It provides a solid foundation for building scalable and maintainable applications.

## Features

- **NestJS**: A powerful Node.js framework for building scalable and maintainable server-side applications.
- **CQRS**: Implement the CQRS architectural pattern for better separation of concerns in your application.
- **GraphQL**: A flexible and efficient query language for your API, powered by Apollo Server.
- **Prisma**: A modern database toolkit that simplifies database access with type-safe queries and migrations.
- **TypeScript**: Enjoy the benefits of static typing and improved tooling.
- **Linting and Formatting**: Pre-configured ESLint and Prettier settings for consistent code quality.
- **Testing**: Unit and integration tests set up with Jest for robust code testing.
- **Docker**: Dockerized PostgreSQL and Adminer for easy development and deployment.

## Getting Started

To quickly get started with this template, follow these steps:

1. Clone this repository into a new directory:

   ```bash
   git clone <repository_url> my-nestjs-app
   cd my-nestjs-app
   ```

2. Create a `.env` file based on `.env.example` and fill in the required environment variables.

3. Start the development environment (PostgreSQL and Adminer) using Docker Compose:

   ```bash
   docker-compose up -d
   ```

4. Install the project dependencies:

   ```bash
   npm install
   ```

5. Apply Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev
   ```

6. Start the development server:

   ```bash
   npm run start:dev
   ```

7. Visit `http://localhost:3000/graphql` in your browser to access the GraphQL playground.

8. Access Adminer at `http://localhost:8080` to manage your PostgreSQL database. Use the PostgreSQL credentials defined in your `.env` file.

## Development

### Database Setup

This template uses PostgreSQL as the database. Ensure you have PostgreSQL installed and running. You can also use Docker to start a PostgreSQL container:

```bash
docker-compose up -d
```

### Prisma Migrations

Prisma simplifies database migrations. To apply migrations, run:

```bash
npx prisma migrate dev
```

### Adminer Access

You can access Adminer at `http://localhost:8080` to manage your PostgreSQL database. Use the PostgreSQL credentials defined in your `.env` file.

### Testing

This template includes unit and integration tests powered by Jest. Run the tests with:

```bash
npm run test
```

### GraphQL Schema

You can explore and interact with the GraphQL API using the GraphQL Playground, which is available at `http://localhost:3000/graphql` when the server is running.

## Further Reading

Here are some resources for further reading on the technologies used in this template:

### NestJS

- [NestJS Documentation](https://docs.nestjs.com/)
- [NestJS CQRS](https://docs.nestjs.com/recipes/cqrs)

### GraphQL

- [GraphQL Official Documentation](https://graphql.org/)
- [Apollo Server Documentation](https://www.apollographql.com/docs/apollo-server/)

### Prisma

- [Prisma Documentation](https://www.prisma.io/docs/)

### TypeScript

- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)

### Docker

- [Docker Documentation](https://docs.docker.com/)

### Adminer

- [Adminer Documentation](https://www.adminer.org/)

Happy coding! 🚀
