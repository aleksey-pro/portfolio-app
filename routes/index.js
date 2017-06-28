const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');

router.get('/', function (req, res) {
  let obj = {
    title: 'Главная страница'
  };
  Object.assign(obj, req.app.locals.settings);
  res.render('pages/index', obj);
});

router.get('/about', function (req, res) {
  let obj = {
    title: 'Обо мне'
  };
  Object.assign(obj, req.app.locals.settings);
  
  const Model = mongoose.model('skills');
  //получаем список записей в блоге из базы
  Model
    .find()
    .then(skills => {
      // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
      // записей в блоге
      Object.assign(obj, {skills: skills});
      res.render('pages/blog', obj);
    });
});



router.get('/works', function (req, res) {
  let obj = {
    title: 'Мои работы'
  };
  // let reviewFile = require('../views/data/content2.json');
  let reviewsFile = JSON.parse(fs.readFileSync('views/data/content.json', 'utf8'));
  Object.assign(obj, {reviews: reviewsFile}, req.app.locals.settings);

  const Model = mongoose.model('pic');
  //получаем список записей в блоге из базы
  Model
    .find()
    .then(items => {
      // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
      // записей в блоге
      Object.assign(obj, {items: items});
      res.render('pages/works', obj);
    });
  console.log(obj.items);
});


router.get('/blog', function (req, res) {
  let obj = {
    title: 'Страница для блога'
  };
  Object.assign(obj, req.app.locals.settings);
  const Model = mongoose.model('blog');
    //получаем список записей в блоге из базы
  Model
    .find()
    .then(items => {
      // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
      // записей в блоге
      Object.assign(obj, {items: items});
      res.render('pages/blog', obj);
    });
});

module.exports = router;