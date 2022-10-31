# ポケモン図鑑






## for developers
makeでラッピングしているコマンドは`Makefile`を参照してください。
## コンテナの起動
```shell
make up
```
[ここ](http://localhost:3000)を確認。



## プロジェクト作成コマンド
今後のメモ用、リポジトリをcloneして開発する場合は不要です。
Reactの雛形が作られます。
```shell
docker build .
docker-compose run --rm react-app sh -c "npm install -g create-react-app && create-react-app pokemon-app --template typescript"
```