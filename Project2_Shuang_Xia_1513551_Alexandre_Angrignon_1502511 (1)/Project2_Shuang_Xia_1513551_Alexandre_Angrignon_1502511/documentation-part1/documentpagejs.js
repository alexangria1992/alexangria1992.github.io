function changePage(page) {
    var getPageNumber = page;
    var getContentForRenderingView = document.getElementById("partial-render-view");

    if (page != "" && page != "6") {
        getContentForRenderingView.innerHTML = "<iframe src='Page" + page + "/index.html' style='width: 100%; height: 500px; overflow: hidden; position: relative;' />"; 
    }
}

window.onload = function() {
    var getContentForRenderingView = document.getElementById("partial-render-view");
    getContentForRenderingView.innerHTML = "<iframe src='Page1/index.html' style='width: 100%; height: 500px; overflow: hidden; position: relative;' />";
}
