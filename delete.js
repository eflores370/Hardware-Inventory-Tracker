var mainInventoryURL = 'https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory?api_key=keykbC2FwErK6UFom&view=Main%20View';
var mainInventoryHTML = '';
var mainInventoryDiv = $('.mainForm');
var counter = 0;
var renderMainInventory = function(data) {
    data.records.forEach(function(item) {
        if (item.fields['Serial Number / Asset Number']) {
            counter +=1;
            console.log(data.id)
            mainInventoryHTML += `<input type='radio' name='deleteitem' value='${data.id}'>${item.fields['Serial Number / Asset Number']}<br>`
}
})
    mainInventoryDiv.append(mainInventoryHTML);
}
$.getJSON(mainInventoryURL, renderMainInventory);

// DELETE A Record
// $(document).ready(function() {
// var id = 'recBcYIrAss7YFFFL';
// var link = `https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory/${id}?api_key=keykbC2FwErK6UFom`;
// console.log(link);
// $.ajax({
//     url: link,
//     type: 'DELETE',
//     success: function(result) {
//         // Do something with the result
//         console.log('Success');
//     }
// });
// });
