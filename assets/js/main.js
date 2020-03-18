$(document).ready(function () {
    // DataTable initialisation
    $('#table_id').DataTable({
        "paging": true,
        "autoWidth": true,
        "pagingType": "full_numbers",
        responsive: true
    });

    //    SEARCH FOR NAME
    $("#fn-search-tag-name").keyup(function () {
        $this = $(this);
        $.each($("#table_id  tbody tr"), function () {
            if ($(this).text().toLowerCase().indexOf($($this).val().toLowerCase()) === -1) {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        });
    });
    //    SEARCH FOR TAG
    $("#fn-search-tag-type").keyup(function () {
        $this = $(this);
        $.each($("#table_id  tbody tr"), function () {
            if ($(this).text().toLowerCase().indexOf($($this).val().toLowerCase()) === -1) {
                $(this).hide();
            }
            else {
                $(this).show();
            }
        });
    });


    // SEARCH FOR ID

    $("#fn-sarch-tag-id").keyup(function () {
        var value = this.value;
        $("table").find("tr").each(function (index) {
            if (index === 0) return;
            var id = $(this).find("td").first().text();
            console.log(id)
            $(this).toggle(id.indexOf(value) !== -1);
        });
    });

    // DELETE ROW
    $('.delete-btn').on('click', function (event) {
        $(this).parents('tr').remove();
    });
    // VALIDATE NAME FIELD
    function validateField() {
        let name = $('#name').val();
        if (name === "" || name === null) {
            $('#name').addClass('error-border');
            return false;
        } else {
            $('#name').removeClass('error-border');
        }
    }
    $('.btn-save').on('click', function () {
        validateField();
        let name = $('#name').val();
        let result = $('#checkbox-feed').is(":checked");
        let result2 = $('#checkbox-favorites').is(":checked");
        let selectedval = $('#select-tag :selected').text();
        var id =  $('#table_id tr').last()
       
        console.log(id)
        $('#table_id tr:last').after(`<tr class="content"><td></td><td class="tag-name" ><a href="#">${name}</a></td><td>${selectedval}</td><td class='${result ? "feed" : "no-feed"}'></td><td class='${result2 ? "favorite" : ""}'></td><td class="option-box"><button class="edit-btn"></button> <button class="delete-btn"></button></td></tr>`)
        var oTable = $('#table_id').dataTable();
        oTable.fnPageChange( 'last' );
        $('#add-new-tag').modal('hide');
    });
    // refreshPage
    function refreshPage(){
        window.location.reload();
    } 
    $('.btn-save-modal').on('click', function () {
        refreshPage()
      
    })
    // EDIT ROW
   
    $(".edit-values").on('click', function (e) {
        e.preventDefault();
        e.stopImmediatePropagation();
        $('#myModal').modal();
        $(this).closest('tr').find('td.editable-columns').each(function () {
            var html = $(this).html();
            console.log(html)
            var currentValue = $(this).text();
            console.log(currentValue);
            let test = ("<input class='editable-column-style' type='text' value=" + currentValue + " />")
            $('.modal-body').append(test)
            $('.btn-danger').html('Save')
           
        });
    });
    // ***************
    $('.tag-name a').on('click', function(e){
        e.preventDefault();
        e.stopImmediatePropagation();
        $('#myModal').modal();
        $(this).closest('tr').find('td.editable-columns').each(function () {
            var html = $(this).html();
            console.log(html)
            var currentValue = $(this).text();
            console.log(currentValue);
            let test = ("<input class='editable-column-style' type='text' value=" + currentValue + " />")
            $('.modal-body').append(test)
            $('.btn-danger').html('Save')
            $('.btn-danger').on('click', function () {
                $('table').find('tbody').html("Dddd");
            })
        });
    })

});//document
// FILTER
function filterText() {
    var rex = new RegExp($('#feed').val());
    if (rex == "/all-feed/") {
        clearFilter()
    } else {
        $('.content').hide();
        $('.content').filter(function () {
            return rex.test($(this).text());
        }).show();
    }
}

function clearFilter() {
    $('.content').show();
}



// Upload image

function dragNdrop(event) {
    document.getElementsByClassName("progress-bar-wrapper")[0].style.display = "block";
    document.getElementsByClassName("hide-div")[0].style.display = "none";
    setTimeout(function () {
        var fileName = URL.createObjectURL(event.target.files[0]);
        var preview = document.getElementById("preview");
        var previewImg = document.createElement("img");
        previewImg.setAttribute("src", fileName);
        previewImg.classList.add("myimg");
        preview.innerHTML = "";
        preview.appendChild(previewImg);
    }, 2000);




}
function drag() {
    document.getElementById('upload-file').parentNode.className = 'draging drag-box';
    console.log("drag");

}
function drop() {
    document.getElementById('upload-file').parentNode.className = 'drag-box';
    console.log("drop");
}
function addImageInPlaceholder() {
    // for append in placeholder
    var img = document.createElement("img");
    var myimg = document.getElementsByClassName("myimg")[0];
    img.src = myimg.src;
    var src = document.getElementById("logo-placeholder");
    src.innerHTML = "";
    src.appendChild(img);
}


let dataObj, results = "";
dataObj = {
    data: [
        {
            "id": "1",
            "name": "Sport",
            "type": "",
            'feed': "",
            "class": "feed",
            "favorites": false
        },
        {
            "id": "2",
            "name": "Fudbal",
            "type": "",
            "favorites": false
        },
        {
            "id": "3",
            "name": "Kosarka",
            "type": "Takmicenje",
            'feed': "",
            "class": "feed",
            "favorites": true
        }
        ,
        {
            "id": "4",
            "name": "premier league",
            "type": "Takmicenje",

            "class": "feed",
            "favorites": true
        },
        {
            "id": "5",
            "name": "  Arsenal",
            "type": "fudbalski klub",
            "class": "feed",
            "favorites": true
        },
        {
            "id": "6",
            "name": "Aston Villa",
            "type": "fudbalski klub",

            "favorites": false
        },
        {
            "id": "7",
            "name": "Barnsley",
            "type": "fudbalski klub",

            "favorites": true
        }, {
            "id": "7",
            "name": " Birmingham City",
            "type": "fudbalski klub",
            'class': true,
            "favorites": true

        },
        {
            "id": "8",
            "name": "Blackpool",
            "type": "fudbalski klub",
            "class": "feed",
            "favorites": true

        },
        {
            "id": "9",
            "name": "Cardiff City",
            "type": "fudbalski klub",
            "class": "feed",
            "favorites": true

        },
        {
            "id": "10",
            "name": "Chelsea",
            "type": "fudbalski klub",
            "class": "feed",
            "favorites": false

        },
        {
            "id": "11",
            "name": "Atlanta Hawks",
            "type": "fudbalski klub",
            "class": "feed",
            "favorites": false

        }
    ]
}
var i = 1
for (i in dataObj.data) {
    results += (`<tr class="content"><td>${i}</td><td class="tag-name editable-columns" ><a href="#">${dataObj.data[i].name}</a></td><td class="editable-columns">${dataObj.data[i].type}</td><td class='${dataObj.data[i].class === "feed" ? "feed editable-columns" : "no-feed editable-columns"}' >${dataObj.data[i].class === "feed" ? "yes" : "no"}</td><td class='${dataObj.data[i].favorites === true ? "favorite editable-columns" : "editable-columns"}'></td><td class="option-box"><button class="edit-btn edit-values"></button> <button class="delete-btn"></button></td></tr>`)
}

$('table').find('tbody').html(results);


//document

