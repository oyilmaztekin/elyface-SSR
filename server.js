/* eslint-disable */
const path = require("path");

const express = require("express");
const next = require("next");

const port =
  parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

function createServer() {
  const server = express();

  server.get(
    "/service-worker.js",
    async (req, res) => {
      const filePath = path.join(
        __dirname,
        ".next",
        "/service-worker.js"
      );
      await app.serveStatic(req, res, filePath);
    }
  );

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

  server.get("/gundem/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
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

  server.get("/siyaset/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
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

  server.get("/ekonomi/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
    );
  });

  server.get("/dunya", (req, res) => {
    return app.render(
      req,
      res,
      "/dunya",
      req.query
    );
  });

  server.get("/dunya/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
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

  server.get("/spor/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
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

  server.get("/yasam/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
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

  server.get("/magazin/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
    );
  });

  server.get("/emlak", (req, res) => {
    return app.render(
      req,
      res,
      "/emlak",
      req.query
    );
  });

  server.get("/emlak/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
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

  server.get("/egitim/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
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

  server.get("/teknoloji/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
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

  server.get("/seyahat/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
    );
  });

  server.get("/saglik", (req, res) => {
    return app.render(
      req,
      res,
      "/saglik",
      req.query
    );
  });

  server.get("/saglik/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
    );
  });

  server.get("/:id", (req, res) => {
    return app.render(
      req,
      res,
      "/newsdetail",
      Object.assign({ id: req.params }, req.query)
    );
  });

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  return server;
}

const server = createServer();

const prepareP = app.prepare().then(() => {
  console.log("App prepared");
  if (process.env.IN_LAMBDA !== "true") {
    console.log("Starting server on: " + port);
    server.listen(port, err => {
      if (err) throw err;
      console.log(
        `> Ready on http://localhost:${port}`
      );
    });
  }
});

module.exports = { appServer: server, prepareP };
