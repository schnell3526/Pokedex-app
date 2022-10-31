up: ## コンテナ起動
	docker compose up -d
down: ## コンテナの破棄
	docker compose down --remove-orphans


init: ## プロジェクト作成(基本使わない)
	docker-compose run --rm react-app sh -c "npm install -g create-react-app && create-react-app pokemon-app --template typescript"


# help
help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'
