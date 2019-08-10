function inBuffer() {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {'message': 'inBuffer'});
 });
}
function inNewWindow() {
  chrome.tabs.query({currentWindow: true, active: true}, function (tabs){
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, {'message': 'inNewWindow'});
 });
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button_get_url_in_buffer').addEventListener('click', inBuffer);
  document.getElementById('open_photo_in_full_size').addEventListener('click', inNewWindow);
});