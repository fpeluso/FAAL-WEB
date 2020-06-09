import { Router } from "https://deno.land/x/oak/mod.ts";

const publicRoutes = new Router();

publicRoutes.get("/public", (context) => {
  context.response.body = "welcome to public data!";
});

export default publicRoutes;
