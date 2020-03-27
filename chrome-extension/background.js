var menuItem = {
  "id":"omniwor",
  "title":"Omnivorus",
  "contexts":["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId =="omniwor" && clickData.selectionText){

    var loge= clickData.selectionText
    console.log(loge);
  }
});
