class Book {
    constructor(name, info, pages, isRead) {
        this.name = name;
        this.information = info;
        this.pages = pages;
        this.isRead = isRead || false;
    }
}

function createBookElement(book){
        const element = document.createElement("div");
        element.className = "book-container";

        const nameContainer = document.createElement("h3");
        nameContainer.textContent = book.name;
        nameContainer.className = "name";

        const infoContainer = document.createElement("p");
        infoContainer.textContent = book.information;
        infoContainer.className = "info";

        const pageContainer = document.createElement("p");
        pageContainer.textContent = `No. of Pages: ${book.pages}`;
        pageContainer.className = "page";

        const readContainer = document.createElement("p");
        readContainer.textContent = `Read: ${book.isRead ? "Yes" : "No"}`;
        readContainer.className = "read";

        element.appendChild(nameContainer);
        element.appendChild(infoContainer);
        element.appendChild(pageContainer);
        element.appendChild(readContainer);

        element.id = book.name;
        return element;
}

const submitButton = document.getElementById("submit-button");
const addBookDialog = document.getElementById("add-book-dialog");
const addBookButton = document.getElementById("add-book");
const closeDialogButton = document.getElementById("close-dialog-button");
const addBookForm = document.getElementById("add-book-form");

closeDialogButton.onclick = (event) => {
    event.preventDefault();
    addBookDialog.close();
}
addBookButton.onclick = () => {
    addBookDialog.showModal();
};

let booksList = [];
theHobbit = new Book("The Hobbit", "The Hobbit by J.R.R. Tolkien", 295, false);
booksList.push(theHobbit);
function renderLibrary() {
    const booksContainer = document.getElementById("library-container");
    booksContainer.innerHTML = "";
    for(let book of booksList){
        booksContainer.appendChild(createBookElement(book));
    }
};
renderLibrary();
submitButton.addEventListener("click", handleSubmit, false);

function handleSubmit(event){
    event.preventDefault();
    const formData = new FormData(addBookForm);
    booksList.push(new Book(
        formData.get('name'),
        formData.get('info'),
        formData.get('page'),
        formData.get('isRead')
    ));
    addBookForm.reset();
    renderLibrary();
}