const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');

const isAdmin = (req, res, next) => {
  // если в сессии текущего пользователя есть пометка о том, что он является
  // администратором
  if (req.session.isAdmin) {
    //то всё хорошо :)
    return next();
  }
  //если нет, то перебросить пользователя на главную страницу сайта
  res.redirect('/');
};

router.get('/',  isAdmin, function (req, res) {
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
