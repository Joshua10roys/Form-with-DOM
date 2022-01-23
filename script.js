console.log("Ok")

var submit = document.querySelector("#submit");

submit.addEventListener(("click"), function () {
    console.log("function Ok");
    var fname = document.getElementById("first-name").value;
    var lname = document.getElementById("last-name").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var address = document.getElementById("address").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var pincode = document.getElementById("pincode").value;

    console.log(fname, lname, gender, address, state, country, pincode);

    var table = document.querySelector("#table-body");
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = fname;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = lname;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = gender;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = address;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = state;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = country;
    cell7 = newRow.insertCell(6);
    cell7.innerHTML = pincode;
});
// var table = document.querySelector("#table-body");
// var newRow = table.insertRow(table.length);
// cell1 = newRow.insertCell(0);
// cell1.innerHTML = "fname";
// cell2 = newRow.insertCell(1);
// cell2.innerHTML = "lname";
// cell3 = newRow.insertCell(2);
// cell3.innerHTML = "gender";
// cell4 = newRow.insertCell(3);
// cell4.innerHTML = "address";
// cell5 = newRow.insertCell(4);
// cell5.innerHTML = "state";
// cell6 = newRow.insertCell(5);
// cell6.innerHTML = "country";
// cell7 = newRow.insertCell(6);
// cell7.innerHTML = "pincode";
// console.log(table)