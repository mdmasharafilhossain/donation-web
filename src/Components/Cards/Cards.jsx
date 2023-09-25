import Card from "../Card/Card";


const Cards = ({cards}) => {
    console.log(cards);
    return (
        <div >
            
            <div className="container mx-auto grid  grid-cols-1 grid-cols-2 grid-cols-4 mt-20 gap-10 ">
                {
                    cards.map(card => <Card key={card.id} card={card}></Card>)
                }
            </div>
        </div>
    );
};

export default Cards;