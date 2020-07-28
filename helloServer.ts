import { serve } from "http/server.ts";

const body = new TextEncoder().encode("<Hello Deno.");
for await (const req of serve(":8000")) {
  req.respond({ body });
}
