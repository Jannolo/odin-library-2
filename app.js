const library = [];

class Book {

    constructor (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    }

    info() {
        return title + " by " + author + ", " + pages + ", " + read
    }

}




function loopBooks () {
    const cardsDiv = document.querySelector("#cards")
    while(cardsDiv.firstChild) {
        cardsDiv.removeChild(cardsDiv.firstChild)
    }
    

    library.forEach(book => {
        
        
        const card = document.createElement('div')
        card.id = 'card'

        const cardHeader = document.createElement('div')
        cardHeader.id = 'card-header'
        cardHeader.textContent = book.title

        const cardBody = document.createElement('div')
        cardBody.id = 'card-body'
        const authorDiv = document.createElement('div')
        authorDiv.id = 'authorDiv'
        authorDiv.textContent = "Author: " + book.author

        const pageDiv = document.createElement('div')
        pageDiv.id = 'pageDiv'
        pageDiv.textContent = "Pages: " + book.pages

        const readDiv = document.createElement('div')
        readDiv.id = 'readDiv'
        readDiv.textContent = "Read? " + book.read

        const removeBtn = document.createElement('button')
        removeBtn.textContent ='X'
        
        removeBtn.addEventListener('click', () => {

            library.splice(library.indexOf(book), 1)
            loopBooks();
        })

        const readBtn = document.createElement('button')
        readBtn.textContent = "Read"
        readBtn.addEventListener('click', () => {
            if (book.read == 'read') {
                book.read = "not yet read"
            } else {
                book.read = "read"
            }

            loopBooks();
        })


        cardBody.append(authorDiv, pageDiv, readDiv, removeBtn, readBtn)

        card.appendChild(cardHeader)
        card.appendChild(cardBody)

        cardsDiv.appendChild(card)
    });
}

const formDialog = document.querySelector('#form-dialog')
const bookForm = document.querySelector('#book-form')
const newBookBtn = document.querySelector('#new-book')
newBookBtn.addEventListener('click', () => {
    formDialog.showModal();
})

const confirmBtn = document.querySelector('#confirmBtn')
confirmBtn.addEventListener("click", (e) => {
    e.preventDefault();
    title = document.querySelector('#title').value
    author= document.querySelector('#author').value
    pages = document.querySelector('#pages').value
    read = document.querySelector('#read').value

    library.push(new Book(title, author, pages, read))
    loopBooks()
    bookForm.reset();

    formDialog.close();
})
const cancelBtn = document.querySelector('#cancelBtn')





const harry = new Book("Harry Potter", "J.K.Rowling", 250, "not read yet")
const lotr = new Book ("LOTR", "Tolkien", 300, "read")

library[0] = harry
library[1] =lotr

loopBooks()