$(document).ready(readyNow)

let employees = [];
const maxMonthly = 20000;

function readyNow() {
   $('#submitBtn').on('click', addEmployee);
   $('table').on('click', '.deleteBtn', deleteEmp)
    calculateSal();
}

function addEmployee() {
    let el = $('.inputs');
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idIn').val();
    let title = $('#titleIn').val();
    let salary = $('#salaryIn').val(); // Number($('#salaryIn').val());
    let monthlySal = salary / 12;
    monthlySal = monthlySal.toFixed(2); //Getting number to 2 decimals
    $('#inputAlert').empty()
    if (firstName && lastName && idNumber && title && salary) {
    let employee = {
        firstName: firstName,
        lastName: lastName,
        idNumber: idNumber,
        title: title,
        salary: salary,
        monthlySalary: Number(monthlySal) //Changing to number value when storing in object
        }
        el.val('');
        employees.push(employee)
        displayEmp(employee);
        }  else {
            $('#inputAlert').append(`All Fields Required`)
        }
 }

function displayEmp(employee) {
    let el = $('#tableBody')
    el.prev().append(`<tr id="${employee.idNumber}"><td>${employee.firstName}</td><td>${employee.lastName}</td><td>${employee.idNumber}</td><td>${employee.title}</td><td>$${employee.salary}</td><td><button class="deleteBtn">Remove</button></td></tr>`)//
    $(`#${employee.idNumber}`).hide().fadeIn("slow")
    calculateSal();
}

function deleteEmp(){
    let id = $(this).closest('tr').attr('id');
    $(this).closest('tr').fadeOut();
    $(this).remove();
    for (let i = 0; i < employees.length; i++) {
        if (employees[i].idNumber === id) {
        employees.splice(i, 1);
        }  
    }
    calculateSal();
}

function calculateSal() {
    let totalSal = 0;
    for (employee of employees) {
        totalSal += employee.monthlySalary;
    }
    let el = $('#totalSal');
    el.empty();
    $('#alert').empty();
    let numberFormat = new Intl.NumberFormat('en-US');
    totalSal = numberFormat.format(totalSal);
    el.append('$' + totalSal);
    if (totalSal >= maxMonthly) {
        $('#totalSal').css('background-color', '#e07979');
        $('#alert').append(`Monthly Budget Exceeded`)
     } else {
        $('#totalSal').css('background-color', '')
     }
    
}
// function calculateSal() {
//     let totalSal = 0;
//     for (employee of employees) {
//         totalSal += employee.monthlySalary;
//     }
//     let el = $('#totalSal');
//     el.empty();
//     $('#alert').empty();
//     el.append('$' + totalSal)
//     if (totalSal >= maxMonthly) {
//         $('#totalSal').css('background-color', 'red');
//         $('#alert').append(`Monthly Budget Exceeded`)
//      } else {
//         $('#totalSal').css('background-color', '#ffffff')
//      }
// }

 // let id = $(this).attr('#delete');
    // $('#delete').closest('tr').remove(); //Only deletes first row! I want to delete relative row an object
    // let ind = id.split('');    
    // employees.splice(ind[1]-1,1);
    // let obj = $(this).closest('tr').employees.data()
    // log
    // let removed = $(this).closest('td').data(obj);
    
