const endTravelController =
  ({ dependencies }) =>
  async ({ body }) => {
    const { walletAddress, travelCode, arrival } = body;
    const { alredyScan, endTravel } = dependencies;
    const travel = await alredyScan({walletAddress, travelCode});
    if (!travel.arrival) {
      const updatedTravel = await endTravel({
        walletAddress,
        travelCode,
        arrival,
      });
      return {
        response: { message: 'Travel scan successfully', data: updatedTravel },
        status: 201,
      };
    }
    return {
      response: { message: 'Wallet alredy scan travel' },
      status: 400,
    };
  };

export default endTravelController;
