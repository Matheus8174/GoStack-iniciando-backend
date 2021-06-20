import { Router } from 'express';

const route = Router();

route.get('/', (request, response) => {
  response.json({
    hello: 'Olá'
  });
});

export default route;
