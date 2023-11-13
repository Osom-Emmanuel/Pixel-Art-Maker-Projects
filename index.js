let inputRow = document.getElementById("inputrow");
let inputsColumn = document.getElementById("inputcol");
let Table = document.querySelector('.table');
let Eraser = document.getElementById('eraser');
let Color = document.querySelector('color');
let display = document.querySelector('.grid-container');
let draw = document.querySelector('.Draw');






// let Tables = document.createElement("table");
process = () => {
    let  Row = parseInt(inputRow.value);
    let Column = parseInt(inputsColumn.value);

    console.log(Row)
    console.log(Column)
    
    for (let i = 0; i < Row; i++){
        let tableRow = document.createElement("tr");
        
        for (let j = 0; j < Column; j++){
            let tableData = document.createElement("td");


            tableRow.appendChild(tableData);
            Table.appendChild(tableRow);
        }

        display.innerHTML = "";
        
        display.appendChild(Table)
    }
    CellArray = document.querySelectorAll("td")
    console.log(CellArray);

}
draw.addEventListener('click', process)
// console.log(process)

Eraser.addEventListener('click', (e) => {
    Table.innerHTML = ""; 
})



  
