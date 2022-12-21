const beginTravelController =
  ({ dependencies }) =>
  async ({ body }) => {
    const { walletAddress, travelCode } = body;

    const { alredyScan, beginTravel } = dependencies;
    const travelExist = await alredyScan(walletAddress, travelCode);
    if (!travelExist) {
      const travel = await beginTravel({ walletAddress, travelCode });
      return {
        response: { message: 'Travel scan successfully', data: travel },
        status: 201,
      };
    }
    return {
      response: { message: 'Wallet alredy scan travel' },
      status: 400,
    };
  };

export default beginTravelController;
