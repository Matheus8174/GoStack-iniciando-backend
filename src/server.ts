import express from 'express';
import routes from './routes';

import './database/connection';

const app = express();

const port = process.env.PORT || 3000;

app.disable('x-powered-by');

app.use(express.json());
app.use(routes);

app.listen(port);
