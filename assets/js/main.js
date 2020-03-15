$(document).ready(function () {

    $('#table_id').dataTable({
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]]

    });
//    SEARCH FOR NAME


    // SEARCH FOR ID

    $("#fn-sarch-tag-id").keyup(function() {
        var value = this.value;
        $("table").find("tr").each(function(index) {
            if (index === 0) return;
            var id = $(this).find("td").first().text();
                console.log(id)
            $(this).toggle(id.indexOf(value) !== -1);
        });
    });
    $('.delete-btn').on('click', function(event) {
        $(this).parents('tr').remove();
    });
    // $(".edit-btn").click(function(){
    //     $("#myModal").modal();
    // });



// For Upload Image
$('input[type="file"]').change(function() {
    $('.preview').html('');

    $.each(this.files, function() {
      readURL(this);
    })
  });
  
  function readURL(file) {
    var reader = new FileReader();
    reader.onload = function(e) {
        $('.center-div').html('   <span>LOADEWR</span>')
     
      $('.preview').append('<img src=' + e.target.result + ' style="width: 100%; height: 100%;"/>');
    }
  
    reader.readAsDataURL(file);
  }

});//document




let dataObj, i, results = "";
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
            'feed': "",
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
for (i in dataObj.data) {

    results += (`<tr class=""><td>${dataObj.data[i].id}</td><td class="tag-name"><a href="#">${dataObj.data[i].name}</a></td><td>${dataObj.data[i].type}</td><td class='${dataObj.data[i].class === "feed" ? "feed" : ""}' feed=${dataObj.data[i].feed}></td><td class='${dataObj.data[i].favorites === true ? "favorite": ""}'></td><td class="option-box"><button class="edit-btn">Edit</button> <button class="delete-btn">Delete</button></td></tr>`)
}

$('table').find('tbody').html(results);


//document

