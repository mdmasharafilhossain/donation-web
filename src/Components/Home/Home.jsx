import { useLoaderData } from "react-router-dom";
import Cards from "../Cards/Cards";
import Banner from "../Header/Banner/Banner";


const Home = () => {
    const cards = useLoaderData();
    // console.log(cards);
    return (
        <div className="">        
           <Banner></Banner>
           <Cards cards={cards}></Cards>
        </div>
    );
};

export default Home;