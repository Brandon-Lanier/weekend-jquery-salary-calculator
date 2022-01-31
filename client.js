$(document).ready(readyNow)

let employees = []; // Storing employee objects in array.
const maxMonthly = 20000; // Max budget for the month.
let numberFormat = new Intl.NumberFormat('en-US'); // To add commas to salaries.

function readyNow() {
    $('#submitBtn').on('click', addEmployee);
    $('table').on('click', '.deleteBtn', deleteEmp)
    calculateSal(); // Run monthly salary calculation on page load.
}

function addEmployee() {
    let el = $('.inputs'); // All input fields
    let firstName = $('#firstNameIn').val();
    let lastName = $('#lastNameIn').val();
    let idNumber = $('#idIn').val();
    let title = $('#titleIn').val();
    let salary = $('#salaryIn').val();
    let monthlySal = salary / 12;
    monthlySal = monthlySal.toFixed(2); //Getting number to 2 decimals
    $('#inputAlert').empty()
    if (firstName && lastName && idNumber && title && salary) { // Requires all fields to be entered.
        let employee = {
            firstName: firstName,
            lastName: lastName,
            idNumber: idNumber,
            title: title,
            salary: salary,
            monthlySalary: Number(monthlySal) //Changing to number value when storing in object
        }
        el.val(''); // Remove values from inputs after submit.
        employees.push(employee) // Store employee in array
        displayEmp(employee);
    } else {
        $('#inputAlert').append(`All Fields Required`) // Alert if not all fields are entered.
    }
}

function displayEmp(emp) {
    let el = $('#tableBody')
    emp.salary = numberFormat.format(emp.salary); // Converting to format with commas
    el.prev().append(`<tr id="${emp.idNumber}"><td>${emp.firstName}</td><td>${emp.lastName}</td><td>${emp.idNumber}</td><td>${emp.title}</td><td>$${emp.salary}</td><td><button class="deleteBtn"><i class="fas fa-user-minus"></i></button></td></tr>`) // .prev() will allow the footer row to stay at the bottom.
    $(`#${emp.idNumber}`).hide().fadeIn("slow"); // Fade in animate the row.
    calculateSal(); // recalculate total monthly salary when new employee is added.
}

function deleteEmp() {
    let id = $(this).closest('tr').attr('id'); // Getting the table row that the remove button lives in and row id to remove from array.   
    if (confirm('Confirm Removing Employee')) { //Confirm deletion of employee.
        $(this).closest('tr').fadeOut(); // Animate the removal of employee from table.
        $(this).parent().parent().remove(); // Removes table row
        for (let i = 0; i < employees.length; i++) {
            if (employees[i].idNumber === id) { // If row ID matches an employee ID 
                employees.splice(i, 1); // Remove the object from array if ID matches
            }
        }
       calculateSal(); //Recalculate total monthly costs if employee is removed.
    }
}

function calculateSal() {
    let totalSal = 0;
    let el = $('#totalSal');
    el.empty();
    $('#alert').empty(); // removed alert each time in case total goes below 20k
    for (let employee of employees) {
        totalSal += employee.monthlySalary;
    }
    if (totalSal >= maxMonthly) {
        $('#totalSal').css('background-color', '#e07979'); // Changes background color to red if over max budget.
        $('#alert').append(`Monthly Budget Exceeded`) // Alert message
    } else {
        $('#totalSal').css('background-color', '') // Removes the background color if monthly total goes below max
    }
    totalSal = numberFormat.format(totalSal); // Formatting number to have commas
    el.append('$' + totalSal);
}