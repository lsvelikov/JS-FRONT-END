function attachEvents() {

    const baseUrl = 'http://localhost:3030/jsonstore/phonebook';
    const loadBtnElement = document.querySelector('#btnLoad');
    const phoneBookElement = document.querySelector('#phonebook');
    const createBtnElement = document.querySelector('#btnCreate');

    loadBtnElement.addEventListener('click', getAllContacts);

    async function getAllContacts() {
        const response = await fetch(baseUrl);
        const data = await response.json();

        for (const row of Object.values(data)) {
            const liElement = document.createElement('li');
            liElement.textContent = `${row.person}: ${row.phone}`;
            const deleteBtnElement = document.createElement('button');
            deleteBtnElement.textContent = 'Delete';
            liElement.appendChild(deleteBtnElement);

            phoneBookElement.appendChild(liElement);

            deleteBtnElement.addEventListener('click', () => {

                const id = row._id;
                fetch(`${baseUrl}/${id}`, {
                    method: 'DELETE'
                });

                liElement.remove();

            });

        }
    }

    createBtnElement.addEventListener('click', () => {

        const person = document.querySelector('#person').value;
        const phone = document.querySelector('#phone').value;

        fetch(baseUrl, {
            method: 'POST',
            body: JSON.stringify({
                person,
                phone
            })
        })
            .then((response) => response.json())
            .then(() => {
                getAllContacts();
                person.value = '';
                phone.value = '';
            })
    });
}

attachEvents();