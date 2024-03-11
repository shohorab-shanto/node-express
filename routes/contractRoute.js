const express = require("express");
const {
  getAllContract,
  createContract,
  updateContract,
  getContract,
  deleteContract,
} = require("../controllers/contractControllers");
const router = express.Router();

////////////////////////////// Old routes /////////////////////////////////////////////

// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Get all contracts" });
// });

// router.route("/").post((req, res) => {
//   res.status(200).json({ message: "Create contracts" });
// });

// router.route("/:id").get((req, res) => {
//   res.status(200).json({ message: `Get contract for ${req.params.id}` });
// });

// router.route("/:id").put((req, res) => {
//   res.status(200).json({ message: `Update contracts for ${req.params.id}` });
// });

// router.route("/:id").delete((req, res) => {
//   res.status(200).json({ message: `Delete contracts for ${req.params.id}` });
// });

/////////////////////////////////// Replaced new //////////////////////////////////////

// router.route("/").get(getAllContract);
// router.route("/").post(createContract);
// router.route("/:id").put(updateContract);
// router.route("/:id").get(getContract);
// router.route("/:id").delete(deleteContract);

///or ///
router.route("/").get(getAllContract).post(createContract);
router
  .route("/:id")
  .put(updateContract)
  .get(getContract)
  .delete(deleteContract);

module.exports = router;
