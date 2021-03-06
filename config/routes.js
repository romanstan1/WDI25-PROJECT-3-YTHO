const router = require('express').Router();
const secureRoute = require('../lib/secureRoute');
const betfairData = require('../controllers/betfairData');
const auth = require('../controllers/auth');
const accy = require('../controllers/accumulators');


router.route('/profile')
  .get(secureRoute, auth.profile);

router.route('/register')
  .post(auth.register);

router.route('/login')
  .post(auth.login);

router.route('/listEvents')
  .get(secureRoute, betfairData.listEvents);

router.route('/listMarkets')
  .get(secureRoute, betfairData.listMarkets);

router.route('/marketOdds')
  .get(secureRoute, betfairData.getMarketOdds);

router.route('/accumulators')
  .post(secureRoute, accy.create);

router.route('/accumulators/:id')
  .all(secureRoute)
  .get(accy.show)
  .put(accy.update)
  .delete(accy.delete);

router.route('/accumulators/:id/events')
  .post(secureRoute, accy.addEvent);

router.route('/accumulators/:id/events/:eventId')
  .delete(secureRoute, accy.deleteEvent);

router.all('/*', (req, res) => res.notFound());

module.exports = router;
