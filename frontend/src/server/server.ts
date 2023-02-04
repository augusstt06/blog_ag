// https://velog.io/@mingsomm/Next-JS%EC%9D%98-Custom-Server
import express from "express";
import createServer from "next/dist/server/next";
import next from "next";

const dev = process.env.NODE_ENV === "development";
const port = 3000;
const app = next({ dev, port });

app.prepare().then(() => {
  const server = express();
});
