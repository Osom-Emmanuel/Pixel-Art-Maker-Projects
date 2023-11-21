let inputRow = document.getElementById('inputRow');
let inputColumn = document.getElementById('inputColumn');
let colorBtn = document.getElementById('color');
let drawBtn = document.getElementById('draw');
let clearBtn = document.getElementById('clear');
let display = document.getElementById('container');
let Paint = document.getElementById('paint');
let Eraserbtn = document.getElementById('erase');

let count = 0;
let check = false;
// count++
// console.log(count++)



let process = () => {
    let rows = Number(inputRow.value);
    let columns = Number(inputColumn.value);
    let table = document.createElement('table');
    // console.log(typeof(columns));
 

    for(i = 0; i < rows; i++){
        let tableRows = document.createElement('tr');
        // console.log(tableRows);
        
        for (let c = 0; c < columns; c++) {
            let tableColumns = document.createElement('td');
            // console.log(tableColumns);
            tableRows.appendChild(tableColumns);
            table.appendChild(tableRows);

            // Adding colorings
            tableColumns.addEventListener('click', (e) => {
                if(check){
                    tableColumns.style.backgroundColor = 'transparent'
                }else{
                    tableColumns.style.backgroundColor = colorBtn.value
                }
            })
            tableColumns.addEventListener('dblclick', (e) => {
                tableColumns.style.backgroundColor = 'transparent';
            })

            Eraserbtn.addEventListener('click', (e) => {
                check = true                   
                e.preventDefault();
            })
            Paint.addEventListener('click', (e) => {
                check = false                   
                e.preventDefault();
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




