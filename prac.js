// TABLE 1
const table1 = [
  { name: "A", value: 10 },
  { name: "B", value: 20 },
];

// TABLE 2
const table2 = [
  { name: "C", value: 30 },
  { name: "D", value: 40 },
];

// TABLE 3
const table3 = [
  { name: "E", value: 50 },
  { name: "F", value: 60 },
];

// TABLE 4
const table4 = [
  { name: "G", value: 70 },
  { name: "H", value: 80 },
];

// TABLE 5
const table5 = [
  { name: "I", value: 90 },
  { name: "J", value: 100 },
];

// TABLE 6
const table6 = [
  { name: "K", value: 110 },
  { name: "L", value: 120 },
];

// TABLE 7
const table7 = [
  { name: "M", value: 130 },
  { name: "N", value: 140 },
];

// TABLE 8
const table8 = [
  { name: "O", value: 150 },
  { name: "P", value: 160 },
];

// TABLE 9
const table9 = [
  { name: "Q", value: 170 },
  { name: "R", value: 180 },
];

// TABLE 10
const table10 = [
  { name: "S", value: 190 },
  { name: "T", value: 200 },
];

// ✅ Function to Render Any Table
function renderTable(data, containerId) {
  let html = "<table border='1' cellspacing='0' cellpadding='8'><tr>";

  // Create table headers
  for (let key in data[0]) {
    html += `<th>${key.toUpperCase()}</th>`;
  }
  html += "</tr>";

  // Fill table rows
  data.forEach(row => {
    html += "<tr>";
    for (let key in row) {
      html += `<td>${row[key]}</td>`;
    }
    html += "</tr>";
  });

  html += "</table>";
  document.getElementById(containerId).innerHTML = html;
}
