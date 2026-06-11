function openProjects() {

    document.getElementById("projectOverlay").style.display = "flex";
    document.body.style.overflow = "hidden";

}

function closeProjects() {

    document.getElementById("projectOverlay").style.display = "none";
    document.body.style.overflow = "auto";

}


// Attach event listener to Projects link

document.getElementById("closeProjectsBtn").addEventListener(

    "click",

    function(){

        closeProjects();

    }

);
