const instanceRegisterUser =
  (dependencies) =>
  async ({ walletAddress }) => {
    const { WalletAddressModel } = dependencies;
    const address = await WalletAddressModel.create({ address: walletAddress });
    return address;
  };

export default instanceRegisterUser;
