const asyncHandler = require("express-async-handler");
const Contract = require("../models/contractModel");
//@desc get all contracts
//@route GET /api/contracts
//@access public

const getAllContract = asyncHandler(async (req, res) => {
  const contracts = await Contract.find();
  res.status(200).json(contracts);
});

//@desc create new contracts
//@route POST /api/contracts
//@access public

const createContract = asyncHandler(async (req, res) => {
  console.log("This is create body", req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mendatory");
  }
  const contract = await Contract.create({
    name,
    email,
    phone,
  });
  res.status(200).json(contract);
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
  const contract = await Contract.findById(req.params.id);
  if (!contract) {
    res.status(404);
    throw new Error("Contract not found");
  }
  res.status(200).json(contract);
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
