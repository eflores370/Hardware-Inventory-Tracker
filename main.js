// Version 0.3.3
var mainInventoryURL = 'https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory?api_key=keykbC2FwErK6UFom&view=Main%20View';
var mainInventoryHTML = '';
var mainInventoryDiv = $('.mainBody');
var counter = 0;
var offsetcounter = 0;
var renderMainInventory = function(data) {

    data.records.forEach(function(item) {
        if (item.fields['Serial Number / Asset Number']) {
            counter += 1;
            mainInventoryHTML += "<div class='itemContainer'>";
            mainInventoryHTML += `<h4 class='id'>${item.id}</h4>`
            mainInventoryHTML += `<h4 class='SN'>${item.fields['Serial Number / Asset Number']}</h4>`
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
            mainInventoryHTML += '<div><form class="modifyRemove"><button class="mainButton remove" type="submit">Remove</button></form></div>';
            mainInventoryHTML += '</div>';
            mainInventoryHTML += '<hr /></div>';
        }
    });

    console.log(counter);
    // checks if there are more than 100 records
    if (data.offset) {
        var offsetmainInventoryURL = mainInventoryURL + '&offset=' + data.offset;
        $.getJSON(offsetmainInventoryURL, renderMainInventory);
    } else {
        mainInventoryDiv.append(mainInventoryHTML);
        var form = $('.modifyRemove');
        console.log('i');
        // Delete button function
        form.on('submit', function(d) {
            d.preventDefault();
            var prompt = window.prompt("Please type 'DELETE' in order to continue   .")
            var itemID = $(this).parents('.itemContainer');
            itemID = itemID.children('.id');
            itemID = itemID.text();
            console.log(itemID);
            if (prompt === 'DELETE') {
                var link = `https://api.airtable.com/v0/appztwEDDxgAVCwxF/Main%20Inventory/${itemID}?api_key=keykbC2FwErK6UFom`;
                console.log(link);
                // Sends DELETE request to airtable
                $.ajax({
                    url: link,
                    type: 'DELETE',
                    success: function(result) {
                        // Do something with the result
                        console.log('Success');
                        window.location.reload();
                    }
                });
            }
        })
    }
}

// Search Bar
var form2 = $('#searchbox');
var arrayholder = [];
var results = 0;
form2.on('submit', function(f) {
    f.preventDefault();
    $('.noResults').remove();
    results = 0;
    arrayholder.forEach(function(i) {
        // console.log(i);
        i.removeClass('hidden');
        // console.log(i);
    })
    var Search = search.value;
    if (!Search) {
        alert('No Serial Number Inserted')
        return
    }
    $('.SN').each(function(item) {
        var SN = $(this);
        SN = SN.text();
        if (Search != SN) {
            var temp2 = $(this);
            temp2 = temp2.parent('.itemContainer')
            temp2.addClass('hidden');
            arrayholder.push(temp2)
        } else {
            results += 1;
        }




    })
    if (results === 0) {
        var insertWarning = '<div class="noResults"> No Results Found!</div>'
        mainInventoryDiv.prepend(insertWarning);
        return
    }
    // console.log(arrayholder)
})



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
