const router = require("express").Router();
const cidadesRoutes = require("./cidadesRoutes");

router.use("/", cidadesRoutes);

module.exports = router;