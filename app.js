document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [ 
     
        {
            name: 'luigi',
            img: 'images/luigi.png'

        },
        {
            name: 'mario',
            img: 'images/mario.png'

        },
        {
            name: 'peach',
            img: 'images/peach.png'

        },
        {
            name: 'spy-guy',
            img: 'images/spy-guy.png'

        },
        {
            name: 'toad',
            img: 'images/toad.png',

        },
        {
            name: 'yoshi',
            img: 'images/yoshi.png'

        },
        {
            name: 'luigi',
            img: 'images/luigi.png'
        },
        {
            name: 'mario',
            img: 'images/mario.png'
        },
        {
            name: 'peach',
            img: 'images/peach.png'
        },
        {
            name: 'spy-guy',
            img: 'images/spy-guy.png'
        },
        {
            name: 'toad',
            img: 'images/toad.png'
        },
        {
            name: 'yoshi',
            img: 'images/yoshi.png'
        }
    ]
        cardArray.sort(() => 0.5 - Math.random())
        const grid = document.querySelector('.grid')
        const resultDisplay = document.querySelector('#result')
        let cardsChosen = []
        let cardsChosenId = []
        const cardsWon = []

        //creating the board
    function createBoard () {
        for (let i = 0; i < cardArray.length; i++) {
            const card =  document.createElement('img')
            card.setAttribute('src', 'images/main-card.png') 
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }
    
    function checkMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        
        if(optionOneId == optionTwoId) {
          cards[optionOneId].setAttribute('src', 'images/main-card.png')
          cards[optionTwoId].setAttribute('src', 'images/main-card.png')
          alert('You have clicked the same image!')
       }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('DING, DING, DING, You Have Chosen Wisely!')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/main-card.png')
            cards[optionTwoId].setAttribute('src', 'images/main-card.png')
            alert('ERRRR....WRONG!!!')
        }

        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if ( cardsWon.length === cardArray.length/2) {
            resultDisplay.innerHTML = 'Congratulations you have found them all!'
        }
        
    }
    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if(cardsChosen.length === 2) {
            setTimeout(checkMatch, 500)
        }
    }
    createBoard()
    })