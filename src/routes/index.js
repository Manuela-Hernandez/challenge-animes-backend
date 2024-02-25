const {Router} = require('express');
const router = Router();

//routes
router.get('/', (req, res) => {
    res.send({'Title': 'Hello word'});
});

module.exports = router