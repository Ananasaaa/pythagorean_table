 function createTable() {
     let table = document.createElement('table');

     for(let i = 1; i <= 10; i++) {
         let tr = document.createElement('tr');
         for(let x = 1; x <= 10; x++) {
             let td = document.createElement('td');
             td.textContent = i * x;
             td.style.padding = '5px';
             td.style.border = '1px solid black';
             tr.appendChild(td);
         }
         table.appendChild(tr);
     }
     return table;
    }

    document.body.appendChild(createTable());





























