import express, { Request, Response } from 'express';
import next from 'next';

const port = parseInt(process.env.PORT || '3000', 10);
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/a', (req: Request, res: Response) => {
    return app.render(req, res, '/a', req.params);
  });

  server.get('/b', (req: Request, res: Response) => {
    return app.render(req, res, '/b', req.params);
  });

  server.all('*', (req: Request, res: Response) => {
    return handle(req, res);
  });

  server.listen(port, (err: unknown) => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`> Ready on http://localhost:${port}`);
  });
});
