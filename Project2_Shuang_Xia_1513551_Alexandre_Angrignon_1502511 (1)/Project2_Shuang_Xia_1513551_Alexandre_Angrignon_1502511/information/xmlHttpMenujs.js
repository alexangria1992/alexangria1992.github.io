var Dish = [];

var xmlhttpfordish = new XMLHttpRequest();

if (!(window.XMLHttpRequest)) {
    // code for IE6, IE5
    xmlhttpfordish = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttpfordish.open('GET', "dish-menu.xml");
xmlhttpfordish.responseType = 'document';
xmlhttpfordish.overrideMimeType('text/xml');

xmlhttpfordish.onload = function () {
    if (xmlhttpfordish.readyState === 4 && xmlhttp.status === 200) {
        xmlDoc = xmlhttpfordish.responseXML;

        //<Dish> elements tag
        var dishElements = xmlDoc.getElementsByTagName("Dish");

        for (var i = 0; i < dishElements.length; i++) {

            var dishArray = [];
            //<DishName> elements tag
            var dishNameElements = dishElements[i].getElementsByTagName("DishName");
            //<Price> elements tag
            var priceListElements = dishElements[i].getElementsByTagName("Price");
            //<Image> elements tag
            var imageElements = dishElements[i].getElementsByTagName("Image");
            //<description> elements tag
            var descriptionElements = dishElements[i].getElementsByTagName("description");
            //<type> elements tag
            var typeElements = dishElements[i].getElementsByTagName("type");

            dishArray.push(dishNameElements[0].childNodes[0].nodeValue);
            dishArray.push(priceListElements[0].childNodes[0].nodeValue);
            dishArray.push(imageElements[0].childNodes[0].nodeValue);
            dishArray.push(descriptionElements[0].childNodes[0].nodeValue);

            if (typeElements[0].childNodes[0] != undefined) {
                dishArray.push(typeElements[0].childNodes[0].nodeValue);
            }
            
            Dish.push(dishArray);
            dishArray = [];
        }
    }
};

xmlhttpfordish.send();
            


