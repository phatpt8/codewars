class MyAjax {
  constructor(url, options) {
    const xmlhttp = new XMLHttpRequest();
    this.successCallback = null;
    xmlhttp.onreadystatechange = function() {
      if (xmlhttp.readyState == XMLHttpRequest.DONE) {
        if (xmlhttp.status === 200) {
          if (this.successCallback) this.successCallback(xmlhttp);
        } else if (xmlhttp.status === 400) {
          if (this.failCallback) this.failCallback(xmlhttp);
        } else {
          // err
        }
      }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send();
  }

  then = callback => {
    this.successCallback = callback;
  }
}