$(document).ready(readyNow)

function readyNow() {
   $('#submitBtn').on('click', addEmployee)
    
}

function addEmployee() {
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
}