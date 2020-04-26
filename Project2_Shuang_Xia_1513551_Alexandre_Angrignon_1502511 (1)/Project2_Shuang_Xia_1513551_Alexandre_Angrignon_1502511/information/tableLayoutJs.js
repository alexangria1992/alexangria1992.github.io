var tables = [];
var selectedTableOnLayout = [];

function initTable() {
    var mycanvas = document.getElementById("testcanvas");
    var cntx = mycanvas.getContext('2d');
    mycanvas.addEventListener("mousedown", selectedTable, false);
    setInterval(function () {
        mycanvas.addEventListener("mousemove", popupInformation, false);
    }, 1);

    //sun room
    cntx.fillStyle = 'rgb(236,240,230)';
    cntx.fillRect(20, 10, 530, 510);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Sun Room", 60, 510);

    //moon room
    cntx.fillStyle = 'rgb(236,240,230)';
    cntx.fillRect(545, 10, 520, 510);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Moon Room", 1020, 510);

    //sky deck room
    cntx.fillStyle = 'rgb(236,240,230)';
    cntx.fillRect(20, 530, 1040, 350);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Sky Deck", 60,870);

    //windows1
    cntx.fillStyle = 'rgb(128, 204, 255)';
    cntx.fillRect(40, 10, 150, 25);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Windows", 110, 25);

    //windows2
    cntx.fillStyle = 'rgb(128, 204, 255)';
    cntx.fillRect(250, 10, 150, 25);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Windows", 325, 25);

    //windows3
    cntx.fillStyle = 'rgb(128, 204, 255)';
    cntx.fillRect(670, 10, 150, 25);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Windows", 745, 25);

    //windows4
    cntx.fillStyle = 'rgb(128, 204, 255)';
    cntx.fillRect(890, 10, 150, 25);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Windows", 965, 25);

    //kitchen1
    cntx.fillStyle = 'rgb(163, 194, 194)';
    cntx.fillRect(480, 10, 120, 180);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Kitchen", 530, 100);

    //door1
    cntx.fillStyle = 'rgb(128, 204, 255)';
    cntx.fillRect(150, 490, 200, 30);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Door To Outside Deck", 250, 510);

    //door2
    cntx.fillStyle = 'rgb(128, 204, 255)';
    cntx.fillRect(760, 490, 200, 30);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Door To Outside Deck", 860, 510);

    //toilet1
    cntx.fillStyle = 'rgb(204, 204, 204)';
    cntx.fillRect(480, 190, 120, 80);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Male Toilet", 540, 230);

    //toilet2
    cntx.fillStyle = 'rgb(204, 204, 204)';
    cntx.fillRect(480, 360, 120, 80);
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Female Toilet", 540, 400);

    //staircase
    cntx.fillStyle = 'rgb(153,153,153)';
    cntx.fillRect(480, 440, 120, 80);
    cntx.strokeStyle = 'black';
    cntx.beginPath();
    cntx.lineWidth = "1";
    cntx.rect(480, 440, 20, 80);
    cntx.stroke();
    cntx.beginPath();
    cntx.lineWidth = "1";
    cntx.rect(500, 440, 20, 80);
    cntx.stroke();
    cntx.beginPath();
    cntx.lineWidth = "1";
    cntx.rect(520, 440, 20, 80);
    cntx.stroke();
    cntx.beginPath();
    cntx.lineWidth = "1";
    cntx.rect(540, 440, 20, 80);
    cntx.stroke();
    cntx.beginPath();
    cntx.lineWidth = "1";
    cntx.rect(560, 440, 20, 80);
    cntx.stroke();
    cntx.beginPath();
    cntx.lineWidth = "1";
    cntx.rect(580, 440, 20, 80);
    cntx.stroke();
    cntx.fillStyle = 'black';
    cntx.textAlign = "center";
    cntx.fillText("Staircase", 540, 480);



    // sun room 

    //table1
    availableTable(70, 70, 70, 50, cntx, "Table 1");
    tables.push(["Room 1", 70, 70, 70, 50, cntx, "Table 1", ""]);
    //chair1
    populateChair(95, 60, 20, 10, cntx);
    //chair2
    populateChair(95, 120, 20, 10, cntx);

    //table2
    availableTable(60, 150, 100, 80, cntx, "Table 2");
    tables.push(["Room 1", 60, 150, 100, 80, cntx, "Table 2", ""]);
    //chair1
    populateChair(50, 160, 10, 20, cntx);
    //chair2
    populateChair(50, 200, 10, 20, cntx);
    //chair3
    cntx.fillRect(160, 160, 10, 20, cntx);
    //chair4
    cntx.fillRect(160, 200, 10, 20, cntx);

    //table3
    availableTable(55, 270, 120, 140, cntx, "Table 3");
    tables.push(["Room 1", 55, 270, 120, 140, cntx, "Table 3", ""]);
    //chair1
    populateChair(45, 290, 10, 20, cntx);
    //chair2
    populateChair(45, 330, 10, 20, cntx);
    //chair3
    populateChair(45, 370, 10, 20, cntx);
    //chair4
    populateChair(175, 290, 10, 20, cntx);
    //chair5
    populateChair(175, 330, 10, 20, cntx);
    //chair6
    populateChair(175, 370, 10, 20, cntx);

    //table4
    availableTable(280, 70, 70, 50, cntx, "Table 4");
    tables.push(["Room 1", 280, 70, 70, 50, cntx, "Table 4", ""]);
    //chair1
    populateChair(305, 60, 20, 10, cntx);
    //chair2
    populateChair(305, 120, 20, 10, cntx);

    //table5
    availableTable(270, 150, 100, 80, cntx, "Table 5");
    tables.push(["Room 1", 270, 150, 100, 80, cntx, "Table 5", ""]);
    //chair1
    populateChair(260, 160, 10, 20, cntx);
    //chair2
    populateChair(260, 200, 10, 20, cntx);
    //chair3
    populateChair(370, 160, 10, 20, cntx);
    //chair4
    populateChair(370, 200, 10, 20, cntx);

    //table6
    availableTable(265, 270, 120, 180, cntx, "Table 6");
    tables.push(["Room 1", 265, 270, 120, 180, cntx, "Table 6", ""]);
    //chair1
    populateChair(255, 290, 10, 20, cntx);
    //chair2
    populateChair(255, 330, 10, 20, cntx);
    //chair3
    populateChair(255, 370, 10, 20, cntx);
    //chair4
    populateChair(255, 410, 10, 20, cntx);
    //chair5
    populateChair(385, 290, 10, 20, cntx);
    //chair6
    populateChair(385, 330, 10, 20, cntx);
    //chair7
    populateChair(385, 370, 10, 20, cntx);
    //chair8
    populateChair(385, 410, 10, 20, cntx);





    // moon room

    //table1
    availableTable(700, 70, 70, 50, cntx, "Table 1");
    tables.push(["Room 2", 700, 70, 70, 50, cntx, "Table 1", ""]);
    //chair1
    populateChair(725, 60, 20, 10, cntx);
    //chair2
    populateChair(725, 120, 20, 10, cntx);

    //table2
    availableTable(690, 150, 100, 80, cntx, "Table 2");
    tables.push(["Room 2", 690, 150, 100, 80, cntx, "Table 2", ""]);
    //chair1
    populateChair(680, 160, 10, 20, cntx);
    //chair2
    populateChair(680, 200, 10, 20, cntx);
    //chair3
    populateChair(790, 160, 10, 20, cntx);
    //chair4
    populateChair(790, 200, 10, 20, cntx);

    //table3
    availableTable(690, 270, 120, 180, cntx, "Table 3");
    tables.push(["Room 2", 690, 270, 120, 180, cntx, "Table 3", ""]);
    //chair1
    populateChair(680, 290, 10, 20, cntx);
    //chair2
    populateChair(680, 330, 10, 20, cntx);
    //chair3
    populateChair(680, 370, 10, 20, cntx);
    //chair4
    populateChair(680, 410, 10, 20, cntx);
    //chair5
    populateChair(810, 290, 10, 20, cntx);
    //chair6
    populateChair(810, 330, 10, 20, cntx);
    //chair7
    populateChair(810, 370, 10, 20, cntx);
    //chair8
    populateChair(810, 410, 10, 20, cntx);

    //table4
    availableTable(930, 70, 70, 50, cntx, "Table 4");
    tables.push(["Room 2", 930, 70, 70, 50, cntx, "Table 4", ""]);
    //chair1
    populateChair(955, 60, 20, 10, cntx);
    //chair2
    populateChair(955, 120, 20, 10, cntx);

    //table5
    availableTable(920, 150, 100, 80, cntx, "Table 5");
    tables.push(["Room 2", 920, 150, 100, 80, cntx, "Table 5", ""]);
    //chair1
    populateChair(910, 160, 10, 20, cntx);
    //chair2
    populateChair(910, 200, 10, 20, cntx);
    //chair3
    populateChair(1020, 160, 10, 20, cntx);
    //chair4
    populateChair(1020, 200, 10, 20, cntx);

    //table6
    availableTable(910, 270, 120, 140, cntx, "Table 6");
    tables.push(["Room 2", 910, 270, 120, 140, cntx, "Table 6", ""]);
    //chair1
    populateChair(900, 290, 10, 20, cntx);
    //chair2
    populateChair(900, 330, 10, 20, cntx);
    //chair3
    populateChair(900, 370, 10, 20, cntx);
    //chair4
    populateChair(1030, 290, 10, 20, cntx);
    //chair5
    populateChair(1030, 330, 10, 20, cntx);
    //chair6
    populateChair(1030, 370, 10, 20, cntx);


    // sky DECK

    //table1
    availableTable(100, 580, 80, 60, cntx, "Table 1");
    tables.push(["Outside Deck", 100, 580, 80, 60, cntx, "Table 1", ""]);
    //chair1
    populateChair(130, 570, 20, 10, cntx);
    //chair2
    populateChair(130, 640, 20, 10, cntx);

    //table2
    availableTable(90, 700, 100, 80, cntx, "Table 2");
    tables.push(["Outside Deck", 90, 700, 100, 80, cntx, "Table 2", ""]);
    //chair1
    populateChair(80, 710, 10, 20, cntx);
    //chair2
    populateChair(80, 750, 10, 20, cntx);
    //chair3
    populateChair(190, 710, 10, 20, cntx);
    //chair4
    populateChair(190, 750, 10, 20, cntx);

    //table3
    availableTable(340, 560, 160, 90, cntx, "Table 3");
    tables.push(["Outside Deck", 340, 560, 160, 90, cntx, "Table 3", ""]);
    //chair1
    populateChair(360, 550, 20, 10, cntx);
    //chair2
    populateChair(360, 650, 20, 10, cntx);
    //chair3
    populateChair(410, 550, 20, 10, cntx);
    //chair4
    populateChair(410, 650, 20, 10, cntx);
    //chair5
    populateChair(460, 550, 20, 10, cntx);
    //chair6
    populateChair(460, 650, 20, 10, cntx);

    //table4
    availableTable(560, 560, 160, 90, cntx, "Table 4");
    tables.push(["Outside Deck", 560, 560, 160, 90, cntx, "Table 4", ""]);
    //chair1
    populateChair(580, 550, 20, 10, cntx);
    //chair2
    populateChair(580, 650, 20, 10, cntx);
    //chair3
    populateChair(630, 550, 20, 10, cntx);
    //chair4
    populateChair(630, 650, 20, 10, cntx);
    //chair5
    populateChair(680, 550, 20, 10, cntx);
    //chair6
    populateChair(680, 650, 20, 10, cntx);

    //table5
    availableTable(400, 700, 260, 100, cntx, "Table 5");
    tables.push(["Outside Deck", 400, 700, 260, 100, cntx, "Table 5", ""]);
    //chair1
    populateChair(430, 690, 20, 10, cntx);
    //chair2
    populateChair(490, 690, 20, 10, cntx);
    //chair3
    populateChair(550, 690, 20, 10, cntx);
    //chair4
    populateChair(610, 690, 20, 10, cntx);
    //chair5
    populateChair(430, 800, 20, 10, cntx);
    //chair6
    populateChair(490, 800, 20, 10, cntx);
    //chair7
    populateChair(550, 800, 20, 10, cntx);
    //chair8
    populateChair(610, 800, 20, 10, cntx);

    //table6
    availableTable(860, 580, 80, 60, cntx, "Table 6");
    tables.push(["Outside Deck", 860, 580, 80, 60, cntx, "Table 6", ""]);
    //chair1
    populateChair(890, 570, 20, 10, cntx);
    //chair2
    populateChair(890, 640, 20, 10, cntx);

    //table7
    availableTable(850, 700, 100, 80, cntx, "Table 7");
    tables.push(["Outside Deck", 850, 700, 100, 80, cntx, "Table 7", ""]);
    //chair1
    populateChair(840, 710, 10, 20, cntx);
    //chair2
    populateChair(840, 750, 10, 20, cntx);
    //chair3
    populateChair(950, 710, 10, 20, cntx);
    //chair4
    populateChair(950, 750, 10, 20, cntx);

    //Information
    //table8

    availableTable(700, 850, 30, 30, cntx, "Available");
    //table9
    unavailableTable(530, 850, 30, 30, cntx, "Unavailable");
    //table10
    selectedTable_click(350, 850, 30, 30, cntx, " Selected");

}

function availableTable(x, y, width, height, cntx, tableText) {
    cntx.beginPath();
    cntx.lineWidth = "1";
    cntx.rect(x, y, width, height);
    cntx.stroke();
    cntx.fillStyle = 'rgb(179, 230, 179)';
    cntx.fillRect(x, y, width, height);
    fillTableText(x, y, width, height, cntx, tableText);
}

function unavailableTable(x, y, width, height, cntx, tableText) {
    cntx.beginPath();
    cntx.lineWidth = "1";
    cntx.rect(x, y, width, height);
    cntx.stroke();
    cntx.fillStyle = 'rgb(255, 204, 204)';
    cntx.fillRect(x, y, width, height);
    fillTableText(x, y, width, height, cntx, tableText);
}

function fillTableText(x, y, width, height, cntx, tableText) {
    cntx.textAlign = "center";
    cntx.fillStyle = 'Black';
    cntx.fillText(tableText, x + (width / 2), y + (height / 2));
}

function selectedTable_click(x, y, width, height, cntx, tableText) {
    cntx.fillStyle = 'rgb(0, 153, 204)';
    cntx.fillRect(x, y, width, height);
    cntx.strokeStyle = 'black';
    cntx.beginPath();
    cntx.lineWidth = "2";
    cntx.rect(x, y, width, height);
    cntx.stroke();
    cntx.textAlign = "center";
    cntx.fillStyle = 'Black';
    cntx.fillText(tableText, x + (width / 2), y + (height / 2));
}

function populateChair(x, y, width, height, cntx) {
    cntx.fillStyle = '#848991';
    cntx.fillRect(x, y, width, height);
}

function selectedTable(event) {
    var mycanvas = document.getElementById("testcanvas").getBoundingClientRect();
    canvas_x = event.clientX - mycanvas.left - 10;
    canvas_y = event.clientY - mycanvas.top - 10;

    for (var i = 0; i < tables.length; i++) {
        if (tables[i][7] != "Booked") {
            if (tables[i][7] != "Selected") {
                if (canvas_x >= tables[i][1] && canvas_x <= (tables[i][1] + tables[i][3])) {
                    if (canvas_y >= tables[i][2] && canvas_y <= (tables[i][2] + tables[i][4])) {
                        tables[i][7] = "Selected";
                        selectedTable_click(tables[i][1], tables[i][2], tables[i][3], tables[i][4], tables[i][5], tables[i][6]);
                        selectedTableOnLayout = tables[i];
                    }
                }
            } else {
                tables[i][7] = "";
                availableTable(tables[i][1], tables[i][2], tables[i][3], tables[i][4], tables[i][5], tables[i][6]);
                selectedTableOnLayout = [];
            }
        } else {
            unavailableTable(tables[i][1], tables[i][2], tables[i][3], tables[i][4], tables[i][5], tables[i][6]);
        }
    }
}

function popupInformation(event) {
    var mycanvas = document.getElementById("testcanvas").getBoundingClientRect();
    canvas_x = event.clientX - mycanvas.left - 10;
    canvas_y = event.clientY - mycanvas.top - 10;

    document.getElementById("info-layout").innerHTML = "";

    for (var i = 0; i < tables.length; i++) {
        if (canvas_x >= tables[i][1] && canvas_x <= (tables[i][1] + tables[i][3])) {
            if (canvas_y >= tables[i][2] && canvas_y <= (tables[i][2] + tables[i][4])) {
                var seatCapacity = 0;

                if (tables[i][0] != "Outside Deck") {
                    if (tables[i][6] == "1" && tables[i][6] == "4") {
                        seatCapacity = 2;
                    } else if (tables[i][6] == "2" && tables[i][6] == "5") {
                        seatCapacity = 4;
                    } else {
                        if (tables[i][0] == "Room 1") {
                            if (tables[i][6] == "3") {
                                seatCapacity = 6;
                            } else {
                                seatCapacity = 8;
                            }
                        } else {
                            if (tables[i][6] == "3") {
                                seatCapacity = 8;
                            } else {
                                seatCapacity = 6;
                            }
                        }
                    }
                } else {
                    if (tables[i][6] == "1" && tables[i][6] == "6") {
                        seatCapacity = 2;
                    } else if (tables[i][6] == "2" && tables[i][6] == "7") {
                        seatCapacity = 4;
                    } else if (tables[i][6] == "3" && tables[i][6] == "4") {
                        seatCapacity = 6;
                    } else {
                        seatCapacity = 8;
                    }
                }

                

                var infoPopup = document.createElement('div');
                infoPopup.setAttribute('class', 'info-popup-content');
                infoPopup.setAttribute('style', 'top: ' + (canvas_y + 20) + 'px; left: ' + (canvas_x + 20) + 'px;');

                var roomName = "";

                if (tables[i][0] == "Room 1")
                    roomName = "Sun Room"
                else if (tables[i][0] == "Room 2")
                    roomName = "Moon Room";
                else
                    roomName = "Sky Deck";

                var roomInfoContent = document.createElement('span');
                roomInfoContent.innerHTML = roomName + "<br/>";

                var tableInfoContent = document.createElement('span');
                tableInfoContent.innerHTML = tables[i][6] + "<br/>";

                var tableCapacityContent = document.createElement('span');
                tableCapacityContent.innerHTML = "Seat Capacity: " + seatCapacity + "<br/>";

                var tableStatusContent = document.createElement('span');

                if (tables[i][7] == "")
                    tableStatusContent.innerHTML = "Status: Available";
                else if (tables[i][7] == "Booked")
                    tableStatusContent.innerHTML = "Status: Unavailable";
                else
                    tableStatusContent.innerHTML = "Status: " + tables[i][7];

                infoPopup.appendChild(roomInfoContent);
                infoPopup.appendChild(tableInfoContent);
                infoPopup.appendChild(tableCapacityContent);
                infoPopup.appendChild(tableStatusContent);

                document.getElementById("info-layout").appendChild(infoPopup);
            } 
        } 

    }
}