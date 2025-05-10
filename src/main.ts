import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { fetchHeroData, getHeroes, getHeroKey } from "./service/apiService.js";

// MCPサーバーの作成
const server = new McpServer({
  name: "Overwatch Hero Server",
  version: "1.0.0",
});

// get_heroesツールの追加
server.tool("get_heroes", {}, async () => {
  try {
    const heroes = await getHeroes();
    return {
      content: [{ type: "text", text: JSON.stringify(heroes, null, 2) }],
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return {
      content: [
        { type: "text", text: `Failed to fetch hero data: ${errorMessage}` },
      ],
    };
  }
});

// get_heroツールの追加
server.tool("get_hero", { hero_key: z.string() }, async ({ hero_key }) => {
  try {
    const key = await getHeroKey(hero_key);
    const heroData = await fetchHeroData(key);
    return {
      content: [{ type: "text", text: JSON.stringify(heroData, null, 2) }],
    };
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return {
      content: [
        { type: "text", text: `Failed to fetch hero data: ${errorMessage}` },
      ],
    };
  }
});

// トランスポートの設定とサーバーの起動
const transport = new StdioServerTransport();
await server.connect(transport);
