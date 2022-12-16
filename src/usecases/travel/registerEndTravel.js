const instanceEndTravel =
  (dependencies) =>
  async ({ walletAddress, travelCode, arrival }) => {
    const { DataTravelModel } = dependencies

    const arrivalUpdated = await DataTravelModel.findOneAndUpdate({address: walletAddress, travelCode}, { arrival });

    return arrivalUpdated
  };

export default instanceEndTravel;
