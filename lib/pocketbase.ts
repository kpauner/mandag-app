import PocketBase from "pocketbase";
import { env } from "./env";

const pb = new PocketBase(env.NEXT_PUBLIC_API_URL);
if (process.env.NODE_ENV === "development") pb.autoCancellation(false);

export default pb;
