const instanceAlredyScan =
  (dependencies) =>
  async ({ walletAddress, travelCode }) => {

    const { DataTravelModel } = dependencies;
    const travel = await DataTravelModel.findOne({ address: walletAddress, travelCode: travelCode }).exec();
    return travel;
  };

export default instanceAlredyScan;
