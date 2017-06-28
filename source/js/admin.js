import fileUpload from './upload';
import prepareSend from './prepareSend';

const jTabsModule = require('./jTabs');
const jQueryTabs = new jTabsModule();
jQueryTabs.init();


const formUpload = document.querySelector('#upload');
const formBlog = document.querySelector('#blog');
const formSkill = document.querySelector('#skillForm');

if (formUpload && formBlog && formSkill) {
  formUpload.addEventListener('submit', prepareSendFile);
  formBlog.addEventListener('submit', prepareSendPost);
  formSkill.addEventListener('submit', prepareSendSkill);
}

function prepareSendSkill(e) {
  e.preventDefault();
  let data = {
    num: formSkill.num.value,
    num2: formSkill.num2.value
  };
  prepareSend('/admin/addskill', formSkill, data);
}

function prepareSendFile(e) {
  e.preventDefault();
  let resultContainer = formUpload.querySelector('.status');
  let formData = new FormData();
  let file = document
    .querySelector('#file-select')
    .files[0];
  let url = document
    .querySelector('#file-url')
    .value;
  let name = document
    .querySelector('#file-desc')
    .value;

  formData.append('photo', file, file.name);
  formData.append('name', name);
  formData.append('url', url);

  resultContainer.innerHTML = 'Uploading...';
  fileUpload('/admin/upload', formData, function (data) {
    resultContainer.innerHTML = data;
    formUpload.reset();
  });
}

function prepareSendPost(e) {
  e.preventDefault();
  let data = {
    title: formBlog.title.value,
    date: formBlog.date.value,
    text: formBlog.text.value
  };
  prepareSend('/admin/addpost', formBlog, data);
}