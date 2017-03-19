// Version 0.2.12
var submitURL = 'https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory?api_key=keykbC2FwErK6UFom';
var ipapi = 'https://api.ipify.org?format=jsonp&callback=?'
var form = $('#addItemForm');
var ipAddress = '0.0.0.0';

// Get IP Address
$.getJSON( ipapi,
    function(json) {
      ipAddress = (json.ip);
    });



form.on('submit', function(e){
   e.preventDefault();
   var serialNumber = $(this).find('input[name=serialNumber]').val();
   var desktopModel = $(this).find('input[name=desktopModel]').val();
   var vendor = $(this).find('select[name=vendor]').val();
   var status = $(this).find('select[name=status]').val();
   var operatingSystem = $(this).find('input[name=operatingSystem]').val();
   var cpu = $(this).find('input[name=cpu]').val();
   var ram = $(this).find('input[name=ram]').val();
   var storage = $(this).find('input[name=storage]').val();
   var notes = $(this).find('textarea[name=notes]').val();




   if (!serialNumber) {
      $(this).find('input[name=serialNumber]').addClass("error");
      alert('Please Insert a Valid Serial Number');
     return;
   }

   var data = {
     'fields': {
       'Serial Number / Asset Number': serialNumber,
       'Desktop Model': desktopModel,
       'Vendor': vendor,
       'Status': status,
       'Operating System': [operatingSystem],
       'CPU': cpu,
       'Ram GB': ram,
       'Storage GB': storage,
       'Notes': notes,
       'IP Address': ipAddress
    }
   };

  $.post(submitURL, data, function(data){
     var bodyHTML = '';
     bodyHTML += ('<div class="alert alert-success">Success! The item has been added to the inventory.</div>');
     bodyHTML += ('<a href="index.html" class="btn btn-default">Return to Main Inventory</a>');
     bodyHTML += ('<a href="additem.html" class="btn btn-default">Add Another Item</a>');
     $('body').html(bodyHTML);

     console.log('success',data)
  });
});
