let grid = document.getElementById("grid");//Gets the table element
let row = grid.rows;// ([...<tr>])Gets an array of all the rows in the table element


//Adding columns
document.getElementById('addColumn').addEventListener("click",
    function(){
        for(let i = 0; i < row.length; i++){
           let column =  row[i].insertCell(-1);
           column.addEventListener("click", ()=> addColor(column));
           column.classList = "cell";
        }
    }
)

//Adding rows
document.getElementById('addRow').addEventListener('click',
    function(){
        // if there are no rows then one cell is added
        // Otherwise a new row is added with the same amount of cells as the top row

        if (row.length === 0) {
            let newRow = grid.insertRow();
            let column = newRow.insertCell();
            column.addEventListener("click", ()=> addColor(column));
            column.classList = "cell";
        } else {
            let newRow = grid.insertRow();// Creation of new row
            for (let i = 0; i < row[0].cells.length; i++) {
                let column = newRow.insertCell(i)// Keep adding cells to the row, to the size of the top row
                column.addEventListener("click", ()=> addColor(column));
                column.classList = "cell";
            }// End of for loop
        }// End of if...else
    }// End of the function
)// End of the event listener

//Removing rows
document.getElementById('removeRow').addEventListener('click',
    function(){
        grid.deleteRow(row[row.length - 1]);// Deleting the row at the last index
    }
)

//Removing columns
document.getElementById('removeColumns').addEventListener('click',
    function(){
        for(let i = 0; i < row.length; i++){
            row[i].deleteCell(row[i].cells.length - 1);
        }// End of the for loop
    }// End of the function
)// End of the event listener

///This adds the colors to each cell, when the cell is clicked
function addColor(column){
    let getColor = document.getElementById("colors");
    let setColor = getColor.options[getColor.selectedIndex].value;
    column.style.backgroundColor = setColor;
}

//Fill all cells
document.getElementById("fillAll").addEventListener('click',
    function(){
        let td = document.querySelectorAll("td");
        //loops through all cells and adds the selected color
        for(let i = 0; i < td.length; i++){
            addColor(td[i]);
        }// End of for loop

    }
)

//Clear all cells
document.getElementById("clearAll").addEventListener('click',
    function(){
        let td = document.querySelectorAll("td");
        //Loops through all cells and turn off the colors
        for(let i = 0; i < td.length; i++){
            td[i].style.background = "none";
        }
    }
)

//Fill all unfilled cells
document.getElementById("fillUnfilled").addEventListener('click',
    function(){
        let td = document.querySelectorAll("td");
       //Loops through all cells that doesn't have a color and adds the selected color
        for(let i = 0; i < td.length; i++){
            
            if(td[i].style.backgroundColor == ""){
                addColor(td[i]);
            }  
        }
    }
)// End of event listener


//When the mouse is clicked then the all the cell that the mouse touches gets colored
//with selected color

grid.addEventListener("mousedown", function(event) {

    if(event.target.classList == "cell"){
        addColor(event.target);
    }
    event.preventDefault();// Allows the dragging to not stop
})

grid.addEventListener("mouseover", function(event) {

    if(event.target.classList == "cell" && event.buttons==1){
        addColor(event.target);
    }
})





