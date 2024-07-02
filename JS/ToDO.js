let valueNo = prompt("What do you want to do?")

while (valueNo.toLowerCase() !== "quit") {
    if (valueNo.toLowerCase() === "new") {


        let getListvalue = prompt("Provide the ToDO list value");
        let listed = [];
        while (getListvalue.toLowerCase() !== "new") {


            if (getListvalue.toLowerCase() === "list") {
                // let finalList = "";
                // for (let listedValue of listed) {
                //     finalList = + listedValue + ',';
                // }
                alert(listed.toString());
                getListvalue = prompt("Provide the ToDO list value");
            }
            else if (getListvalue.toLowerCase() === "delete") {
                let provideIndex = prompt("Provide the item no. to delete.");
                while (provideIndex < listed.length) {

                    listed.splice(provideIndex, 1);
                    provideIndex = prompt("Provide the item no. to delete.");

                }
                getListvalue = prompt("Provide the ToDO list value");

            }
            else if (getListvalue.toLowerCase() === "quit") {
                valueNo = "quit";
                break;
            }
            else {
                listed.push(getListvalue);
                getListvalue = prompt("Provide the ToDO list value");
            }
        }
    }
    else {
        valueNo = prompt("What do you want to do?");
    }

}
alert("Thankyou for using ToDo List");