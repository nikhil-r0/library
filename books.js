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