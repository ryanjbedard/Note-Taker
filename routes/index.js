const router = require('express').Router();

const getNotes = () =>
  fetch('/api/notes', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((data) => data);

// Import our files containing our routes
const notesRouter = require('./notes');

router.use('/notes', notesRouter);

module.exports = router;
