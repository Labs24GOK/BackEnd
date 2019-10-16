const express = require("express");
const router = express.Router();

router.get("/student", (req, res) => {
  res.json({ message: "get request on person router" });
});
// answer
// /student/student

//instead of export default router
module.exports = router;
