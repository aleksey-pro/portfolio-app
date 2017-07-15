'use strict';

const express = require('express');
const router = express.Router();

// const isAdmin = (req, res, next) => {
//   // если в сессии текущего пользователя есть пометка о том, что он является
//   // администратором
//   if (req.session.isAdmin) {
//     //то всё хорошо :)
//     return next();
//   }
//   //если нет, то перебросить пользователя на главную страницу сайта
//   res.redirect('/');
// };

router.get('/', function (req, res) {
  let obj = {
    title: 'Главная страница'
  };
  Object.assign(obj, req.app.locals.settings);
  res.render('pages/index', obj);
});

module.exports = router;