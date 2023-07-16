const path = require('path');
const bodyParser = require('body-parser');
const users = require('./mocks/users.json');

const devMiddlewares = (middlewares, devServer, argv) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }

  if (argv.mode == 'production') return;

  devServer.app.use(bodyParser.json());

  devServer.app.post('/userlogin', bodyParser.json(), function (req, res) {
    const user = users.find(
      (user) => user.email === req.body.email && user.password === req.body.password
    );

    if (user) {
      res.send(user);
    } else
      res.status(400).send({
        message: 'This is an error!'
      });
  });

  return middlewares;
};

module.exports = { devMiddlewares };
