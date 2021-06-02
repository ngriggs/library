let myLibrary = [];

const gridContainer = document.querySelector('.gridContainer');

const newBookButton = document.querySelector('.newBook');

newBookButton.addEventListener("click", createForm);

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
        removeButton.addEventListener('click', removeBookFromLibrary)
        bookDiv.classList.add('bookCard');
        bookDiv.innerHTML += '<h3>'+ myLibrary[i].title+'</h3>';
        bookDiv.innerHTML += '<p>'+ myLibrary[i].author+'</p>';
        bookDiv.appendChild(removeButton)
        bookDiv.setAttribute('id', i)
        gridContainer.appendChild(bookDiv);
    };

};

function createForm() {
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
    cancelButton.addEventListener('click', removeForm)

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
    newBook()

}


function removeForm() {
    var node = document.querySelector('.form-popup');
    node.querySelectorAll('*').forEach(n => n.remove());
}


function removeBookFromLibrary() {
    let index = this.getAttribute('id')
    myLibrary.splice(parseInt(index), 1)
    displayBooks(myLibrary)
}

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// let firebaseConfig = {
// apiKey: "",
// authDomain: "",
// projectId: "",
// storageBucket: "",
// messagingSenderId: "",
// appId: "",
// measurementId: "",
// databaseURL: ''
// };

// firebase.initializeApp(firebaseConfig);
// firebase.analytics();
// let database = firebase.database();


// function saveDataToCloudStorage() {
//     let user = firebase.auth().currentUser;
//     if (user) {
//       let dataJson = JSON.stringify({ myLibrary, uniqueId });
//       database.ref('users/' + user.uid).set(dataJson);
//     }
//   }
  
//   function loadDataFromCloudStorage(isRewrite) {
//     let user = firebase.auth().currentUser;
//     if (user) {
//       database.ref('users/' + user.uid).once('value', (snap) => {
//         changeLibraryToDB(snap.val(), isRewrite);
//       });
//     }
//   }