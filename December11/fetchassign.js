function getAuthors() {
    const url = "https://jsonplaceholder.typicode.com/users";
    const ul = document.getElementById('listauthors');

    fetch(url)
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        let authors = data;

        authors.map((author) => {
            let li = document.createElement("li");
            let name = document.createElement("h2");
            let email = document.createElement('p');

            name.innerHTML = author.name;
            email.innerHTML = author.email;

            li.appendChild(name);
            li.appendChild(email);
            ul.appendChild(li);
        })
    })
    .catch((error) => {
        console.log(error);
    });
}