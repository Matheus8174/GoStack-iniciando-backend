import { Router } from 'express';
import AuthenticateUserService from '../services/AuthenticateUserService';

const sessionsRouter = Router();

interface Request {
  email: string;
  password: string;
}

sessionsRouter.post('/', async (request, response) => {
  const { email, password }: Request = request.body;

  const authenticateUser = new AuthenticateUserService();

  const { user, token } = await authenticateUser.execute({
    email,
    password
  });

  // @ts-expect-error this error dont affect the aplication flow
  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
