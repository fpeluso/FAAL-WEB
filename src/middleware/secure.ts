import { Router } from "https://deno.land/x/oak/mod.ts";

const secureRoutes = new Router();

secureRoutes.get("/secure", (context) => {
  //check login
  context.response.body = "not logged!";
});

export default secureRoutes;
