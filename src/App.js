import {useEffect, useState} from "react";
import Card from "./Card";
import uuid from 'react-uuid';
import {Wrapper, Header, Cards, Footer, Instructions, LeftSideContent, Button} from "./styles";
import './index.css'

function App() {
    const [cards, setCards] = useState(null);

    useEffect(() => {
        const cards = JSON.parse(localStorage.getItem('cards'));
        setCards(cards ? cards : []);

    }, []);

    useEffect(() => {
        if (cards !== null) {
            localStorage.setItem('cards', JSON.stringify(cards));
        }
    }, [cards]);

    const handleAddCard = () => {
        setCards([...cards, {
            id: uuid(),
            number: Math.floor(Math.random() * 1001),
        }])
    }

    const handleSortCards = () => {
        const cardsClone = [...cards];
        const sortedCards = cardsClone.sort((a, b) => a.number - b.number);
        setCards(sortedCards);
    }

    const handleDeleteCard = id => {
        const filteredCards = cards.filter(card => card.id !== id);
        setCards(filteredCards);
    }

    return (
        <Wrapper>
            <LeftSideContent>
                <Header>
                    <Button onClick={handleAddCard}>
                        Add Card
                    </Button>
                    <Button onClick={handleSortCards}>
                        Sort Cards
                    </Button>
                </Header>
                <Cards>
                    {cards?.map(card => <Card key={card.id} card={card} onDelete={handleDeleteCard} />)}
                </Cards>
                <Footer>footer</Footer>
            </LeftSideContent>
            <Instructions>
                Press the "add card" button to add the new Card.
                Use the "sort cards" button to sort the Cards by the increase.
                Press an x icon on the top right to delete them.
            </Instructions>
        </Wrapper>
    );
}

export default App;
