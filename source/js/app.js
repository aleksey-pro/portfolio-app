import prepareSend from './prepareSend';

import '../style/app.scss';

const rotateModule = require('./rotate');
const parallaxModule = require('./parallax');
const initMap = require('./map');
const loadPolyfills = require('./loadPolyfills');
const blur = require('./blur');
const preload = require('./preload');
const slide = require('./slide-menu');
const works = require('./slider');
const blog = require('./blog-menu');
const water = require('../WebGL/index-water');
const arrow = require('./downArrow');
const form = require('./formSubmit');
const auth = require('./authForm');

const loadPoly = new loadPolyfills();
const flipLogin = new rotateModule();
const parallax = new parallaxModule();
const myMapsModule = new initMap();
const blurEffect = new blur();
const slideMenu = new slide();
const preloader = new preload();
const slider = new works();
const blogMenu = new blog();
const WebGL = new water();
const arrowScroll = new arrow();
const formProcess = new form();
const authProcess = new auth();

loadPoly.init();
slider.init();
WebGL.init();
arrowScroll.init();
formProcess.init();
authProcess.init();
preloader.init();
flipLogin.init();


if(document.body.classList.contains('hasMenu')) {
  blogMenu.init();
}

if(document.body.classList.contains('hasSlideMenu')) {
  slideMenu.init();
}

if(document.body.classList.contains('hasBlur')) {
  blurEffect.init();
  window.onresize =function(){
    blurEffect.init();
  };
}

window.onscroll = function() {
  let wScroll = window.pageYOffset;
  if(document.body.classList.contains('admin-wrapper')) {
    parallax.init(wScroll);
  }
};

if(document.body.classList.contains('hasMap')) {
  myMapsModule.init();
}

import tinymce from 'tinymce/tinymce';
import 'tinymce/themes/modern/theme';

tinymce.init({
  selector: '#tinymce',
  skin: 'lightgray'
});