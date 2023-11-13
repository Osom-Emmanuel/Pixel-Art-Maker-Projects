let inputRow = document.getElementById('inputRow');
let inputColumn = document.getElementById('inputColumn');
let colorBtn = document.getElementById('color');
let drawBtn = document.getElementById('draw');
let clearBtn = document.getElementById('clear');
let display = document.getElementById('container');
let Paint = document.getElementById('paint');

let colorPicked = colorBtn.value;

let process = () => {
    let rows = Number(inputRow.value);
    let columns = Number(inputColumn.value);
    let table = document.createElement('table');
    // console.log(typeof(columns));
    // table.style.textAlign = center;


    for(i = 0; i < rows; i++){
        let tableRows = document.createElement('tr');
        // console.log(tableRows);
        
        for (let c = 0; c < columns; c++) {
            let tableColumns = document.createElement('td');
            // console.log(tableColumns);
            tableRows.appendChild(tableColumns);
            table.appendChild(tableRows);
            
            tableColumns.addEventListener('click', (e) => {
                tableColumns.style.backgroundColor = colorPicked;
                colorPicked = colorBtn.value;
                console.log(colorPicked)
            })
        }
        display.innerHTML = ""
        
        display.appendChild(table);
    
    }
}

drawBtn.addEventListener('click', (e) => {
    process();
    e.preventDefault();
})

clearBtn.addEventListener('click', (e) => {
    display.innerHTML = "";
})

