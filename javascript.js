var mainInventoryURL = 'https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory?api_key=keykbC2FwErK6UFom';
var mainInventoryHTML = '';
var mainInventoryDiv = $('.mainBody');
var renderMainInventory = function (data) {
  data.records.forEach(function (item) {
      mainInventoryHTML += '<h2>Serial Number/Asset Number: ' + item.fields['Serial Number / Asset Number'] + '</h2>';
      mainInventoryHTML += '<p>Status: ' + item.fields['Status'] + '</p>';
      mainInventoryHTML += '<p> Operating System: ' + item.fields['Operating System'] + '</p>';
      mainInventoryHTML += '<p>Ram(GB): ' + item.fields['Ram GB'] + '</p>';
      mainInventoryHTML += '<p>Storage(GB): ' + item.fields['Storage GB'] + '</p>';
      mainInventoryHTML += '<hr />';
    }
  );
  mainInventoryDiv.html(mainInventoryHTML);

};

$.getJSON(mainInventoryURL, renderMainInventory);
