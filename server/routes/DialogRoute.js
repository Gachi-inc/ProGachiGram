
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());

router.get('/', (req, res) => {
    res.json([
        {
            _id: "5ed677050ab366sdaf828244",
            text: "Привет, Друх! Как дела?",
            //isReaded: false,
            created_at: 'Thu Aug 29 2019 17:05:0',
            user: {
                _id: 1,
                fullname: "Владимир Овчинников",
                avatar: null,
                isonline: true
            }
        },
        {
            _id: "5ed677050ab366f5efda8244",
            text: "Привет, Друх! Как дела?",
            //isReaded: false,
            created_at: 'Thu Aug 29 2019 17:05:0',
            user: {
                _id: 1,
                fullname: "Григорий Савин",
                avatar: null,
                isonline: true
            }
        },
        {
            _id: "5edd77050ab366f5ed828244",
            text: "Привет, Друх! Как дела?",
            //isReaded: false,
            created_at: "new Date(2020, 3,3)",
            user: {
                _id: 1,
                fullname: "NekitLnp",
                avatar: null,
                isonline: true
            }
        },
        {
            _id: "5ed677050afs66f5ed828244",
            text: "Привет, Друх! Как дела?",
            //isReaded: false,
            created_at: "new Date(2020, 3,3)",
            user: {
                _id: 1,
                fullname: "Камень",
                avatar: null,
                isonline: true
            }
        },

        {
            _id: "5ed677050ab366f5sdf28244",
            text: "Как там с энергией?",
            //isReaded: false,
            created_at: "new Date(2020, 3,3)",
            user: {
                _id: 1,
                fullname: "Альберт Энштейн",
                avatar: "https://images.artwanted.com/large/98/31049_1460598.JPG",
                isonline: true
            }
        },

        {
            "_id": "5ed677050ab366f5ed828244",
            "text": "Ipsum do ut consectetur duis voluptate velit et do anim tempor. Velit do commodo do dolore tempor sunt sint laboris elit commodo ad Lorem dolore amet. Aliqua magna anim ad tempor elit consequat nostrud sint.",
            "created_at": "new Date(2019, 0, 1)",
            "user": {
              "fullname": "Wilder",
              "isonline": true
            }
          },
          {
            "_id": "5ed677055d90c71e19451162",
            "text": "Non veniam ad exercitation sint eu ad do ullamco nostrud. Pariatur ipsum reprehenderit cillum exercitation nisi cillum. Quis aliquip eiusmod dolore veniam incididunt laborum enim dolore fugiat id.",
            "created_at": "new Date(2017, 0, 1)",
            "user": {
              "fullname": "Bailey",
              "isonline": false
            }
          },
          {
            "_id": "5ed67705ed90c80f1e633555",
            "text": "Magna occaecat nisi aliquip do. Fugiat aute exercitation veniam eu exercitation. Qui amet voluptate nulla aliqua.",
            "created_at": "new Date(2016, 4, 1)",
            "user": {
              "fullname": "Candice",
              "isonline": true
            }
          },
          {
            "_id": "5ed677054cc52763acaca2d5",
            "text": "Excepteur deserunt sit esse nulla cupidatat sint aliquip adipisicing voluptate tempor sunt laboris voluptate. Deserunt cillum nostrud veniam adipisicing mollit ut. Do nisi eu elit ex.",
            "created_at": "new Date(2016, 0, 3)",
            "user": {
              "fullname": "Banks",
              "isonline": false
            }
          },
          {
            "_id": "5ed6770561a867a852b597cf",
            "text": "Labore nisi eiusmod est officia nulla. Officia consequat proident nulla magna esse ad. Quis ut excepteur sit sint.",
            "created_at": "new Date(2016, 12, 1)",
            "user": {
              "fullname": "Wendi",
              "isonline": false
            }
          },
          {
            "_id": "5ed677058838c4c0660ea190",
            "text": "Et in elit dolor non veniam sit culpa nulla. Amet veniam occaecat magna aute non velit commodo sit dolore ullamco eu in. Proident laboris excepteur occaecat nostrud nostrud eu Lorem qui laborum labore.",
            "created_at": "new Date(2016, 20, 34)",
            "user": {
              "fullname": "Eloise",
              "isonline": true
            }
          },
          {
            "_id": "5ed67705f519f4aeasd069ee",
            "text": "Quis proident ut excepteur proident aliquip pariatur eiusmod laborum. Aute sit velit veniam amet laborum sunt tempor eiusmod adipisicing duis sunt esse laboris. Sunt quis cupidatat consectetur esse adipisicing non sunt enim culpa ex dolore fugiat veniam.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "fullname": "Latisha",
              "isonline": false
            }
          },
          {
            "_id": "5ed6770asdbd8fb61d6a626d",
            "text": "Nisi ad eu commodo cillum ut cillum. Aliqua reprehenderit commodo labore deserunt cillum magna nulla magna aliquip. Ipsum ullamco ad ipsum excepteur in minim laboris reprehenderit laborum ex fugiat officia.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "fullname": "Shaffer",
              "isonline": false
            }
          },
          {
            "_id": "5ed67706a39a6345b603f783",
            "text": "Voluptate sunt aute velit ipsum fugiat magna irure sint esse cillum nostrud cillum commodo pariatur. Est pariatur ad mollit amet aliquip id dolor do elit laborum sit dolore ut ad. Eu et nulla cillum esse cillum id aliquip deserunt.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "fullname": "Steele",
              "isonline": false
            }
          },
          {
            "_id": "5ed67706a9a837cb22441d12",
            "text": "Id eu proident irure elit eiusmod reprehenderit. Fugiat do adipisicing non irure nisi aliqua ipsum qui sunt tempor. Aute ipsum enim ea laborum irure ipsum fugiat do.",
            "created_at": "new Date(2016, 0, 1)",
            "user": {
              "fullname": "Katy",
              "isonline": true
            }
          }
    ])
});

  
module.exports = router;