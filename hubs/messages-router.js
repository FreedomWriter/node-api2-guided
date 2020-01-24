const express = require("express");
const hubs = require("../hubs/hubs-model");

const router = express.Router({
  mergeParams: true
});

router.get("/", (req, res) => {
  hubs
    .findHubMessages(req.params.id)
    .then(data => {
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({ message: "Could not get hubs messages" });
    });
});

router.get("/:messageId", (req, res) => {
  console.log(req.params.id);
  console.log(req.params.messageId);
  console.log();
  hubs
    .findHubMessageByID(req.params.id, req.params.messageId)
    .then(hub => {
      if (hub) {
        res.status(200).json(hub);
      } else {
        res.status(404).json({ message: "Message not found" });
      }
    })
    .catch(error => {
      // log error to database
      res.status(500).json({
        message: "Could not get hubs message"
      });
    });
});

module.exports = router;
