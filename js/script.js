var result = {};

function onFormSubmit() {
    var formData = readFormData();
    console.log(formData);
    result = formData["testInput"].match(/[^\d]+|\d+/g);
    console.log(result.length);
    if(result.length > 1){
    	var i1 = result[0];
    	var i2 = result[1];	
    }
    else{
    	console.log(result);
    }
	
	insertNewRecord(result);
	alert(result);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["testInput"] = document.getElementById("testInput").value;
    return formData;
}

function insertNewRecord(result) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
    var count = 0;
    for (var i = 0; i <= result.length - 1; i++) {
    	var newRow = table.insertRow(table.length+1);
    	cell1 = newRow.insertCell(0);
    	cell1.innerHTML = count;
    	cell2 = newRow.insertCell(1);
    	cell2.innerHTML = result[i];
    	count += 1;
    }
}
function resetForm() {
    document.getElementById("testInput").value = "";
    selectedRow = null;
}