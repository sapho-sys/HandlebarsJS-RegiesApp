function regFactory(regNoData) {
    var storeRegNo = regNoData || {};
    var checkedTown = [];
    var duplicateMessage= "";
    const regExp = /^((CA|CF|CJ|CL)\s([0-9]){6})$/;
    const regExp1 = /^((CA|CF|CJ|CL)\s([0-9]){3}\s([0-9]){3})$/;
    const regExp2 = /^((CA|CF|CJ|CL)\s([0-9]){3}\-([0-9]){3})$/;

    function addRegNo(regNo) {
        var regNumber = regNo.toUpperCase();
        if (regNumber !== "") {      
            if (regNumber.match(regExp) || regNumber.match(regExp1) || regNumber.match(regExp2)) {
                if (!storeRegNo[regNumber]) {
                    storeRegNo[regNumber] = 1;
                    return true
    
                } else {
                    storeRegNo[regNumber]++;
                    duplicateMessage= "This plate has already been entered";
                    return false
    
                }
            }  
        }
    }

    function Message(){
        return duplicateMessage;
    }

    function regNoAdded() {
        return storeRegNo;

    }


//function where we 
    function showRegNo(regTown) {
        checkedTown = [];
        if (regTown === "Cape Town") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CA")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        }  else if (regTown === "Kuilsriver") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CF")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        }  else if (regTown === "Paarl") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CJ")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }

        } else if (regTown === "Stellenbosch") {
            var strStoreRegNo = Object.keys(storeRegNo);
            for (var i=0; i< strStoreRegNo.length; i++) {
                if (strStoreRegNo[i].startsWith("CL")){
                    checkedTown.push(strStoreRegNo[i]);

                }
            }
        }


    // if(regTown === "Cape Town" || regTown === "Kuilriver" || regTown === "Paarl" || regTown === "Stellenbosch"){
    //     var strStoreRegNo=Object.keys(storeRegNo);
    //     for(var i=0; i < strStoreRegNo.length;i++){
    //       if(strStoreRegNo[i].startsWith("CA") || strStoreRegNo[i].startsWith("CF") || strStoreRegNo[i].startsWith("CJ") || strStoreRegNo[i].startsWith("CL")){
    //         checkedTown.push(strStoreRegNo[i])
    //       }
    //     }
    //   }


    }


    




    function showTown() {
        return checkedTown;
    }

    return {
        addRegNo,
        regNoAdded,
        showRegNo,
        showTown,
        Message
        
        
    }
}