class Book {
    gridContainer = document.querySelector('.gridContainer');

    constructor(title, author, ...args) {
        this.title = title
        this.author = author
        this.pages = args[0]
        this.read = args[1]
        this.description = args[2]
        this.myLibrary = []
    }

    addBookToLibrary(book, myLibrary) {
        this.myLibrary.push(book);
        console.log(myLibrary)
    };

    newBook() {
        const $this = this;
        const form = document.forms[0];
        form.addEventListener("submit", function(event) {
            event.preventDefault();
            const { title, author, pages, read } = this.elements;
            let text = new Book(title.value, author.value, pages.value, read.value);
            $this.addBookToLibrary(text, $this.myLibrary)
            $this.displayBooks($this.myLibrary)
        });
    }
    emptyDisplay() {
        var node = document.querySelector('.gridContainer');
        node.querySelectorAll('*').forEach(n => n.remove());
    }
    displayBooks(myLibrary) {
        this.emptyDisplay()
        const gridContainer = document.querySelector('.gridContainer');
        for (let i=0; i < myLibrary.length; i++) {
            const bookDiv = document.createElement('div');
            const removeButton = document.createElement('button');
            removeButton.setAttribute('class', 'removeButton')
            removeButton.setAttribute('id', i);
            removeButton.innerHTML = 'Remove'
            removeButton.addEventListener('click', this.removeBookFromLibrary)
            bookDiv.classList.add('bookCard');
            bookDiv.innerHTML += '<h3>'+ myLibrary[i].title+'</h3>';
            bookDiv.innerHTML += '<p>'+ myLibrary[i].author+'</p>';
            bookDiv.appendChild(removeButton)
            bookDiv.setAttribute('id', i)
            gridContainer.appendChild(bookDiv);
        };
    
    };
    createForm() {
        let formPopup = document.querySelector('.form-popup')
        let formObj = document.createElement('form')
        formObj.setAttribute('class', 'form-container')
        formObj.innerHTML = '<h1>Add a Book</h1>'
        formPopup.appendChild(formObj)
    
        let titleLabel = document.createElement('label')
        let titleInput = document.createElement('input')
        titleLabel.innerHTML = '<b>Title</b>'
        titleInput.setAttribute('type', 'text')
        titleInput.setAttribute('placeholder', 'Book Title')
        titleInput.setAttribute('name', 'title')
        titleInput.required = true
    
        let authorLabel = document.createElement('label')
        let authorInput = document.createElement('input')
        authorLabel.innerHTML = '<b>Author</b>'
        authorInput.setAttribute('type', 'text')
        authorInput.setAttribute('placeholder', 'Author\'s name')
        authorInput.setAttribute('name', 'author')
        authorInput.required = true
    
        let pagesLabel = document.createElement('label')
        let pagesInput = document.createElement('input')
        pagesLabel.innerHTML = '<b>Number of pages</b>'
        pagesInput.setAttribute('type', 'number')
        pagesInput.setAttribute('placeholder', 'Pages')
        pagesInput.setAttribute('name', 'pages')
    
        let readLabel = document.createElement('label')
        let readInputYes = document.createElement('input')
        let readLabelYes = document.createElement('label')
        let readInputNo = document.createElement('input')
        let readLabelNo = document.createElement('label')
    
        readLabel.innerHTML = '<b>Have you read this book?</b>'
        readInputYes.setAttribute('type', 'radio')
        readInputYes.setAttribute('name', 'read')
        readInputYes.checked = true
        readLabelYes.innerHTML = 'Yes'
        readInputNo.setAttribute('type', 'radio')
        readInputNo.setAttribute('name', 'read')
        readLabelNo.innerHTML = 'No'
        
        let submitButton = document.createElement('button')
        let cancelButton = document.createElement('button')
    
        submitButton.setAttribute('class', 'btn')
        cancelButton.setAttribute('class', 'btn cancel')
        submitButton.innerHTML = 'Submit'
        cancelButton.innerHTML = 'Close'
        cancelButton.addEventListener('click', this.removeForm)
    
        formObj.appendChild(titleLabel)
        formObj.appendChild(titleInput)
        formObj.appendChild(authorLabel)
        formObj.appendChild(authorInput)
        formObj.appendChild(pagesLabel)
        formObj.appendChild(pagesInput)
        formObj.appendChild(readLabel)
        formObj.appendChild(readInputYes)
        formObj.appendChild(readLabelYes)
        formObj.appendChild(readInputNo)
        formObj.appendChild(readLabelNo)
        formObj.appendChild(submitButton)
        formObj.appendChild(cancelButton)
        this.newBook()
    
    }
    removeForm() {
        var node = document.querySelector('.form-popup');
        node.querySelectorAll('*').forEach(n => n.remove());
    }
    removeBookFromLibrary() {
        let index = this.getAttribute('id')
        console.log(index)
        console.log(this.myLibrary)
        console.log(myLibrary)
        myLibrary.splice(parseInt(index), 1)
        $this.displayBooks($this.myLibrary)
    }
    
    
}
let book1 = new Book('The Hobbit', 'JRR Tolkien', 55)
newBookButton = document.querySelector('.newBook');
newBookButton.addEventListener("click", book1.createForm());