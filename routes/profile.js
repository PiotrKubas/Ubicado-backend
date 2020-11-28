const router = require('express').Router();
const verify = require('./verifyToken')

router.get('/', verify, (req,res)=> {
    res.json({profile: 'prof'})
})

module.exports = router;