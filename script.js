let myLibrary = [];

const gridContainer = document.querySelector('.gridContainer');

const newBookButton = document.querySelector('.newBook');

newBookButton.addEventListener("click", newBook);

function newBook() {
    openForm()
    
    // let title = prompt("Please enter the title of your book");
    // let author = prompt("Please enter the author of your book");
    // let text = new book(title, author)
    // addBookToLibrary(text, myLibrary)
    displayBooks(myLibrary)
}

function book(title, author, ...args) {
    this.title = title
    this.author = author
    this.pages = args[0]
    this.read = args[1]
    this.description = args[2]
    this.info = () => {
        return [title, author]
    }
}

function addBookToLibrary(book, myLibrary) {
    myLibrary.push(book);
};



function displayBooks(myLibrary) {

    for (i=0; i < myLibrary.length; i++) {
        const bookDiv = document.createElement('div');
        bookDiv.classList.add('bookCard');
        bookDiv.innerHTML += '<h3>'+ myLibrary[i].title+'</h3>';
        bookDiv.innerHTML += '<p>'+ myLibrary[i].author+'</p>';
        gridContainer.appendChild(bookDiv);
    };
};


function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 


const theHobbit = new book('The Hobbit', 'J.R.R. Tolkien')

for (i = 0; i < 10; i++) {
    let text = new book(' '+i, ' '+i)
    addBookToLibrary(text, myLibrary)
}

addBookToLibrary(theHobbit, myLibrary)
displayBooks(myLibrary)
console.log(myLibrary[0].title)