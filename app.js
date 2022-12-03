const cardArray = [ 

    // we need twelve cards 
    {
        name: 'fries',
        img: //pull up image images/fried.png,
    }
    {
        name: 'fries',
        img: //pull up image images/fried.png
    }
    {
        name: 'fries',
        img: //pull up image images/fried.png
    }
    {
        name: 'fries',
        img: //pull up image images/fried.png
    }
    {
        name: 'fries',
        img: //pull up image images/fried.png
    }
    {
        name: 'fries',
        img: //pull up image images/fried.png
    }
]


cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')
const cardsChosen = []

function createBoard () {
    for (i = 0; 1 < cardArray.length; i++) {
        const card =  document.createElement('img')
        card.setAttribute('src', 'images/blank.png') 
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        gridDisplay.appendChild(card)
    }
}
createBoard()

function flipCard() {
    const cardId = this.getAttribute('data-id')
    cardsChosen
}