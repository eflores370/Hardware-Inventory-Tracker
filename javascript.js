var mainInventoryURL = 'https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory?api_key=keykbC2FwErK6UFom';
var mainInventoryHTML = '';
var mainInventoryDiv = $('.mainBody');
var renderMainInventory = function (data) {
  data.records.forEach(function (item) {
    if(item.fields['Serial Number / Asset Number']){
      mainInventoryHTML += '<h2>Serial Number/Asset Number: ' + item.fields['Serial Number / Asset Number'] + '</h2>';
      if(item.fields['Desktop Model']) {
        mainInventoryHTML += '<p>Desktop Model: ' + item.fields['Desktop Model'] + '</p>'; }
      if(item.fields['Status']) {
        mainInventoryHTML += '<p>Status: ' + item.fields['Status'] + '</p>';}
      if(item.fields['Operating System']) {
        mainInventoryHTML += '<p> Operating System: ' + item.fields['Operating System'] + '</p>';}
      if(item.fields['Ram GB']) {
        mainInventoryHTML += '<p>Ram(GB): ' + item.fields['Ram GB'] + '</p>';}
      if(item.fields['Storage GB']) {
        mainInventoryHTML += '<p>Storage(GB): ' + item.fields['Storage GB'] + '</p>';}
      mainInventoryHTML += '<hr />';
    }
  });
  mainInventoryDiv.html(mainInventoryHTML);

};

$.getJSON(mainInventoryURL, renderMainInventory);
