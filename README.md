# Overwatch2 MCP Server

## Overview
`overwatch2-mcp-server` is an MCP server that provides hero data for Overwatch. This server offers tools to retrieve a list of heroes and obtain detailed information about specific heroes.

## Provided Tools

- `get_heroes`: Retrieves a list of heroes.
- `get_hero`: Retrieves detailed information about a hero.

## Installation

Clone this project and install the dependencies.

```bash
git clone https://github.com/morimorig3/overwatch2-mcp-server
cd overwatch2-mcp-server
npm install
```

## Usage

### Build

```bash
npm run build
```

### Registering the MCP Server

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

## Development Dependencies

- `typescript`: TypeScript compiler.
- `openapi-typescript`: Generates TypeScript types from OpenAPI specifications.

## License

This project is licensed under the ISC License. 