import { cookies } from "next/headers";
import { dictionaries, type Locale, type Dictionary } from "./dictionaries";

export async function getLocale(): Promise<Locale> {
  const store = await cookies();
  return store.get("locale")?.value === "en" ? "en" : "tr";
}

export async function getDictionary(): Promise<Dictionary> {
  return dictionaries[await getLocale()];
}
