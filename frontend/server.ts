const express = require("express");
const next = require("next");
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    // server.get("/post", (req, res) => {});
    server.listen(3000, (err?: any) => {
      if (err) throw err;
      console.log("Server Ready");
    });
  })
  .catch((ex: any) => {
    console.error(ex);
    process.exit(1);
  });
export {};
