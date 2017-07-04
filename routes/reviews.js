const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

router.get('/', function (req, res) {
  let obj = {
    title: 'Мои работы'
  };
  Object.assign(obj, req.app.locals.settings);
  
  const Model = mongoose.model('reviews');
  //получаем список ревью из базы
  Model
    .find()
    .then(reviews => {
      // обрабатываем шаблон и отправляем его в браузер передаем в шаблон список
      // записей в блоге
      Object.assign(obj, {ReviewList: reviews});
      res.render('pages/works', obj);
    });
});

module.exports = router;

