const getTravelsController =
  ({ dependencies }) =>
  async () => {
    const { getTravels } = dependencies;
    const dateNow = new Date();
    const travels = await getTravels(dateNow);
    if (travels != null) return { status: 200, response: { travels } };
    return {
      status: 400,
      resposne: { message: 'There is no available travels' },
    };
  };

export default getTravelsController;
