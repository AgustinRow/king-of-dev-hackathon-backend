import instanceExistsUser from './existsUser';
import instaceRegisterUser from './registerUser';
import { WalletAddressModel } from '../../models/wallet';

const existsUser = instanceExistsUser({ WalletAddressModel });

const registerUser = instaceRegisterUser({ WalletAddressModel });

const usersInstance = Object.freeze({
  existsUser,
  registerUser,
});

export default usersInstance;
export { existsUser, registerUser };
