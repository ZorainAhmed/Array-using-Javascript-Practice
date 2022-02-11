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
function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  switching = true;
  /*Make a loop that will continue until
  no switching has been done:*/
  while (switching) {
    //start by saying: no switching is done:
    switching = false;
    rows = table.rows;
    /*Loop through all table rows (except the
    first, which contains table headers):*/
    for (i = 0; i <= (rows.length - 1); i++) {
      //start by saying there should be no switching:
      shouldSwitch = false;
      /*Get the two elements you want to compare,
      one from current row and one from the next:*/
      x = rows[i].getElementsByTagName("TD")[0];
      y = rows[i + 1].getElementsByTagName("TD")[0];
      //check if the two rows should switch place:
      if (Number(x.innerHTML) > Number(y.innerHTML)) {
        //if so, mark as a switch and break the loop:
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /*If a switch has been marked, make the switch
      and mark that a switch has been done:*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}