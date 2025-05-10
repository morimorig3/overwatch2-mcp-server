import fetch from "node-fetch";
import type { components } from "../types/overfast-api.d.ts";
import { isJapanese } from "../utils/isJapanese.js";

type HeroData = components["schemas"]["Hero"];
type HeroKey = components["schemas"]["HeroKey"];

/**
 * OverFast APIを使用してヒーローデータを取得します。
 * @param {string} key - データを取得するヒーローのキー。
 * @returns {Promise<HeroData>} ヒーローデータを解決するPromise。
 * @throws フェッチ操作が失敗した場合にエラーをスローします。
 */
export async function fetchHeroData(key: HeroKey): Promise<HeroData> {
  const response = await fetch(`https://overfast-api.tekrop.fr/heroes/${key}`);
  if (!response.ok) {
    throw new Error(
      `ヒーローデータの取得中にエラーが発生しました: ${response.statusText}`
    );
  }
  return (await response.json()) as HeroData;
}

/**
 * OverFast APIから日本語のヒーロー名とそのキーのマッピングを取得します。
 * @returns {Promise<Record<string, string>>} ヒーロー名とキーのマッピングを解決するPromise。
 * @throws フェッチ操作が失敗した場合にエラーをスローします。
 */
export async function getHeroKey(user_input: string): Promise<HeroKey> {
  const url = isJapanese(user_input)
    ? "https://overfast-api.tekrop.fr/heroes?locale=ja-jp"
    : "https://overfast-api.tekrop.fr/heroes?locale=en-us";

  const response = await fetch(url);
  const heroes = (await response.json()) as {
    key: components["schemas"]["HeroKey"];
    name: string;
  }[];

  const hero = heroes.find((hero) => hero.name === user_input);
  if (!hero) {
    throw new Error(`ヒーローが見つかりません: ${user_input}`);
  }
  return hero.key;
}

/**
 * OverFast APIからすべてのヒーローデータを取得します。
 * @returns {Promise<HeroData[]>} ヒーローデータの配列を解決するPromise。
 * @throws フェッチ操作が失敗した場合にエラーをスローします。
 */
export async function getHeroes(): Promise<HeroData[]> {
  const response = await fetch("https://overfast-api.tekrop.fr/heroes");
  if (!response.ok) {
    throw new Error(
      `ヒーローデータの取得中にエラーが発生しました: ${response.statusText}`
    );
  }
  return (await response.json()) as HeroData[];
}
