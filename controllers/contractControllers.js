const asyncHandler = require("express-async-handler");
//@desc get all contracts
//@route GET /api/contracts
//@access public

const getAllContract = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contracts" });
});

//@desc create new contracts
//@route POST /api/contracts
//@access public

const createContract = asyncHandler(async (req, res) => {
  console.log("This is create body", req.body);
  const { name, email } = req.body;
  if (!name || !email) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }
  res.status(200).json({ message: "Create contracts" });
});

//@desc update new contracts
//@route POST /api/contracts/:id
//@access public

const updateContract = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contracts for ${req.params.id}` });
});

//@desc get contract
//@route POST /api/contracts/:id
//@access public

const getContract = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contracts for ${req.params.id}` });
});

//@desc delete contract
//@route POST /api/contracts/:id
//@access public

const deleteContract = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contracts for ${req.params.id}` });
});

module.exports = {
  getAllContract,
  createContract,
  updateContract,
  getContract,
  deleteContract,
};
