var result = {};
var count = 0;

function onFormSubmit() {
    var formData = readFormData();
    result = formData["testInput"].match(/[^\d]+|\d+/g);
	insertRecord(result);
	alert(result);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["testInput"] = document.getElementById("testInput").value;
    return formData;
}

function insertRecord(result) {
    var table = document.getElementById("List").getElementsByTagName('tbody')[0];
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