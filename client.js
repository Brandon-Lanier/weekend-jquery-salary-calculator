$(document).ready(readyNow)

let employees = [];


function readyNow() {
   $('#submitBtn').on('click', addEmployee);
   $('table').on('click', '.deleteBtn', deleteEmp)
    calculateSal();
}

function addEmployee() {
    let el = $('.inputs');
    let salary = $('#salaryIn').val(); // Number($('#salaryIn').val());
    let monthlySal = salary / 12;
    monthlySal = monthlySal.toFixed(2);
    let employee = {
        firstName: $('#firstNameIn').val(),
        lastName: $('#lastNameIn').val(),
        idNumber: Number($('#idIn').val()),
        title: $('#titleIn').val(),
        salary: salary,
        monthlySalary: Number(monthlySal) //Number(monthlySal)
    };
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
    let salary = employee.salary
    let monthlySalary = employee.salary / 12;
    el.append(`<tr><td>${first}</td><td>${last}</td><td>${id}</td><td>${title}</td><td>$${salary}</td><td><button class="deleteBtn">Remove</button></tr>`)
    calculateSal();
}

function deleteEmp(){
    // let id = $(this).attr('#delete');
    // $('#delete').closest('tr').remove(); //Only deletes first row! I want to delete relative row an object
    // let ind = id.split('');
    // employees.splice(ind[1]-1,1);
    // let obj = $(this).closest('tr').employees.data()
    // log
    // let removed = $(this).closest('td').data(obj);
    $(this).closest('tr').remove();
    let emp = $('td:nth-child(3)').text()
    console.log(emp);
    console.log('');
    emp = Number(emp);
    
    for (let person of employees) {
        if (person === employees.idNumber) {
            let removed = employees.indexOf(person);
            employees.splice(removed, 1);
            break;
        }
        return employees;  
    }
   
    // employees.obj.splice(1, 1)
}
console.log(employees);
function calculateSal() {
    let totalSal = 0;
    for (employee of employees) {
        totalSal += employee.monthlySalary;
    }
    let el = $('#totalSal');
    el.empty();
    el.append(totalSal);
    if (totalSal > 20000) {
        $('#totalSal').css('background-color', 'red');
        console.log('totalSal');
        
    }
}

