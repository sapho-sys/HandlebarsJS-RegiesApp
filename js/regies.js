//reference 
var addButton1 = document.querySelector(".increment");
var resetBtn1 = document.querySelector(".reset1")
var showBtn1 = document.querySelector(".show1");
var showMeAll1 = document.querySelector(".showAll1");
var radioTown1 = document.querySelector('.rad11');
var dispReg1 = document.querySelector('.dispReg1');
var regBox1 = document.querySelector('.regBox1');
var error1 = document.querySelector(".error1");




// Add event listeners
addButton1.addEventListener('click', regNumber1);
showBtn1.addEventListener('click', showTownReg1);
showMeAll1.addEventListener('click', showAllTownReg1);
resetBtn1.addEventListener('click', resetPage1)


var strRadio1 = "";

//regex for my towns
const regExp11 = /^((CA|CF|CJ|CL)\s([0-9]){6})$/;
const regExp22 = /^((CA|CF|CJ|CL)\s([0-9]){3}\s([0-9]){3})$/;
const regExp33 = /^((CA|CF|CJ|CL)\s([0-9]){3}\-([0-9]){3})$/;
let enteredPlate1;

if (localStorage['registration no.']) {
    //get data from local storage
    enteredPlate1 = JSON.parse(localStorage.getItem("registration no."));
    //call the function that handles the plates 
    addObject1(enteredPlate1);


}


//  Instantiate the instance of the factory function
let instance = regFactory(enteredPlate1);




//handles the values entered then 
function addObject1(myObject) {
    var changed = Object.keys(myObject);
    for (var i = 0; i < changed.length; i++) {
        // create element to display it as silver number plate
        let newRegNo = document.createElement('plates');

        newRegNo.textContent = changed[i];

        dispReg1.appendChild(newRegNo);

    }
}

//handles all the plates entered
function addArray1(myArray) {
    if (myArray.length != 0) {
        for (var i = 0; i < myArray.length; i++) {
            //create element to display all plates
            let newRegNo = document.createElement('plates');

            newRegNo.textContent = myArray[i];
            console.log(newRegNo);
            dispReg1.appendChild(newRegNo);

        }
    } else {
        setTimeout(function () {
            dispReg1.innerHTML = "No registration number from this town!";

        }, 0);

        setTimeout(function () {
            dispReg1.innerHTML = "";
        }, 3500);
    }

}




// function for Add registration button

function regNumber1() {
    dispReg1.innerHTML = "";
    document.getElementById('Cpt').checked = false;
    document.getElementById('Paarl').checked = false;
    document.getElementById('Stellies').checked = false;
    document.getElementById('Kuilsriver').checked = false;
    strRadio = "";



    if (regBox1.value !== "") {

        if (regBox1.value.toUpperCase().match(regExp11) || regBox1.value.toUpperCase().match(regExp22) || regBox1.value.toUpperCase().match(regExp33)) {

            if (instance.addRegNo(regBox1.value)) {

                addObject1(instance.regNoAdded());
                regBox1.value = "";

            } else {
                addObject1(instance.regNoAdded());
                setTimeout(function () {
                    error1.innerHTML = Instantiate.Message();
                    error1.classList.add('error');

                }, 0);
                setTimeout(function () {
                    document.getElementById('Cpt').checked = false;
                    document.getElementById('Paarl').checked = false;
                    document.getElementById('Stellies').checked = false;
                    document.getElementById('Kuilsriver').checked = false;
                    regBox1.value="";

                    error1.innerHTML = "";
                    error1.classList.remove('error');
                }, 5500)

            }

        } else {
            addObject1(instance.regNoAdded());

            setTimeout(function () {
                error1.innerHTML = "Error! Invalid registration number format provided";
                error1.classList.add('error');
            }, 0);

            setTimeout(function () {
                document.getElementById('Cpt').checked = false;
                document.getElementById('Paarl').checked = false;
                document.getElementById('Stellies').checked = false;
                document.getElementById('Kuilsriver').checked = false;


                dispReg1.innerHTML = "";
                regBox1.value = "";
                error1.innerHTML = "";
            }, 5500);
        }

    } else {
        addObject1(instance.regNoAdded());
        setTimeout(function () {
            error1.innerHTML = "Error! Please enter registration";
            error1.classList.add('error');
        }, 0);

        setTimeout(function () {
            document.getElementById('Cpt').checked = false;
            document.getElementById('Paarl').checked = false;
            document.getElementById('Stellies').checked = false;
            document.getElementById('Kuilsriver').checked = false;


            dispReg1.innerHTML = "";
            regBox1.value = "";
            error1.innerHTML = "";
        }, 5500);
    }


    localStorage.setItem("registration no.", JSON.stringify(instance.regNoAdded()));



}


//  Call function that Show registration numbers that already in the localStorage

// addObject1(instance.regNoAdded());


// Retrieve the object from storage
// var retrievedObject = localStorage.getItem("registration");

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// let plates = JSON.parse(retrievedObject);
// dispReg.innerHTML= Object.keys(plates).join(" ");





// function for Show registration button

function showTownReg1() {


    dispReg1.innerHTML = "";

    var checkedTownBtn1 = document.querySelector("input[name='town']:checked");

    if (checkedTownBtn1) {
        strRadio1 = checkedTownBtn1.value;

    }

    if (strRadio1 !== "") {


        instance.showRegNo(strRadio1);
        addArray1(instance.showTown());



    } else {
        setTimeout(function () {
            dispReg1.innerHTML = "Error! town not selected";


        }, 0);

        setTimeout(function () {
            document.getElementById('Cpt').checked = false;
            document.getElementById('Paarl').checked = false;
            document.getElementById('Stellies').checked = false;
            document.getElementById('Kuilsriver').checked = false;


            dispReg1.innerHTML = "";
            regBox1.value = "";
            dispReg1.innerHTML = "";
            addObject1(instance.regNoAdded());


        }, 5500);

    }


}


//  function for Show All registration button

function showAllTownReg1() {

    dispReg1.innerHTML = "";
    document.getElementById('Cpt').checked = false;
    document.getElementById('Paarl').checked = false;
    document.getElementById('Stellies').checked = false;
    document.getElementById('Kuilsriver').checked = false;
    strRadio1 = "";



    var objectForTwns1 = Object.keys(Instantiate.regNoAdded());
    if (objectForTwns1.length != 0) {
        addObject1(instance.regNoAdded());



    } else {
        setTimeout(function () {
            dispReg1.innerHTML = "No Registration number(s) yet";

        }, 0);

        setTimeout(function () {
            document.getElementById('Cpt').checked = false;
            document.getElementById('Paarl').checked = false;
            document.getElementById('Stellies').checked = false;
            document.getElementById('Kuilsriver').checked = false;
            regBox1.value = "";
            dispReg1.innerHTML = "";

        }, 3500);
    }

}





// function for Reset Button

function resetPage1() {
    localStorage.clear();

    setTimeout(function () {
        dispReg1.innerHTML = "The page will be reset shortly";



    }, 0);

    setTimeout(function () {
        document.getElementById('Cpt').checked = false;
        document.getElementById('Paarl').checked = false;
        document.getElementById('Stellies').checked = false;
        document.getElementById('Kuilsriver').checked = false;
        dispReg1.innerHTML = "";
        regBox1.value = "";
        location.reload();

    }, 2500);

}







