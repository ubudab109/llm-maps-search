# Places Project with Open Web UI

This project is a full-stack application integrating Node JS backend, React JS frontend, Open Web UI, and Google Maps API. Users can search for places and view results on embedded Google Maps.

## Project Structure

```
llm-maps-search/
├─ backend/               # Node JS + Express backend
├─ places-frontend/       # React JS frontend
├─ docker-compose.yaml    # Docker Compose configuration
├─ Makefile               # Shortcut for building and running containers
└─ README.md
```

## Technologies Used

- Backend: Node JS + Express
- Frontend: React JS
- Open Web UI: [https://github.com/open-webui/open-webui](https://github.com/open-webui/open-webui)
- Google Maps API
- Docker containerization

## Prerequisites

1. Install Docker and Docker Compose.
2. Copy `.env.example` to `.env` in both `backend/` and `places-frontend/`.
3. Fill in Google Maps API keys in `.env`.
4. Setup Open Web UI: choose a model and provide API key (to be configured manually before using the frontend).

## Running the Project

1. Go to the root folder of the project.
2. Run all containers:

```bash
make up
```

3. Once all containers are up, access the application at:

- Open Web UI: [http://localhost:3000/](http://localhost:3000/)
- Backend API: [http://localhost:3003/](http://localhost:3003/)
- Frontend: [http://localhost:5173/](http://localhost:5173/)

## Notes

- Before making any prompts in the frontend, ensure Open Web UI is properly configured with a model and API key.
  - Quick Setup: https://docs.openwebui.com/getting-started/quick-start/
  - Generate API Key: https://docs.openwebui.com/getting-started/api-endpoints
  - After generate API KEY, put the value inside `.env` file from `/backend/.env` in `OPENWEBUI_API_KEY`
- Frontend communicates with backend via `/api/search`.
- Docker Compose sets up three main services: Open Web UI, backend, and frontend.
