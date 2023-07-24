let details = [
  { id: 1, name: 'abc', age: 23 },
  { id: 2, name: 'xyz', age: 21 },
  { id: 3, name: 'lkm', age: 24 },
];

let tbody = document.getElementById('tbody');

details.forEach((item) => {
  let row = document.createElement('tr');
  let keys = Object.keys(item);
  for (let k of keys) {
    let cell = document.createElement('td');
    cell.innerText = item[k];
    console.log(cell);
    row.appendChild(cell);
  }
  let deleteBtn = document.createElement('button');
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', () => handleDelete(i));

  let deleteCell = document.createElement('td');
  deleteCell.append(deleteBtn);

  row.appendChild(deleteCell);
  tbody.appendChild(row);
});

let handleDelete = (i) => {
  details.splice(i, 1);
};
