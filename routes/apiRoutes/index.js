const router = require('express').Router();
const notes = require('../../data/db.json');
const { createNewNote, deleteNote } = require('../../lib/notes')

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    req.body.id = (notes.length + 1).toString();

    const note = createNewNote(req.body, notes);
    res.json(notes);
});

router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params.id, notes);
    res.json(notes);
});

module.exports = router;