'use strict';

const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  ReviewSchema = new Schema({
    ReviewList: [{
      name: {
        default: 1,
        type: String
      },
      text: {
        default: 2,
        type: String
      },
      who: {
        default: 3,
        type: String
      },
      path: {
        default: 4,
        type: String
      }
    }]
  });

//просим mongoose сохранить модель для ее дальнейшего использования
mongoose.model('reviews', ReviewSchema);
