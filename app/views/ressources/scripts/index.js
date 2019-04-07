const { dialog } = require('electron').remote;

document.getElementById('valid').addEventListener('click', () => {
  var filepath = dialog.showOpenDialog({properties : ['openDirectory'] });
  if(document.getElementById('filepath')){
    document.getElementById('filepath').remove();
  }

  var parentElement = document.getElementsByClassName('pane')[0];

  var fileElement = document.createElement('p');
  fileElement.id = 'filepath';
  fileElement.textContent = filepath;

  parentElement.appendChild(fileElement);
});