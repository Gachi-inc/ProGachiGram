const {
    insertDialog
} = require('../workers/Dialog.js');
var express = require('express');
var router = express.Router();

router.use(express.json());
router.use(express.urlencoded());


router.get('/', (req, res) => {
    res.json(
      [
        {
          "_id": "5ed92d44439b676fe66d7058",
          "text": "Incididunt adipisicing commodo magna dolor sit exercitation sunt qui pariatur ea incididunt. Pariatur ex fugiat proident mollit ipsum. Esse qui elit velit cupidatat excepteur ea in cupidatat nisi. Pariatur deserunt aliquip dolore incididunt reprehenderit adipisicing pariatur Lorem qui dolore tempor irure sunt amet. Eiusmod ullamco aute dolor aliquip do.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d4492c79ee9fb2047ed",
            "fullname": "Glenna Beard",
            "avatar": null,
            "isonline": false
          }
        },
        {
          "_id": "5ed92d44a38f936a3c82804f",
          "text": "Consectetur exercitation consequat pariatur occaecat in incididunt. Nulla sint eu quis occaecat sit consectetur exercitation duis incididunt veniam exercitation labore et. Pariatur aute voluptate quis ad officia incididunt. Dolore non nisi proident labore magna officia sint incididunt ad laboris fugiat. Nulla laboris aliqua exercitation labore.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d44df31733c172c451d",
            "fullname": "Robert Medina",
            "avatar": null,
            "isonline": false
          }
        },
        {
          "_id": "5ed92d44a679a651b5b92262",
          "text": "Nostrud nulla veniam eiusmod voluptate aliquip tempor et amet et enim enim aliquip sit tempor. Deserunt tempor tempor cupidatat et ipsum fugiat consectetur ipsum proident est. Qui ea qui id duis cillum. Laboris ea amet aliqua ut sit in adipisicing commodo ullamco. Aliquip irure deserunt eu fugiat.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d44a2e41ec0815ece9b",
            "fullname": "Goldie Cantrell",
            "avatar": null,
            "isonline": false
          }
        },
        {
          "_id": "5ed92d44e2706cb2e00b2f99",
          "text": "Consectetur nostrud elit veniam aliquip. Est ut laborum et adipisicing exercitation quis Lorem aliqua fugiat. Fugiat labore dolor ullamco dolore eu dolor ea eiusmod amet. Sit voluptate ut mollit cupidatat. Elit velit eiusmod irure officia.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d4482153c07c1dd9642",
            "fullname": "Erika Anderson",
            "avatar": null,
            "isonline": false
          }
        },
        {
          "_id": "5ed92d447bd28efc6315cf58",
          "text": "Proident culpa labore consequat pariatur dolore mollit ullamco nisi cillum sit sint dolor. Ad dolor magna sit occaecat. Commodo ex aliquip reprehenderit anim non aute fugiat irure Lorem exercitation ad veniam. Ipsum culpa duis ad pariatur. Exercitation officia qui do duis adipisicing nisi pariatur culpa minim laboris et ullamco eu.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d44517306dcb8db985a",
            "fullname": "Mandy Monroe",
            "avatar": null,
            "isonline": false
          }
        },
        {
          "_id": "5ed92d4492c79eaf9b0b6a97",
          "text": "Dolor cillum tempor exercitation cupidatat velit occaecat et cupidatat labore eu elit eiusmod nostrud. Ad laborum non qui mollit Lorem magna reprehenderit labore. Eu Lorem qui enim commodo tempor minim officia. Aliqua ipsum do commodo minim velit culpa ipsum deserunt ea. Aute non eiusmod commodo velit dolor quis.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d445d20f3de3520bd6e",
            "fullname": "Haley Camacho",
            "avatar": null,
            "isonline": false
          }
        },
        {
          "_id": "5ed92d44e9b40b865fa7fc50",
          "text": "Velit nostrud elit nulla cupidatat do Lorem ea laboris occaecat aliqua nisi non sint esse. Do esse velit eiusmod ad aliqua aute duis. Ad magna laboris proident voluptate nulla non ut cillum aliqua proident veniam occaecat ad. Duis deserunt reprehenderit aute nisi velit qui nulla do do laboris ea eiusmod. Laborum deserunt eiusmod incididunt anim.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d441861fa861eb3b681",
            "fullname": "Tanner Hale",
            "avatar": null,
            "isonline": true
          }
        },
        {
          "_id": "5ed6770asdbd8fb61d6a626d",
          "text": "Magna irure exercitation mollit consectetur aliquip minim in exercitation sit. Ullamco nisi fugiat in veniam adipisicing eiusmod magna nostrud. Qui reprehenderit cillum ad qui qui cupidatat nisi non laboris velit laborum magna veniam. Occaecat Lorem esse eiusmod qui. Ullamco velit adipisicing est dolore deserunt dolor adipisicing commodo culpa exercitation anim duis consequat minim.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d444ff6650900bdb5bb",
            "fullname": "Shelia Chaney",
            "avatar": null,
            "isonline": false
          }
        },
        {
          "_id": "5ed92d449be4b7c56e116a77",
          "text": "Nulla eiusmod sunt consequat quis officia ea velit elit. Commodo exercitation qui ullamco fugiat exercitation sit anim tempor magna anim. Consequat aliqua sit voluptate qui excepteur sunt. Minim Lorem in irure non occaecat magna ut elit in deserunt labore minim. Laborum aute commodo excepteur aliqua et mollit consectetur ex ullamco voluptate voluptate excepteur.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d44e6883ae7fa4a9668",
            "fullname": "Burke Contreras",
            "avatar": 'https://cdn.pricearchive.org/images/aliexpress.com/32811922958/DIY-Diamond-Embroidery-Egyptian-Pharaoh-Mask-Needlework-3D-square-Diamond-Painting-Cross-Stitch-Full-Drill-Rhinestones.jpg',
            "isonline": true
          }
        },
        {
          "_id": "5ed92d4445346ab790aab0e5",
          "text": "Dolor deserunt ex nulla qui ex reprehenderit in elit. Consectetur deserunt eiusmod laboris in et dolore voluptate adipisicing. Enim laborum elit labore consectetur. Tempor nostrud laboris adipisicing officia nostrud. Aliquip anim esse labore veniam fugiat reprehenderit ad Lorem nostrud minim cillum in.",
          "created_at": 231232323,
          "user": {
            "_id": "5ed92d44eae49e88b13f5b79",
            "fullname": "Jean Arnold",
            "avatar": null,
            "isonline": true
          }
        }
      ])
});

router.post('/', insertDialog);


module.exports = router;