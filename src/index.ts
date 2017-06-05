import * as express from 'express';
import { welcomeController } from './server/server';

const app: express.Application = express();
const port: number = process.env.PORT || 3000;

app.use('/welcome', welcomeController);
app.listen(port, console.log.bind(console, `Listening at http://localhost:${port}/`));