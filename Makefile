# =================================================
# Makefile for local LLM + backend + frontend
# =================================================

# Run and build all service
up:
	docker-compose up -d --build

# Stop and remove all service
down:
	docker-compose down

# Rebuild all service without cache
rebuild:
	docker-compose build --no-cache

# Logs realtime for all service
logs:
	docker-compose logs -f

# Enter shell container backend
shell-backend:
	docker exec -it backend sh

# Enter shell container frontend
shell-frontend:
	docker exec -it frontend sh

# Enter shell container open-webui
shell-openwebui:
	docker exec -it open-webui sh

# starting all container after build
start:
	docker-compose up

# stopping all container after build
stop:
	docker-compose stop
