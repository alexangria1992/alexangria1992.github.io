function changePage(page) {
    var getPageNumber = page;
    var getContentForRenderingView = document.getElementById("partial-render-view");
    var iframeContent = document.getElementsByClassName("iframe-content")[0];

    if (page != "") {
        iframeContent.setAttribute("src", page + "/index.html");
        //getContentForRenderingView.innerHTML = "<iframe src='" + page + "/index.html' class='iframe-content' style='width: 100%; overflow: hidden;' />"; 
    }

    iframeContent.onload = function () {
        iframeContent.height = (iframeContent.contentWindow.document.body.scrollHeight + 20) + "px";
    }
}

window.onload = function() {
    var getContentForRenderingView = document.getElementById("partial-render-view");
    //getContentForRenderingView.innerHTML = "<iframe src='information/index.html' class='iframe-content' style='width: 100%; overflow: hidden;' />";
    var iframeContent = document.getElementsByClassName("iframe-content")[0];

    iframeContent.setAttribute("src", "information/index.html");

    iframeContent.height = (iframeContent.contentWindow.document.body.scrollHeight + 20) + "px";

    var getRestaurantName = document.getElementById("restaurant-name");
    setInterval(function() {
        setTimeout(changeToEnglishName(getRestaurantName), 500);
    }, 1000);

    setInterval(function() {
        setTimeout(changeToMaoriName(getRestaurantName), 1000);
    }, 1500);
}

function changeNameDynamically(getRestaurantName) {

}

function changeToEnglishName(getRestaurantName) {  
    getRestaurantName.innerText = "Dear Friends Restaurant";
}

function changeToMaoriName(getRestaurantName) {  
    getRestaurantName.innerText = "E hoa mā Restaurant";
}