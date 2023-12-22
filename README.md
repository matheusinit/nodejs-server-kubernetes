## Kubernetes Demo

This is project was used to learn about [Kubernetes](https://kubernetes.io/). The API REST it self is not the focus, but the Kubernetes and its configuration.

Kubernetes is a tool for automating the deployment and management of containerized applications. With the self-healing nature of Kubernetes, it is possible 
to deploy and manage applications without any human intervention.

The focus of this project is to run multiple instances of the API REST in a Kubernetes cluster that communicates with a PostgreSQL database

The following tools are needed to run this project:
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose/)
 - [jq](https://stedolan.github.io/jq/)
 - [curl](https://curl.se/)

The following tools are used:
 - [NodeJS](https://nodejs.org/en/)
 - [Typescript](https://www.typescriptlang.org/)
 - [Docker](https://www.docker.com/)
 - [Docker Compose](https://docs.docker.com/compose/)
 - [Prisma](https://prisma.io/)
 - [PostgreSQL](https://www.postgresql.org/)

In the project is using an API Rest with the image `matheusinit/nodejs-k8s`, in version 0.1. There are two routes:

- `/` - to get a hello world from Kubernetes Pod 
- `/users` - to insert a dumby user data and return it the list of users

### Setup

To run this application in your machine (development):

```bash
docker compose up -d 
```

*(This is needed only once)* - To apply database migrations:

```bash
docker-compose exec api-rest pnpm db:migrate
```

To check if application is running:

```bash
curl http://0.0.0.0:3000 | jq 
```



