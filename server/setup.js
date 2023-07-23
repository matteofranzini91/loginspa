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

    if (user)
      if (user.password === req.body.password)
        setTimeout(
          () =>
            res.send({
              token: user.token,
              id: user.id
            }),
          2000
        );
      else
        setTimeout(() => {
          res.statusMessage = 'INVALID_PASSWORD';
          res.status(403).end();
        }, 2000);
    else
      setTimeout(() => {
        res.statusMessage = 'INVALID_USER';
        res.status(403).end();
      }, 2000);
  });

  devServer.app.post('/userlogout', bodyParser.json(), (req, res) =>
    setTimeout(() => {
      res.status(204).send();
    }, 2000)
  );

  //mock current connected user
  devServer.app.post('/authuser', bodyParser.json(), (req, res) =>
    setTimeout(
      () =>
        res.send({
          id: 1
        }),
      2000
    )
  );

  devServer.app.post('/reset-password', bodyParser.json(), (req, res) => {
    const user = users.find((user) => user.email === req.body.email);

    if (user)
      setTimeout(() => {
        res.status(204).send();
      }, 2000);
    else
      setTimeout(() => {
        res.statusMessage = 'INVALID_USER';
        res.status(403).end();
      }, 2000);
  });

  devServer.app.post('/register-user', bodyParser.json(), (req, res) =>
    setTimeout(() => {
      res.status(204).send();
    }, 2000)
  );

  devServer.app.post('/getuser', bodyParser.json(), (req, res) => {
    const user = users.find((user) => user.id === req.body.userId);

    if (user) setTimeout(() => res.send(user), 3000);
    else
      setTimeout(() => {
        res.statusMessage = 'USER_NOT_FOUND';
        res.status(404).end();
      }, 2000);
  });

  devServer.app.put('/edit-user', bodyParser.json(), (req, res) =>
    setTimeout(() => {
      res.status(204).send();
    }, 2000)
  );

  devServer.app.delete('/delete-user', bodyParser.json(), (req, res) =>
    setTimeout(() => {
      res.status(204).send();
    }, 2000)
  );

  return middlewares;
};

module.exports = { devMiddlewares };
