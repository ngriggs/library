let myLibrary = [];

const gridContainer = document.querySelector('.gridContainer');

const newBookButton = document.querySelector('.newBook');

const submitButton = document.querySelector('.btn');



newBookButton.addEventListener("click", openForm);



function newBook() {
    const form = document.forms[0];
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const { title, author, pages, read } = this.elements;
        let text = new book(title.value, author.value, pages.value, read.value);
        addBookToLibrary(text, myLibrary)
        displayBooks(myLibrary)
      });

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

function emptyDisplay() {
    var node = document.querySelector('.gridContainer');
    node.querySelectorAll('*').forEach(n => n.remove());
}

function displayBooks(myLibrary) {
    emptyDisplay()
    for (i=0; i < myLibrary.length; i++) {
        const bookDiv = document.createElement('div');
        const removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'removeButton')
        removeButton.setAttribute('id', i);
        removeButton.innerHTML = 'Remove'
        bookDiv.classList.add('bookCard');
        bookDiv.innerHTML += '<h3>'+ myLibrary[i].title+'</h3>';
        bookDiv.innerHTML += '<p>'+ myLibrary[i].author+'</p>';
        bookDiv.appendChild(removeButton)
        bookDiv.setAttribute('id', i)
        gridContainer.appendChild(bookDiv);
    };

};

function removeBookFromLibrary(index) {
    myLibrary.splice(index, 1)
    console.log(myLibrary)
    displayBooks(myLibrary)
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
    newBook()
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
} 


const removeBtn = document.getElementsByClassName('removeButton')
removeBtn.addEventListener('click', removeBookFromLibrary(0))

