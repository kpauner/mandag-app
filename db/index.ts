import { drizzle } from "drizzle-orm/neon-http";
import { neon } from "@neondatabase/serverless";
import { env } from "@/lib/env";
import * as schema from "./schema";
const sql = neon(env.DATABASE_URL!);
export const db = drizzle(sql, { schema, casing: "snake_case" });
export type DB = typeof db;
