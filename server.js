/* eslint-disable */
const express = require("express");
const next = require("next");

const port =
  parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get("/", (req, res) => {
    return app.render(req, res, "/", req.query);
  });

  server.get("/gundem", (req, res) => {
    return app.render(
      req,
      res,
      "/gundem",
      req.query
    );
  });

  server.get("/siyaset", (req, res) => {
    return app.render(
      req,
      res,
      "/siyaset",
      req.query
    );
  });

  server.get("/ekonomi", (req, res) => {
    return app.render(
      req,
      res,
      "/ekonomi",
      req.query
    );
  });

  server.get("/spor", (req, res) => {
    return app.render(
      req,
      res,
      "/spor",
      req.query
    );
  });

  server.get("/yasam", (req, res) => {
    return app.render(
      req,
      res,
      "/yasam",
      req.query
    );
  });

  server.get("/magazin", (req, res) => {
    return app.render(
      req,
      res,
      "/magazin",
      req.query
    );
  });

  server.get("/emlak", (req, res) => {
    return app.render(
      req,
      res,
      "/egitim",
      req.query
    );
  });

  server.get("/egitim", (req, res) => {
    return app.render(
      req,
      res,
      "/egitim",
      req.query
    );
  });

  server.get("/teknoloji", (req, res) => {
    return app.render(
      req,
      res,
      "/teknoloji",
      req.query
    );
  });

  server.get("/seyahat", (req, res) => {
    return app.render(
      req,
      res,
      "/seyahat",
      req.query
    );
  });

  //   server.get("/posts/:id", (req, res) => {
  //     return app.render(req, res, "/posts", {
  //       id: req.params.id
  //     });
  //   });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(
      `> Ready on http://localhost:${port}`
    );
  });
});
