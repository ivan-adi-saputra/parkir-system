const { StatusCodes } = require("http-status-codes");
const {
  getAllParkir,
  createParkir,
  getOneParkir,
  updateParkir,
  deleteParkir,
} = require("../../../service/mongoose/parkir");

const index = async (req, res, next) => {
  try {
    const data = await getAllParkir();

    res.status(StatusCodes.OK).json({
      data,
      success: true,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

const create = async (req, res, next) => {
  try {
    const data = await createParkir(req);

    res.status(StatusCodes.CREATED).json({
      data,
      success: true,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: error.message || "Internal Server Error",
      success: false,
    });
  }
};

const find = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getOneParkir(id);

    res.status(StatusCodes.OK).json({
      data,
      success: true,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: error.message || "Invalid ID",
      success: false,
    });
  }
};

const update = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await updateParkir(id, req);

    res.status(StatusCodes.OK).json({
      data,
      success: true,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: error.message || "Invalid ID",
      success: false,
    });
  }
};

const destroy = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await deleteParkir(id);

    res.status(StatusCodes.NO_CONTENT).json({
      success: true,
      data,
    });
  } catch (error) {
    res.status(StatusCodes.BAD_REQUEST).json({
      message: error.message || "Invalid ID",
      success: false,
    });
  }
};

module.exports = {
  index,
  create,
  find,
  update,
  destroy,
};
