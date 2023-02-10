chrome.runtime.onInstalled.addListener(() => {

  chrome.contextMenus.create({
    id: "1",
    title: " عنوان القصيدة (نص قصير) ",
    contexts: ["all"],
  });

  chrome.contextMenus.create({
    id: "2",
    title: "محتوى القصيدة (نص طويل)",
    contexts: ["all"],
  });
  
});

chrome.contextMenus.onClicked.addListener(function (parentMenuItemId) {
    console.log(parentMenuItemId);
       function getCurrentTab() {
         chrome.tabs.query({active: true, lastFocusedWindow: true}, function(tabs)
          {
          var tab = tabs[0];
          var currtab = tab.id
          ExClicked(currtab)
        });
        
      }
        
     getCurrentTab()
      
      function ExClicked(currTab) {
        if (parentMenuItemId.menuItemId == "1") {
        chrome.scripting.executeScript({
            target : {tabId : currTab, allFrames : true},
            files: ['BringPoemTitle.js']
          });
        }
        else if (parentMenuItemId.menuItemId == "2") {
          chrome.scripting.executeScript({
              target : {tabId : currTab, allFrames : true},
              files: ['BringPoemContent.js']
            });
          }

        }
       
      
    
  });



