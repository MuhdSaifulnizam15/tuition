const express = require("express");
const authRoutes = require('./auth.route');
const userRoutes = require('./user.route');
const subjectRoutes = require('./subject.route');
const classroomRoutes = require('./classroom.route');
const stateRoutes = require('./state.route');
const cityRoutes = require('./city.route');
const dashboardRoutes = require('./dashboard.route');
const branchRoutes = require('./branch.route');
const packageRoutes = require('./package.route');

const router = express.Router();

/**
 * GET v1/status
 */
router.get('/status', (req, res) => res.send('OK'));

// router.use('/users', userRoutes);
const defaultRoutes = [
    {
      path: '/auth',
      route: authRoutes,
    },
    {
      path: '/users',
      route: userRoutes,
    },
    {
      path: '/subjects',
      route: subjectRoutes,
    },
    {
      path: '/classrooms',
      route: classroomRoutes,
    },
    {
      path: '/states',
      route: stateRoutes,
    },
    {
      path: '/city',
      route: cityRoutes,
    },
    {
      path: '/dashboard',
      route: dashboardRoutes,
    },
    {
      path: '/branch',
      route: branchRoutes,
    },
    {
      path: '/package',
      route: packageRoutes,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;