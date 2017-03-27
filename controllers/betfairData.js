const betfairRoutes = require('../lib/betfairRoutes');

function listEvents(req, res, next) {
  return betfairRoutes.listEvents(global.betfairToken, req.query.eventTypeId, req.query.startDate, req.query.endDate)
    .then((data) => {
      //console.log(response);
      res.json(data);
    })
    .catch(next);
}

function listMarkets(req, res, next) {
  return betfairRoutes.listMarkets(global.betfairToken, req.query.eventId)
    .then((data) => {
      res.json(data);
    })
    .catch(next);
}

module.exports = {
  listEvents,
  listMarkets
};