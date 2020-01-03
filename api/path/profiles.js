const express = require("express");
const router = express.Router();
const ProfilesCtrl = require('../controls/profiles');


router.get("/", async (req, res) => {
    try {
        const profilesCtrl = new ProfilesCtrl(req)
        var answer = await profilesCtrl.request()
        if (answer) {
            return res.status(200).send(answer)
        }
    } catch (ex) {

    }
    return res.status(400).send([])
});

module.exports = router;