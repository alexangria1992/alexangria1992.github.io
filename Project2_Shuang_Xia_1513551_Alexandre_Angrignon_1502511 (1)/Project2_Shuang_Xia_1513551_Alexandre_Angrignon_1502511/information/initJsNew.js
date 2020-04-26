var bookedTable = [];

window.onload = function () {
    initTable();

    //setInterval(function () { alert(tableList[1][3][1]); }, 1000);

    var getTableLayout = document.getElementById("outer");
    var getTableBtn = document.getElementsByClassName("yongyin4")[0];
    var getFinishTableBtn = document.getElementById("finishBookingTableBtn");
    var numberOfPeople = document.getElementById("dobnumber");
    var getTimeForTable = document.getElementById("dobtime");
    var getDateForTable = document.getElementById("bday");
    var getOverlayTableLayout = document.getElementsByClassName("overlay-table-layout")[0];
    var getDishLayout = document.getElementById("outer-dish");
    var getDishBtn = document.getElementsByClassName("yongyin5")[0];
    var getFinishDishBtn = document.getElementById("finishBookingDishBtn");
    var getOverlayDishLayout = document.getElementsByClassName("overlay-dish-layout")[0];
    var finalizeNumberOfPeople = document.getElementById("showNumber");
    var finalizeDate = document.getElementById("showDate");
    var finalizeTime = document.getElementById("showTime");
    var finalizeDishes = document.getElementById("showDishes");
    var finalizeTable = document.getElementById("showTable");
    var confirmedBookingBtn = document.getElementsByClassName("con-right-confirm")[0];


    var displayMenuBefore = false;

    //Table Array Elements (from Javascript)
    //tables[i][0] = Room Number, tables[i][1] = x position
    //tables[i][2] = y position, tables[i][3] = width, tables[i][4] = height
    //tables[i][5] = canvas context, tables[i][6] = table number, tables[i][7] = status

    //Table Array Elements (from XMLRequest)
    //tableList[i][0] = Room number, tableList[i][1] = table number, tableList[i][2] = capacity
    //tableList[i][3] = array of time with status

    //If Table button is clicked
    getTableBtn.onclick = function () {
        displayTableLayout();
    }

    //If Finish Booking Table button is clicked
    getFinishTableBtn.onclick = function () {
        finishBookingTable();
    }

    //If User click anywhere outside of the table layout 
    getOverlayTableLayout.onclick = function () {
        finishBookingTable();
    }

    //If Menu button is clicked
    getDishBtn.onclick = function () {
        displayMenuLayout();
    }

    //If finished booking dishes button is clicked
    getFinishDishBtn.onclick = function () {
        finishBookingDish();
    }

    //If user click anywhere outside of the dish layout
    getOverlayDishLayout.onclick = function () {
        finishBookingDish();
    }

    //When user select number of people
    numberOfPeople.onchange = function () {
        finalizeNumberOfPeople.innerHTML = numberOfPeople.value;
    }

    //When user select the date
    getDateForTable.onchange = function () {
        finalizeDate.innerHTML = getDateForTable.value;
    }

    //When user select the time
    getTimeForTable.onchange = function () {
        finalizeTime.innerHTML = getTimeForTable.value + " pm";
    }

    //When user click Confirm button
    confirmedBookingBtn.onclick = function () {
        validateBooking();
    }

    finalizeNumberOfPeople.innerHTML = numberOfPeople.value;
    finalizeDate.innerHTML = getDateForTable.value;
    finalizeTime.innerHTML = getTimeForTable.value + " pm";

    function displayTableLayout() {
        getTableLayout.removeAttribute("hidden");

        //Set all tables to unavailable
        setAllTableToUnavailable();

        //Check if the date is today's date
        checkIfDateIsToday();

        //Check table status
        checkTableStatus();

        //Check if there are booked tables (2 hours and selected date)
        checkBookedTables();
    }

    //Set all the tables to unavailable if and only if the table is not selected (just for initializing)
    function setAllTableToUnavailable() {
        for (var i = 0; i < tables.length; i++) {
            if (tables[i][7] != "Selected") {
                tables[i][7] = "Booked";
                unavailableTable(tables[i][1], tables[i][2], tables[i][3], tables[i][4], tables[i][5], tables[i][6]);
            } 
        }
    }

    //Function for finishing selecting the table
    function finishBookingTable() {
        getTableLayout.setAttribute("hidden", "");

        if (selectedTableOnLayout[0] == "Room 1") 
            finalizeTable.innerHTML = "Sun Room, " + selectedTableOnLayout[6];

        else if (selectedTableOnLayout[0] == "Room 2") 
            finalizeTable.innerHTML = "Moon Room, " + selectedTableOnLayout[6];

        else if (selectedTableOnLayout[0] == "Outside Deck")
            finalizeTable.innerHTML = "Sky Deck, " + selectedTableOnLayout[6];

        else 
            finalizeTable.innerHTML = "";

    }

    //Function to check if the date is today's
    function checkIfDateIsToday() {
        var today = new Date();
        var month = today.getMonth() + 1;
        var day = today.getDate();
        var showAlert = false;

        if (month < 10) {
            month = "0" + month;
        }

        if (today.getDate() < 10) {
            day = "0" + day;
        }

        var todayDate = today.getFullYear() + '-' + month + '-' + day;

        if (getDateForTable.value != todayDate) {
            for (var i = 0; i < tables.length; i++) {
                if (tables[i][0] == "Outside Deck") {
                    tables[i][7] = "Booked";
                    unavailableTable(tables[i][1], tables[i][2], tables[i][3], tables[i][4], tables[i][5], tables[i][6]);
                }
            }
        } else {
            for (var i = 0; i < tableList.length; i++) {
                if (tableList[i][0] == "deck") {
                    for (var j = 0; j < tableList[i][3].length; j++) {
                        var getTimeFromTableList = tableList[i][3][j].substring(0, tableList[i][3][j].indexOf(" ")); //return an actual time value from time array
                        var getStatusFromTableList = tableList[i][3][j].substring(tableList[i][3][j].lastIndexOf(" ") + 1); //return status from the array
        
                        if (getTimeForTable.value == getTimeFromTableList) {
                            if (numberOfPeople.value <= 2) {
                                checkIfTodayIsRaining(tableList[i][1], getStatusFromTableList);
                            } else if (numberOfPeople.value > 2 && numberOfPeople.value <= 4 && tableList[i][2] > 2) {
                                checkIfTodayIsRaining(tableList[i][1], getStatusFromTableList);
                            } else if (numberOfPeople.value > 4 && numberOfPeople.value <= 6 && tableList[i][2] > 4) {
                                checkIfTodayIsRaining(tableList[i][1], getStatusFromTableList);
                            } else if (numberOfPeople.value > 6 && tableList[i][2] > 6) {
                                checkIfTodayIsRaining(tableList[i][1], getStatusFromTableList);
                            }
                        }
                    }
                }
            }
        }

        if (showAlert == true) {
            alert("Sorry for the inconvenience. Sky Deck is not available to book due to bad weather condition or the temperature is below 18.\nCurrent Weather: " + weatherCondition + "\nCurrent Temperature: " + parseInt(currentTemperature));
        }

        //Function to call the weather API - the weather API is in another javascript (xmlHTTPWeatherjs.js)
        function checkIfTodayIsRaining(tableNumber, status) {
            if (weatherCondition.toLowerCase() != "rain" && currentTemperature > 18) {
                for (var i = 0; i < tables.length; i++) {
                    if (tables[i][0] == "Outside Deck") {
                        var roomNumberForTables = tables[i][0][tables[i][0].length - 1];
                        var tableNumberFromTables = tables[i][6][tables[i][6].length - 1];

                        if (tableNumber == tableNumberFromTables && status.toLowerCase() == "available") {
                            if (tables[i][7] != "Selected") {
                                tables[i][7] = "";
                                availableTable(tables[i][1], tables[i][2], tables[i][3], tables[i][4], tables[i][5], tables[i][6]);
                            }
                        }
                    }

                }
            } else {
                showAlert = true;
            }
        }
    }

    

    //Function to check every table status and capacity from xml
    function checkTableStatus() {

        for (var i = 0; i < tableList.length; i++) {
            for (var j = 0; j < tableList[i][3].length; j++) {
                var getTimeFromTableList = tableList[i][3][j].substring(0, tableList[i][3][j].indexOf(" ")); //return an actual time value from time array
                var getStatusFromTableList = tableList[i][3][j].substring(tableList[i][3][j].lastIndexOf(" ") + 1); //return status from the array

                if (getTimeForTable.value == getTimeFromTableList) {
                    if (numberOfPeople.value <= 2) {
                        checkNumberOfPeople(tableList[i][0], tableList[i][1], getStatusFromTableList);
                    } else if (numberOfPeople.value > 2 && numberOfPeople.value <= 4 && tableList[i][2] > 2) {
                        checkNumberOfPeople(tableList[i][0], tableList[i][1], getStatusFromTableList);
                    } else if (numberOfPeople.value > 4 && numberOfPeople.value <= 6 && tableList[i][2] > 4) {
                        checkNumberOfPeople(tableList[i][0], tableList[i][1], getStatusFromTableList);
                    } else if (numberOfPeople.value > 6 && tableList[i][2] > 6) {
                        checkNumberOfPeople(tableList[i][0], tableList[i][1], getStatusFromTableList);
                    }
                }
            }
        }

    }

    //Compare the status with the xml and set the tables to available if the table is available in XML - does not apply to Sky Deck / Outside Deck due to the weather
    function checkNumberOfPeople(roomNumber, tableNumber, status) {
        for (var i = 0; i < tables.length; i++) {

            if (tables[i][0] != "Outside Deck") {
                var roomNumberForTables = tables[i][0][tables[i][0].length - 1];
                var tableNumberFromTables = tables[i][6][tables[i][6].length - 1];

                if (roomNumber == roomNumberForTables && tableNumber == tableNumberFromTables && status.toLowerCase() == "available") {
                    if (tables[i][7] != "Selected") {
                        tables[i][7] = "";
                        availableTable(tables[i][1], tables[i][2], tables[i][3], tables[i][4], tables[i][5], tables[i][6]);
                    } 
                }
            } 
        }
    }

    //Display the menu layout
    function displayMenuLayout() {
        getDishLayout.removeAttribute("hidden");

        show_dishes();
    }

    //Call the function when user finished booking the dishes
    function finishBookingDish() {
        getDishLayout.setAttribute("hidden", "");

        finish_order_dishes();
    }

    //Initiate Dish Menu 
    function show_dishes() {

        if (displayMenuBefore == false) {

            displayMenuBefore = true;

            var dishContainer = document.getElementsByClassName('dish-container')[0];
            dishContainer.innerHTML = '';

            for (var i = 0; i < Dish.length; i++) {
                var dishContent = document.createElement('div');
                dishContent.setAttribute('class', 'dish-content');

                var dishTitle = document.createElement('div');
                dishTitle.innerHTML = Dish[i][0];
                dishContent.appendChild(dishTitle);

                var dishImage = document.createElement('div');
                dishImage.innerHTML = '<img src="dish_img/' + Dish[i][2] + '" style="width: 100%;" />';
                dishContent.appendChild(dishImage);

                var dishDescription = document.createElement('div');
                dishDescription.innerHTML = "Description: <br/>" + Dish[i][3];
                dishContent.appendChild(dishDescription);

                var dishType = document.createElement('div');

                if (Dish[i][4] != undefined)
                    dishType.innerHTML = '<br/>Type:' + Dish[i][4];
                else
                    dishType.innerHTML = "<br/>";

                dishContent.appendChild(dishType);

                var dishInputContainer = document.createElement('div');
                dishInputContainer.setAttribute('class', 'dish-input-container');

                var dishPrice = document.createElement('div');
                dishPrice.setAttribute('style', 'width:auto; display:inline-block;')
                dishPrice.innerHTML = '<br/>$' + Dish[i][1];
                dishInputContainer.appendChild(dishPrice);

                var checkbox = document.createElement("input");
                var cname = 'ch' + i;

                checkbox.setAttribute('type', 'checkbox');
                checkbox.setAttribute('name', i);
                checkbox.setAttribute('id', cname);
                checkbox.setAttribute('value', Dish[i][1]);
                checkbox.setAttribute('style', 'width:30px; display:inline-block;');
                checkbox.setAttribute('data-dish-name', Dish[i][0]);
                checkbox.checked = false;

                dishInputContainer.appendChild(checkbox);

                var quantityInput = document.createElement('input');
                var qname = 'q' + i;
                quantityInput.setAttribute('type', 'number');
                quantityInput.setAttribute('name', qname);
                quantityInput.setAttribute('id', qname);
                quantityInput.setAttribute('value', 1);
                quantityInput.setAttribute('min', 1);
                quantityInput.setAttribute('style', 'width:80px;');

                dishInputContainer.appendChild(quantityInput);

                dishContent.appendChild(dishInputContainer);

                dishContainer.appendChild(dishContent);
            }
        }
    }

    //Check if user selected any of the dishes and then call the function to calculate the cost
    function finish_order_dishes() {
    
        finalizeDishes.innerHTML = "";

        for (var i = 0; i < Dish.length; i++) {
            var ncheckbox = 'ch' + i;
            var qinput = 'q' + i;

            var x = document.getElementById(ncheckbox);
            if (x.checked) {
                finalizeDishes.innerHTML += "<br/>" + x.getAttribute("data-dish-name") + " x" + document.getElementById(qinput).value;
            }
        }
        calculate_cost();
    }

    //Function to calculate the total cost
    function calculate_cost() {
        var result = '';
        var ncheckbox = '';
        var qinput = '';
        var total = 0;
        for (var i = 0; i < Dish.length; i++) {
            ncheckbox = 'ch' + i;
            qinput = 'q' + i;
            var x = document.getElementById(ncheckbox);
            if (x.checked) {

                total = total + Number(x.value) * Number(document.getElementById(qinput).value);

            }
        }
        document.getElementById('showTotal').innerHTML = total;
    }

    //Validate the confirm booking
    function validateBooking() {
        if (finalizeDishes.innerHTML == "") {
            alert("Please select the dishes");
        } else if (selectedTableOnLayout == "") {
            alert("Please select the table");
        } else {
            for (var i = 0; i < tableList.length; i++) {
                for (var j = 0; j < tableList[i][3].length; j++) {
                    for (var k = 0; k < tables.length; k++) {

                        if (tableList[i][0] == tables[k][0][tables[k][0].length - 1] && tableList[i][1] == tables[k][6][tables[k][6].length - 1] && tables[k][0] == selectedTableOnLayout[0] && tables[k][6] == selectedTableOnLayout[6] && tableList[i][0] != "deck" && selectedTableOnLayout[0] != "Outside Deck") {
                            var getTimeFromTableList = tableList[i][3][j].substring(0, tableList[i][3][j].indexOf(" ")); //return an actual time value from time array
                            var getStatusFromTableList = tableList[i][3][j].substring(tableList[i][3][j].lastIndexOf(" ") + 1); //return status from the array

                            var getOneHourLaterFromTableList = "";
                            var getStatusForOneHourLater = "";

                            if (tableList[i][3][j + 1] != undefined) {
                                getOneHourLaterFromTableList = tableList[i][3][j + 1].substring(0, tableList[i][3][j + 1].indexOf(" ")); //return one hour later time value
                                getStatusForOneHourLater = tableList[i][3][j + 1].substring(tableList[i][3][j + 1].lastIndexOf(" ") + 1); //return one hour later status
                            }
                            
                            if (getTimeForTable.value == getTimeFromTableList && getStatusFromTableList != "Booked") {
                                if (getStatusForOneHourLater != "Booked" && getStatusForOneHourLater != "") {
                                    bookedTable.push([tables[k], getTimeForTable.value, getOneHourLaterFromTableList, getDateForTable.value]);
                                    alert("You have successfully booked the table. Looking forward to see you！");
                                } else {
                                    if (confirm("Please vacate the table within an hour because another guest has already booked this table one hour after " + getTimeForTable.value + " or the restaurant is closed down at 9.30pm. \nAre you sure you want to continue booking?")) {
                                        bookedTable.push([tables[k], getTimeForTable.value, getOneHourLaterFromTableList, getDateForTable.value]);
                                        alert("You have successfully booked the table. Looking forward to see you！");
                                    } else {
                                        alert("You have cancelled the booking.")
                                    }
                                }
                            }

                        } else if (tableList[i][0] == "deck" && tableList[i][1] == tables[k][6][tables[k][6].length - 1] && selectedTableOnLayout[0] == "Outside Deck" && tables[k][6] == selectedTableOnLayout[6] && tables[k][0] == "Outside Deck") {
                            var getTimeFromTableList = tableList[i][3][j].substring(0, tableList[i][3][j].indexOf(" ")); //return an actual time value from time array
                            var getStatusFromTableList = tableList[i][3][j].substring(tableList[i][3][j].lastIndexOf(" ") + 1); //return status from the array

                            var getOneHourLaterFromTableList = "";
                            var getStatusForOneHourLater = "";

                            if (tableList[i][3][j + 1] != undefined) {
                                getOneHourLaterFromTableList = tableList[i][3][j + 1].substring(0, tableList[i][3][j + 1].indexOf(" ")); //return one hour later time value
                                getStatusForOneHourLater = tableList[i][3][j + 1].substring(tableList[i][3][j + 1].lastIndexOf(" ") + 1); //return one hour later status
                            }
                            
                            if (getTimeForTable.value == getTimeFromTableList && getStatusFromTableList != "Booked") {
                                if (getStatusForOneHourLater != "Booked" && getStatusForOneHourLater != "") {
                                    bookedTable.push([tables[k], getTimeForTable.value, getOneHourLaterFromTableList, getDateForTable.value]);
                                    alert("You have successfully booked the table. Looking forward to see you！");
                                } else {
                                    if (confirm("Please vacate the table within an hour because another guest has already booked this table one hour after " + getTimeForTable.value + " or the restaurant is closed down at 9.30pm. \nAre you sure you want to continue booking?")) {
                                        bookedTable.push([tables[k], getTimeForTable.value, getOneHourLaterFromTableList, getDateForTable.value]);
                                        alert("You have successfully booked the table. Looking forward to see you！");
                                    } else {
                                        alert("You have cancelled the booking.")
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    //Check if there are other booked tables
    function checkBookedTables() {
        if (bookedTable != "") {
            for (var i = 0; i < bookedTable.length; i++) {
                if (getDateForTable.value == bookedTable[i][3]) {
                    if (getTimeForTable.value == bookedTable[i][1] || getTimeForTable.value == bookedTable[i][2]) {
                        for (var j = 0; j < tables.length; j++) {
                            if (bookedTable[i][0][0] == tables[j][0] && bookedTable[i][0][6] == tables[j][6]) {
                                tables[j][7] = "Booked";
                                unavailableTable(tables[j][1], tables[j][2], tables[j][3], tables[j][4], tables[j][5], tables[j][6]);
                            }
                        }
                    }
                }
            }
        } 
    }


};
