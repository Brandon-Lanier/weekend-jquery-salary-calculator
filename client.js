$(document).ready(readyNow)

let employees = [];

function readyNow() {
   $('#submitBtn').on('click', addEmployee);
   $('table').on('click', '.deleteBtn', deleteEmp)
    calculateSal();
}

function addEmployee() {
    console.log('in addEmp');
    let el = $('.inputs');
    let employee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: $('#idIn').val(),
        title: $('#titleIn').val(),
        salary: $('#salaryIn').val()
    }
    el.val('');
    employees.push(employee)
    displayEmp(employee);
    return employee;
}

function displayEmp(employee) {
    let el = $('#tableBody')
    let first = employee.firstName;
    let last = employee.lastName;
    let id = employee.idNumber;
    let title = employee.title;
    let salary = employee.salary;
    el.append(`<tr><td>${first}</td><td>${last}</td><td>${id}</td><td>${title}</td><td>${salary}</td><td><button class="deleteBtn">Remove</button></tr>`)
}

function deleteEmp(){
    $(this).closest('tr').remove();
//   
}



