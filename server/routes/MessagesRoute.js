
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get('/messages?dialog=5ed6770asdbd8fb61d6a626d', (req, res) => {
    res.jsonp(
        [
          
          {
            "_id": "1",
            "text": "Nisi ad eu commodo cillum ut cillum. Aliqua reprehenderit commodo labore deserunt cillum magna nulla magna aliquip. Ipsum ullamco ad ipsum excepteur in minim laboris reprehenderit laborum ex fugiat officia.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "_id": "5ed6770asdbd8fb61d6a62sd",
              "fullname": "Shaffer",
              "avatar": null,
            },
            "dialog": "5ed6770asdbd8fb61d6a626d"
          },
        
          {
            "_id": "2",
            "text": "Nisi ad eu commodo cillum ut cillum. Aliqua reprehenderit commodo labore deserunt cillum magna nulla magna aliquip. Ipsum ullamco ad ipsum excepteur in minim laboris reprehenderit laborum ex fugiat officia.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "_id": "5ed6770asdbd8fb61d6a62sd",
              "fullname": "Shaffer",
              "avatar": null,
            },
            "dialog": "5ed6770asdbd8fb61d6a626d"
          },
          {
            "_id": "3",
            "text": "Nisi ad eu commodo cillum ut cillum. Aliqua reprehenderit commodo labore deserunt cillum magna nulla magna aliquip. Ipsum ullamco ad ipsum excepteur in minim laboris reprehenderit laborum ex fugiat officia.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "_id": "5ed6770asdbd8fb61d6a62sd",
              "fullname": "Shaffer",
              "avatar": null,
            },
            "dialog": "5ed6770asdbd8fb61d6a626d"
          },
          {
            "_id": "4",
            "text": "Nisi ad eu commodo cillum ut cillum. Aliqua reprehenderit commodo labore deserunt cillum magna nulla magna aliquip. Ipsum ullamco ad ipsum excepteur in minim laboris reprehenderit laborum ex fugiat officia.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "_id": "5ed6770asdbd8fb61d6a62sd",
              "fullname": "Shaffer",
              "avatar": null,
            },
            "dialog": "5ed6770asdbd8fb61d6a626d"
          },
          {
            "_id": "5",
            "text": "Nisi ad eu commodo cillum ut cillum. Aliqua reprehenderit commodo labore deserunt cillum magna nulla magna aliquip. Ipsum ullamco ad ipsum excepteur in minim laboris reprehenderit laborum ex fugiat officia.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "_id": "5ed6770asdbd8fb61d6a62sd",
              "fullname": "Shaffer",
              "avatar": null,
            },
            "dialog": "5ed6770asdbd8fb61d6a626d"
          },
        ])
});


router.get('/messages',  (req, res) => {
  res.jsonp([  
      {
        "_id": "1",
        "text": "Nisi ad eu commodo cillum ut cillum. Aliqua reprehenderit commodo labore deserunt cillum magna nulla magna aliquip. Ipsum ullamco ad ipsum excepteur in minim laboris reprehenderit laborum ex fugiat officia.",
        "created_at": "new Date(2016, 0, 1)",
        "user": {
          "_id": "5ed6770asdbd8fb61d6a62sd",
          "fullname": "Shaffer",
          "avatar": null,
        },
        "dialog": "5ed6770asdbd8fb61d6a626d"
      }
  ])
})

module.exports = router;
