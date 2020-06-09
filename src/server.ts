import { Application, Router } from "https://deno.land/x/oak/mod.ts";
import secureRoutes from "./middleware/secure.ts";
import publicRoutes from "./middleware/public.ts";

const port = 8000;

const app = new Application();
const router = new Router();

router.get("/", (context) => {
  context.response.body = "Hello World!";
});

app.use(router.routes());
app.use(secureRoutes.routes());
app.use(publicRoutes.routes());
app.use(router.allowedMethods());
app.use(secureRoutes.allowedMethods());
app.use(publicRoutes.allowedMethods());

app.listen({ port: 8000 });

console.log(`Listening on port ${port}...`);
