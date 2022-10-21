import express from 'express';

const router = express.Router();

router.post('/login', (req, res) => {
    res.status(200).json({message: "test login"});
});

router.post('/signup', (req, res) => {
    res.status(200).json({message: "test signup"});
});

router.get('/private', (req, res) => {
    res.status(200).json({ message: "here is your pricate resource" });
});

router.get('/public', (req, res, next) => {
    res.status(200).json({ message: "here is your public resource" });
});

// will match any other path
router.use('/', (req, res, next) => {
    res.status(404).json({error : "page not found"});
});

export default router;