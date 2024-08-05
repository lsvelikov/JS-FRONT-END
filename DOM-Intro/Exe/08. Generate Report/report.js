function generateReport() {

    let personObj = {};
    let personAllObj = [];
    let columnSetNumbers = [];

    let columnsAllElements = document.querySelectorAll('thead tr th input');
    
    for(let index = 0; index < columnsAllElements.length; index++) {
        let checkboxState = columnsAllElements[index].checked;

        if(checkboxState) {
            columnSetNumbers.push(index);
        }
    }

    let columnTitles = document.querySelectorAll('thead tr')[0].getElementsByTagName('th');
    let rows = document.querySelectorAll('tbody tr').length;

    for(let row = 0; row < rows; row++) {

        columnSetNumbers.forEach((el) => {
            let key = columnTitles[el].textContent.trim().toLowerCase();
            let value = document.querySelectorAll('tbody tr')[row].getElementsByTagName('td')[el].textContent;
            personObj[key] = value;
        });

        personAllObj.push(Object.assign(personObj));
        personObj = {};
    }
    
    document.getElementById('output').innerHTML = JSON.stringify(personAllObj);
}