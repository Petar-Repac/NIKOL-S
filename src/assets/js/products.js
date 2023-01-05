
function displayPets(pets){
    $('#posts').html("");
    for(let i = 0; i < pets.length; i++){ 
            $('#posts').append(
            "<article>"+
            "<a href='animal-profile.html?id="+ pets[i].id +"' class='image'><img src='images/pets/" + pets[i].name
            +"/"+pets[i].photos[0] +"' alt='"+ pets[i].name+"' /></a>"+
            "<header>"+
            "    <h2><a href='animal-profile.html?id="+ pets[i].id +"'>"+  pets[i].name +"</a></h2>"+ 
            "<ul class='meta'>"+
			"<li>Age: "+pets[i].age+"</li> "+
			"</ul>"+
            "</header>"+ 
            "<p>" + pets[i].description +" </p>"+ 
            " <footer>"+
            "    <ul class='actions'>"+
            "         <li><a href='animal-profile.html?id="+ pets[i].id +"' class='button'>See profile</a></li>"+
            "    </ul>"+
            "</footer>"+
            " </article>  "
            );
        
    }
}


function sortingAge(filtered){
    let sort = parseInt($("#sorting").val());
    let age = parseInt($("#age").val()); 

    switch(sort){ 
        case 1:
            filtered.sort((a,b) => (a.name > b.name)?1: -1);
            break;
        case 2:
            filtered.sort((a,b) => (a.name > b.name)?-1: 1);
            break;
        case 3:
            filtered.sort((a,b) => (parseInt(a.age) > parseInt(b.age))?1: -1);
            break;
        case 4:
            filtered.sort((a,b) => (parseInt(a.age) > parseInt(b.age))?-1: 1);
            break;
        default: break;
    }

    switch(age){
        case 1:
            filtered = filtered.filter(pet => parseInt(pet.age) >= 0 &&  parseInt(pet.age) < 2 );
            break;
        case 2:
            filtered = filtered.filter(pet => parseInt(pet.age) >= 2 &&  parseInt(pet.age) < 4 );
            break;
        case 3:
            filtered = filtered.filter(pet => parseInt(pet.age) >= 4 &&  parseInt(pet.age) < 6 );
            break;
        case 4:
            filtered = filtered.filter(pet => parseInt(pet.age) >= 6 );
            break;
        default: break;
    }

    displayPets(filtered);
}

$(document).ready(function () {

    let urlParams = new URLSearchParams(window.location.search);
    let type = urlParams.get("animals");  
    let allPets = JSON.parse(localStorage.getItem("pets"));
    
    $("#breadcrumbs span").append(type + "s");

    let filteredPets = allPets.filter(pet => pet.type == type);

    displayPets(filteredPets);


    $("#sorting").change(function(){
        let filteredPets = allPets.filter(pet => pet.type == type);

        sortingAge(filteredPets);
    });

    $("#age").change(function(){
        let filteredPets = allPets.filter(pet => pet.type == type);

        sortingAge(filteredPets);
    });

    $("#searchBtn").click(function(){
        let filteredPets = allPets.filter(pet => pet.type == type);
        let keyword = $("#searchInput").val();
        filteredPets = filteredPets.filter(pet => pet.name.toUpperCase().includes(keyword.toUpperCase()));
        displayPets(filteredPets);
    });

});