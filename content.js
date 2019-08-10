function getUrlPhoto(){
    var getHtml = document.documentElement.outerHTML;
    var pattern = /1080w" src="(https:.{20,310}.com)/;
    var fullSizeUrl = getHtml.match(pattern);
    return fullSizeUrl[1];
  }
chrome.runtime.onMessage.addListener(
    function(request) {
        if (request.message === 'inBuffer') {
            coppyInBuffer();
           }
        if (request.message === 'inNewWindow') {
            showInNewWindow()
        }
    }
  );
  function coppyInBuffer(){
    var myArray = getUrlPhoto();
    navigator.clipboard.writeText(myArray);
    alert('Ссылка скопирована');
  }
  function showInNewWindow(){
    var myArray = getUrlPhoto();
    window.open(myArray);
  }