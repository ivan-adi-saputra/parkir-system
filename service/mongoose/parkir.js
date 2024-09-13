const Parkir = require("../../api/v1/parkir/model");

const getAllParkir = async (req) => {
  const parkir = await Parkir.find();
  return parkir;
};

const getOneParkir = async (id) => {
  const parkir = await Parkir.findById(id);
  if (!parkir) throw new Error("Parkir not found");
  return parkir;
};

const createParkir = async (req) => {
  const { duration, total, nopol } = await req.body;
  const parkir = await Parkir.create({
    userId: req.user.user._id,
    duration,
    total,
    nopol,
  });
  return parkir;
};

const updateParkir = async (id, req) => {
  const { duration, total, nopol } = await req.body;
  const parkir = await Parkir.findByIdAndUpdate(
    id,
    {
      duration,
      total,
      nopol,
    },
    { new: true }
  );
  if (!parkir) throw new Error("Parkir not found");
  return parkir;
};

const deleteParkir = async (id) => {
  const parkir = await Parkir.findByIdAndDelete(id);
  if (!parkir) throw new Error("Parkir not found");
  return parkir;
};

module.exports = {
  getAllParkir,
  getOneParkir,
  createParkir,
  updateParkir,
  deleteParkir,
};
