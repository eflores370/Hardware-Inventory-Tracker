// Version 0.2.08
var submitURL = 'https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory?api_key=keykbC2FwErK6UFom';
var form = $('#addItemForm');
form.on('submit', function(e){
   e.preventDefault();
   var serialNumber = $(this).find('input[name=serialNumber]').val();
   var desktopModel = $(this).find('input[name=desktopModel]').val();
   var vendor = $(this).find('input[name=vendor]').val();
   var status = $(this).find('input[name=status]').val();
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
       'Operating System': operatingSystem,
       'CPU': cpu,
       'Ram GB': ram,
       'Storage GB': storage,
       'Notes': notes,
    }
   };
  $.post(submitURL, data, function(data){
     $('#submit-message').text('Item has been added to the Inventory.');
     console.log('success',data)
  });
});
