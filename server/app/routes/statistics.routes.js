const { authJwt } = require("../middleware");
const controller = require("../controllers/statistics.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get(
    "/api/statistici/total-spent/:numberOfMonths",
    [authJwt.verifyToken],
    controller.totalSpentByMonth
  );

  app.get(
    "/api/statistici/numar-comenzi",
    [authJwt.verifyToken],
    controller.numberOfOrders
  );

  app.get(
    "/api/statistici/numar-facturi",
    [authJwt.verifyToken],
    controller.numberOfInvoices
  );

  app.get(
    "/api/statistici/numar-furnizori",
    [authJwt.verifyToken],
    controller.numberOfSuppliers
  );

  app.get(
    "/api/statistici/numar-angajati",
    [authJwt.verifyToken],
    controller.numberOfEmployees
  );
};