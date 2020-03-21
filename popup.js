'use strict';

let changeColor = document.getElementById('changeColor');
let copyText = document.getElementById('copyText');

chrome.storage.sync.get('color', function (data) {
  changeColor.style.backgroundColor = data.color;
  changeColor.setAttribute('value', data.color);
});

changeColor.onclick = function (element) {
  let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      { code: 'document.body.style.backgroundColor = "' + color + '";' });
  });
};
copyText.onclick = function (element) {
  // let color = element.target.value;
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.executeScript(
      tabs[0].id,
      {
        code: 'navigator.clipboard.readText().then((clipText) =>{document.querySelector("#editor").innerText +=clipText;console.log({ clipText })});'
      }
    );
  });
};
