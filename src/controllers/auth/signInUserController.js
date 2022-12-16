const signInUserController =
  ({ dependencies }) =>
  async ({ body }) => {
    const { walletAddress } = body;
    const { existsUser, registerUser /* token */ } = dependencies;
    const registered = await existsUser({ walletAddress });
    //const accessToken = token.getAccessToken({ walletAddress });
    //const refreshToken = token.getRefreshToken({ walletAddress });
    if (!registered) {
      await registerUser({ walletAddress });
    }
    return {
      response: { message: 'accessToken, refreshToken' },
      status: 200,
    };
  };

export default signInUserController;
