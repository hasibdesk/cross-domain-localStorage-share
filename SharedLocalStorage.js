class SharedLocalStorage {
  allWebsiteUrls;
  currentUrl;
  iframes = [];

  constructor(allWebsiteUrls) {
    this.currentUrl = `${window.location.protocol}//${window.location.host}`;
    this.allWebsiteUrls = allWebsiteUrls;
    this.initIframes();
  }

  initIframes() {
    if (this.allWebsiteUrls == null) {
      return;
    }
    let i = 0;
    for (const websiteUrl of this.allWebsiteUrls.filter(x => x.toLowerCase() !== this.currentUrl.toLowerCase())) {
      const lsIframe = document.createElement('iframe');
      lsIframe.classList.add('ls-iframe')
      lsIframe.src = `${websiteUrl}/ls-helper.html`;
      lsIframe.id = `ls-iframe-${i++}`;
      lsIframe.style = 'display: none;';
      lsIframe.websiteUrl = websiteUrl;
      document.getElementsByTagName('body')[0].appendChild(lsIframe);
      this.iframes.push(lsIframe.contentWindow);
    }
  }

  getValue(key) {
    return localStorage.getItem(key);
  }

  deleteValue(key) {
    localStorage.removeItem(key);
    this.iframes.forEach(iframe => {
      iframe.postMessage({
        methodName: 'deleteLocalStorageValue',
        key: key
      }, '*');
    });
  }

  setValue(key, value) {
    localStorage.setItem(key, value);
    this.iframes.forEach(iframe => {
      iframe.postMessage({
        methodName: 'setLocalStorageValue',
        key: key,
        value: value
      }, '*');
    });
  }
}
