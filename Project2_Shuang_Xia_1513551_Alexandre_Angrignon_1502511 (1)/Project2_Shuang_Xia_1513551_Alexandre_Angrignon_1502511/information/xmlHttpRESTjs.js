var tableList = [];
var tableAvailability = [];
var timeAvailability = [];

var xmlhttp = new XMLHttpRequest();

if (!(window.XMLHttpRequest)) {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}

xmlhttp.open('GET', "seat.xml");
xmlhttp.responseType = 'document';
xmlhttp.overrideMimeType('text/xml');

xmlhttp.onload = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        xmlDoc = xmlhttp.responseXML;

        //<tableList> elements tag
        var tableListElements = xmlDoc.getElementsByTagName("tableList");

        for (var i = 0; i < tableListElements.length; i++) {

            //<room> elements tag
            var roomListElements = tableListElements[i].getElementsByTagName("room");

            for (var j = 0; j < roomListElements.length; j++) {

                //<table> elements tag
                var tableElements = roomListElements[j].getElementsByTagName("table");

                for (var k = 0; k < tableElements.length; k++) {
                    tableAvailability.push(roomListElements[j].getAttribute("id"));
                    tableAvailability.push(tableElements[k].getAttribute("id"));

                    var statusElements = tableElements[k].getElementsByTagName("status");

                    for (var l = 0; l < statusElements.length; l++) {
                        timeAvailability.push(statusElements[l].getAttribute("time") + " - " + statusElements[l].childNodes[0].nodeValue);
                    }

                    tableAvailability.push(tableElements[k].getElementsByTagName("capacity")[0].childNodes[0].nodeValue);


                    tableAvailability.push(timeAvailability);
                    timeAvailability = [];
                    tableList.push(tableAvailability);
                    tableAvailability = [];
                }
            }

        }
    }
};

xmlhttp.send();