//Version 0.2.07
var mainInventoryURL = 'https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory?api_key=keykbC2FwErK6UFom';
var mainInventoryHTML = '';
var mainInventoryDiv = $('.mainBody');
var renderMainInventory = function(data) {
    data.records.forEach(function(item) {
        if (item.fields['Serial Number / Asset Number']) {
            mainInventoryHTML += "<div class='itemContainer'>";
            mainInventoryHTML += "<div class='itemName'>";
            mainInventoryHTML += '<h2>Serial Number/Asset Number: ' + '<span class="insertedText">' + item.fields['Serial Number / Asset Number'] + '</span></h2>';
            mainInventoryHTML += '</div>';
            // Add Hide to class
            mainInventoryHTML += "<div class='itemInfo hide'>";
            mainInventoryHTML += '<p class="desktopModel">Desktop Model: ';
            if (item.fields['Desktop Model']) {
                mainInventoryHTML += '<span class="insertedText">' + item.fields['Desktop Model'] + '</span></p>';
            } else {
                mainInventoryHTML += '</p>';
            }

            mainInventoryHTML += '<p class="status">Status: ';
            if (item.fields['Status']) {
                mainInventoryHTML += '<span class="insertedText">' + item.fields['Status'] + '</span></p>';
            } else {
                mainInventoryHTML += '</p>';
            }

            mainInventoryHTML += '<p class="operatingSystem"> Operating System: ';
            if (item.fields['Operating System']) {
                mainInventoryHTML += '<span class="insertedText">' + item.fields['Operating System'] + '</span></p>';
            } else {
                mainInventoryHTML += '</p>';
            }
            mainInventoryHTML += '<p class="ram">Ram: ';
            if (item.fields['Ram GB']) {
                mainInventoryHTML += '<span class="insertedText">' + item.fields['Ram GB'] + '</span></p>';
            } else {
                mainInventoryHTML += '</p>';
            }
            mainInventoryHTML += '<p class= "storage">Storage: ';
            if (item.fields['Storage GB']) {
                mainInventoryHTML += '<span class="insertedText">' + item.fields['Storage GB'] + '</span></p>';
            } else {
                mainInventoryHTML += '</p>';
            }
            mainInventoryHTML += '<p class="cpu">CPU: '
            if (item.fields['CPU']) {
                mainInventoryHTML += '<span class="insertedText">' + item.fields['CPU'] + '</span></p>';
            } else {
                mainInventoryHTML += '</p>';
            }
            mainInventoryHTML += '</div>';
            mainInventoryHTML += '</div>';
            mainInventoryHTML += '<hr />';

        }
    });
    mainInventoryDiv.html(mainInventoryHTML);

};

// Gets Airtable Data and renders it
$.getJSON(mainInventoryURL, renderMainInventory);

// Hides the descrition of item and toggles it
$(document).on('click', '.itemName', function() {
    $(this).siblings('.itemInfo').toggleClass('hide');
})


// Shows Go to Top Button when user scrolls down 100 px
window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("goTop").style.display = "block";
    } else {
        document.getElementById("goTop").style.display = "none";
    }
}

// Go to Top of page when user clicks on the Button
function topFunction() {
    document.body.scrollTop = 0; // For Chrome, Safari and Opera
    document.documentElement.scrollTop = 0; // For IE and Firefox
}
