const express = require('express');
const router = express.Router();
const content = require('../views/data/content.json');
// const mongoose = require('mongoose');

router.get('/', function (req, res) {
  let obj = {
    title: 'Обо мне',
    skills: content.skills
  };
  Object.assign(obj, req.app.locals.settings);
  
  res.render('pages/about', obj);
  
  // const Model = mongoose.model('skills');
  // //получаем список записей в блоге из базы
  // Model
  //   .find()
  //   .then(skills => {
  //     // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
  //     // записей в блоге
  //     Object.assign(obj, {skills: skills});
  //     res.render('pages/about', obj);
  //   });
});

module.exports = router;
