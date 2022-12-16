const instanceGetTravels =
  ({ dependencies }) =>
  async ({ dateNow }) => {
    const { TravelModel } = dependencies;
    const travels = await TravelModel.find({
      date: {
        $lte: dateNow,
      },
    });
    return travels;
  };

export default instanceGetTravels;
