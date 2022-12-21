import signInUserController from './signInUserController';
import { existsUser, registerUser } from '../../usecases/user';

const signInUserControllerInstance = signInUserController({
  dependencies: { existsUser, registerUser },
});

const signInController = { signInUserControllerInstance };

export default signInController;

export { signInUserControllerInstance };
