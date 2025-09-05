
console.log("Script loaded!");


async function employeeListInjector(){
  const main = document.querySelector('main');
  const employeeSection = document.createElement('section');
  employeeSection.id = ('employeeSection');
  let departments = {};


  employees.forEach(employee => {
    if (!(employee.department in departments)){
      const departmentEmployeeDiv = document.createElement('div');
      departmentEmployeeDiv.classList.add('departmentGroup')
      const departmentElement = document.createElement('h4');
      const employeeUl = document.createElement('ul');
      employeeUl.id = employee.department.replace(/\s+/g, '-');
      departments[employee.department] = employeeUl;
      departmentElement.textContent =  `department:${employee.department}`;
     
      departmentEmployeeDiv.appendChild(departmentElement);
      departmentEmployeeDiv.appendChild(employeeUl);
      employeeSection.appendChild(departmentEmployeeDiv);
    };

    const employeeElement = document.createElement('li');
    employeeElement.classList.add("employee");
    employeeElement.textContent = `employee:${employee.name} `;
    departments[employee.department].appendChild(employeeElement);
  
  }  
  )
  main.appendChild(employeeSection);
  return employeeSection;
};

async function currentYearCopyright(){
  console.log('changing footer')
  const footer = document.querySelector('footer');
  footer.innerHTML='';
  let currentYear = new Date().getFullYear();
  footer.textContent = `Copyright Pixel River Financial ${currentYear}`;
  return footer;
};
employeeListInjector();
currentYearCopyright();



