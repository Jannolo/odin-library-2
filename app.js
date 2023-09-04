const library = [];

function Book (title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return title + " by " + author + ", " + pages + ", " + read
    }
    
}



function loopBooks () {
    const cardsDiv = document.querySelector("#cards")
    

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

        cardBody.append(authorDiv, pageDiv, readDiv)

        card.appendChild(cardHeader)
        card.appendChild(cardBody)

        cardsDiv.appendChild(card)
    });
}




const harry = new Book("Harry Potter", "J.K.Rowling", 250, "not read yet")
const lotr = new Book ("LOTR", "Tolkien", 300, "read")

library[0] = harry
library[1] =lotr

loopBooks()