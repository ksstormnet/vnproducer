import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, Virtual News Producer!');
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
