import { Router } from 'express';

import appointmentsRouter from './appointments.routes';
import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

const route = Router();

route.use('/appointments', appointmentsRouter);
route.use('/users', usersRouter);
route.use('/sessions', sessionsRouter);

export default route;
