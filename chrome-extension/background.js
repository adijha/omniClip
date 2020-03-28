var menuItem = {
  "id":"omniwor",
  "title":"Omnivorus",
  "contexts":["selection"]
};
chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener(function(clickData){
  if (clickData.menuItemId =="omniwor" && clickData.selectionText){

    var loge= clickData.selectionText

    fetch('http://localhost:5000/users/add',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({username:`${loge}`})
    }).then(res=>{
      return res.json()
    })
    .then(data=>console.log(data))
    .catch(error=>console.log("error")
    )
    
  }
});
