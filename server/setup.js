const path = require('path');
const bodyParser = require('body-parser');
const users = require('./mocks/users.json');

const devMiddlewares = (middlewares, devServer, argv) => {
  if (!devServer) {
    throw new Error('webpack-dev-server is not defined');
  }

  if (argv.mode == 'production') return;

  devServer.app.use(bodyParser.json());

  devServer.app.post('/userlogin', bodyParser.json(), (req, res) => {
    const user = users.find((user) => user.email === req.body.email);

    if (user) {
      if (user.password === req.body.password) res.send(user);
      else {
        res.statusMessage = 'INVALID_PASSWORD';
        res.status(403).end();
      }
    } else {
      res.statusMessage = 'INVALID_USER';
      res.status(403).end();
    }
  });

  devServer.app.post('/userlogout', bodyParser.json(), (req, res) => res.status(204).send());

  return middlewares;
};

module.exports = { devMiddlewares };
