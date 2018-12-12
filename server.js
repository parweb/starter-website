const router = require('fastify')({ logger: { level: 'error' } });
const Next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';

router.register((router, opts, next) => {
  const app = Next({ dev });

  app
    .prepare()
    .then(() => {
      if (dev) {
        router.get('/_next/*', (req, reply) =>
          app.handleRequest(req.req, reply.res).then(() => {
            reply.sent = true;
          })
        );
      }

      router.get('/item/:slug', (req, reply) =>
        app.render(req.req, reply.res, '/item', req.params).then(() => {
          reply.sent = true;
        })
      );

      router.get('/category/:top/:sub', (req, reply) =>
        app.render(req.req, reply.res, '/category', req.params).then(() => {
          reply.sent = true;
        })
      );

      router.get('/*', (req, reply) =>
        app.handleRequest(req.req, reply.res).then(() => {
          reply.sent = true;
        })
      );

      router.setNotFoundHandler((request, reply) =>
        app.render404(request.req, reply.res).then(() => {
          reply.sent = true;
        })
      );

      next();
    })
    .catch(err => next(err));
});

router.listen(port, err => {
  if (err) throw err;
  console.log(`> Ready on http://localhost:${port}`);
});
