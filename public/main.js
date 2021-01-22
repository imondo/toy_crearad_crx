/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
  console.log('我被执行了main！');
  getItem('__book_adblock__').then(sites => {
    console.log(sites);
    sites.forEach(site => {
      if (location.href.includes(site)) {
        main();
      }
    })
  })
});

function getItem(key) {
  return new Promise(resolve => {
    chrome.storage.local.get(key, item => resolve(item[key]));
  });
}

function main() {
  Array.from(document.querySelectorAll('img')).forEach(ele => {
    ele.remove();
  })
}
