
function loadData() {
    let name_people = document.getElementsByClassName('name-people')
    let id_people = document.getElementsByClassName('id-people')
    var url = "http://159.223.51.203/api/bio"
    $.ajax({
        url: url,
        type : 'GET',
        dataType: 'json',
        success: function(data) {

            for(let i = 0 ; i < 11; i++) {
                var name1 = name_people[i]
                var id1 = id_people[i]
                name1.textContent = data[i].name.toUpperCase()
                id1.textContent = data[i].id
            }
            
        },

        error:function(err){
            console.log(err)
        }
    });
}

loadData()