const instanceExistsUser =
  (dependencies) =>
  async ({ walletAddress }) => {
    const { WalletAddressModel } = dependencies;
    const user = await WalletAddressModel.findOne({ walletAddress }).exec();
    return user != null && !user.deleted;
  };

export default instanceExistsUser;
