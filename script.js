function openProjects() {

    document.getElementById("projectOverlay").style.display = "flex";
    document.body.style.overflow = "hidden";

}

function closeProjects() {

    document.getElementById("projectOverlay").style.display = "none";
    document.body.style.overflow = "auto";

}


// Attach event listener to Projects link

document.getElementById("projectsLink").addEventListener(

    "click",

    function(event){

        event.preventDefault();

        openProjects();

    }

);
