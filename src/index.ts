import express, { Request, Response } from 'express';

const app = express();

const PORT = 8081;

app.get('/', (req: Request, res: Response) => {
  const successStatus = 200;
  res.status(successStatus).send('Hello World');
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}`);
});
