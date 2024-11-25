function insert_Row() {
    // Get the table element by its ID
    var table = document.getElementById("sampleTable");

    // Create a new row at the beginning of the table
    var newRow = table.insertRow(0); // 0 specifies the row index at the top

    // Create two cells in the new row
    var cell1 = newRow.insertCell(0); // First cell (left)
    var cell2 = newRow.insertCell(1); // Second cell (right)

    // Set the text content of the cells
    cell1.textContent = "New Cell1";
    cell2.textContent = "New Cell2";
}
