injectHtml = () => {
   fetch(chrome.runtime.getURL('beer-list-component/beer-list-component.html')).then(r => r.text()).then(html => {
      document.body.insertAdjacentHTML('beforeend', html);
   });
}

injectJs = () => {
   var s = document.createElement('script');
   s.src = chrome.runtime.getURL('beer-list-component/beer-list-component.js');
   s.onload = function() {this.remove();};
   document.getElementsByTagName("html")[0].appendChild(s);
}

injectAlpine = () => {
   var s = document.createElement('script');
   s.src = '//unpkg.com/alpinejs';
   s.onload = function() {this.remove();};
   document.getElementsByTagName("html")[0].appendChild(s);
}


injectAlpine()
injectJs()
injectHtml()
