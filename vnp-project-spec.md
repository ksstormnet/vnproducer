# Virtual News Producer (VNP) Project Specification

## Overview
Virtual News Producer is a content management system for a remote workforce to collect, write, and deliver news content to radio stations across the US. It's a cross-platform web application hosted on a Docker server with Cloudflare R2 storage for media uploads.

## Tech Stack
- Frontend: React (Latest LTS), Vite, Chakra UI
- Backend: Express.js
- Database: MariaDB with Prisma ORM
- State Management: React Query
- Testing: Jest with React Testing Library
- Package Manager: pnpm
- Monorepo Structure: pnpm workspaces
- API Documentation: Swagger/OpenAPI
- Containerization: Docker
- CI/CD: GitHub Actions
- Logging: Loki, Grafana, Prometheus

## Development Environment
- OS: Ubuntu 24.04
- IDE: Visual Studio Code with devcontainer extension
- Docker version: 27.3.1
- Docker Compose version: 2.29.7

## Project Structure
- Monorepo at `/data/repo/ksstorm/vnproducer`
- Namespace: `@vnp/`

## Database Configuration
- Host: mariadb
- User: vn-producer
- Password: producer
- Database: vnproducer

## Key Features
1. User Roles: SuperAdmin, Admin, Staff (Reporter/Anchor), Public
2. Content Management: Stories, Casts, Wires, Blogs
3. Audio Editing and Recording
4. SIP Phone Integration
5. Newscast Creation and Management
6. Multi-station Support

## UI Layout
- Three-pane layout: Wire/Audio List, Story Editor, Browser/Cast Editor
- Responsive design with tab support for multiple stations

## Security
- Google OAuth2 and username/password authentication
- SSL termination via nginx-proxy-manager

## Deployment
- Blue-green deployment from development to production
- Docker Compose and Portainer for infrastructure management

## Next Steps
1. Set up ESLint and Prettier
2. Configure environment variables
3. Establish database connection
4. Expand backend framework (routes, controllers, services, middleware)
5. Implement frontend state management
6. Integrate Chakra UI
7. Configure Jest for testing
8. Set up Swagger/OpenAPI for backend API
9. Create basic CI/CD pipeline with GitHub Actions
10. Update README

## Additional Notes
- Use `.env` files for variables and secrets
- Implement robust logging and error handling
- Ensure test coverage exceeds 85%
- Write tests before code (TDD approach)
- Use TypeScript throughout the project
- Implement container logging and monitoring
- Create a drill-down dashboard for debugging
- Story is the central unit of content; other features are views of stories
