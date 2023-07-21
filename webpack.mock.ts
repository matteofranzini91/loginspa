import webpackMockServer from "webpack-mock-server";
import nodePath from "path";

// app is expressjs application
export default webpackMockServer.add((app, helper) => {
  // you can find more about expressjs here: https://expressjs.com/
  app.get("test/testGet", (_req, res) => {
    res.json("JS get-object can be here. Random int:" + helper.getRandomInt());
  });
  app.post("/testPost", (_req, res) => {
    res.json("JS post-object can be here");
  });

  // you can return any file easy. Example for json response from file:
  app.get("/testResponseFromJsonFile", (_req, res) => {
    res.sendFile(nodePath.join(__dirname, "./response.json"));
  });
});