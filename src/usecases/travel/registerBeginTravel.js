const instanceBeginTravel =
  (dependencies) =>
  async ({ walletAddress, travelCode }) => {
    const { DataTravelModel } = dependencies
    const startTravel = await DataTravelModel.create({ 
        address: walletAddress,
        travelCode
    })

    return startTravel
  };

export default instanceBeginTravel;
