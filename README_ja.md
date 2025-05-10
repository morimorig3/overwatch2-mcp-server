# Overwatch2 MCP Server

## 概要
`overwatch2-mcp-server`は、オーバーウォッチのヒーローデータを提供するMCPサーバーです。このサーバーは、ヒーローの一覧を取得したり、特定のヒーローの詳細情報を取得するためのツールを提供します。

## 提供しているツール

- `get_heroes`: ヒーローの一覧を取得します。
- `get_hero`: ヒーローの詳細情報を取得します。

## インストール

このプロジェクトをクローンし、依存関係をインストールします。

```bash
git clone https://github.com/morimorig3/overwatch2-mcp-server
cd overwatch2-mcp-server
npm install
```

## 使用方法

### ビルド

```bash
npm run build
```

### MCPサーバーの登録

```
{
  "mcpServers": {
    "Overwatch2-MCP": {
      "command": "node",
      "args": [
        "/PATH/TO/BUILD/FILE/main.js"
      ]
    }
  }
}
```

## 開発用依存関係

- `typescript`: TypeScriptのコンパイラ。
- `openapi-typescript`: OpenAPI仕様からTypeScript型を生成。

## ライセンス

このプロジェクトはISCライセンスの下で公開されています。

## 利用しているAPI

このプロジェクトでは、[Overfast API](https://overfast-api.tekrop.fr/docs)を利用して、オーバーウォッチのヒーローデータを取得しています。 