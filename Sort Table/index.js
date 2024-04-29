// function sortTable(colIndex) {
//   let table = document.getElementById("myTable");
//   let rows = Array.from(table.rows).slice(1);

//   rows.sort(function (rowA, rowB) {
//     let cellA = rowA.cells[colIndex].textContent.trim();
//     let cellB = rowB.cells[colIndex].textContent.trim();

//     if (!isNaN(cellA) && !isNaN(cellB)) {
//       return Number(cellA) - Number(cellB);
//     } else {
//       return cellA.localeCompare(cellB);
//     }
//   });

//   table.tBodies[0].append(...rows);
// }
