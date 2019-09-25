window.addEventListener("DOMContentLoaded",function(){
    let Nav = document.getElementById("sideNav");
    addLinks(Nav);

    scrollAnimation();
});

function openNav(){
     $("#sideNav").addClass("openMenu");

}   

function closeNav(){
    $("#sideNav").removeClass("openMenu");
    
}

function addLinks(navs){

    navs.innerHTML += "<a href='#'>Contect</a>";
    navs.innerHTML += "<a href='#'>Work</a>";
    navs.innerHTML += "<a href='#'>About</a>";
    

}

function scrollAnimation(){
    $("a").click(function(){

        let myTarget = $(this.hash);
        myTarget = myTarget.length && myTarget;

        let targetOffset = myTarget.offset().top;
        $("html,body").animate({scrollTop:targetOffset},1000);
        });
}

