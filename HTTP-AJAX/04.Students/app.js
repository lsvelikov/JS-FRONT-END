function attachEvents() {

  const [firstName, lastName, facultyNumber, grade] = document.getElementsByTagName('input');
  const submitBtnElement = document.querySelector('#submit');
  const tableBodyElement = document.getElementsByTagName('tbody')[0];
  const baseUrl = 'http://localhost:3030/jsonstore/collections/students';


  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {

      for (const student of Object.values(data)) {
        createRow(student);
      }
    });

  submitBtnElement.addEventListener('click', () => {
    const isValidData = firstName.value !== '' && lastName.value !== '' && facultyNumber.value !== '' && grade.value !== '';
    if (isValidData) {
      fetch(baseUrl, {
        method: 'POST',
        headers: {
          'content-type': 'aplication/json'
        },
        body: JSON.stringify({
          firstName: firstName.value,
          lastName: lastName.value,
          facultyNumber: facultyNumber.value,
          grade: grade.value
        })
      })
      .then(response => response.json())
      .then(entry => createRow(entry));
      
      firstName.value = '';
      lastName.value = '';
      facultyNumber.value = '';
      grade.value = '';
    }

  });

  function createRow({firstName, lastName, facultyNumber, grade}) {
    const tdFirstNameEl = document.createElement('td');
        tdFirstNameEl.textContent = firstName;

        const tdLastNameEl = document.createElement('td');
        tdLastNameEl.textContent = lastName;

        const tdFacultyNumberEl = document.createElement('td');
        tdFacultyNumberEl.textContent = facultyNumber;

        const tdGradeEL = document.createElement('td');
        tdGradeEL.textContent = grade;

        const trBodyEl = document.createElement('tr');
        trBodyEl.appendChild(tdFirstNameEl);
        trBodyEl.appendChild(tdLastNameEl);
        trBodyEl.appendChild(tdFacultyNumberEl);
        trBodyEl.appendChild(tdGradeEL);

        tableBodyElement.appendChild(trBodyEl);
  }
}

attachEvents();