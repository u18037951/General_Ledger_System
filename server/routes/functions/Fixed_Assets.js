const express = require("express");
const router = express.Router();

router.post("/addAssets", async (request,response)=>{
    console.log(request.body.email)
});
router.get('/', (req, res) => {

    res.send('System Server started running')

 });
module.exports = router