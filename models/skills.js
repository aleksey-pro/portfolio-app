'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  SkillsSchema = new Schema({
    num: {
      type: String,
      required: [true, 'Укажите процент умения']
    },
    num2: {
      type: String,
      required: [true, 'Укажите процент умения']
    }
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('skills', SkillsSchema);
