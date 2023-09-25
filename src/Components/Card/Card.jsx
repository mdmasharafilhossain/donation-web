import { Link } from "react-router-dom";


const Card = ({ card }) => {
    const { id,title,picture,category ,text_button_bg_color,category_bg_color,card_bg_color} = card
    return (
        <div className=""> 
           <Link to={`/cards/${id}`}>
           <div style={{backgroundColor:card_bg_color}}
            className="card card-compact w-80 bg-base-100 shadow-xl ">
                <figure><img className="w-full h-[194px] " src={picture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 style={{backgroundColor:category_bg_color,color:text_button_bg_color}}
                    className="font-medium w-20 text-center px-1 py-1 text-sm rounded"
                    >{category}</h2>
                    <p style={{color:text_button_bg_color}}
                    className="text-xl font-semibold">{title}</p>
                   
                </div>
            </div>
           </Link>
        </div>
    );
};

export default Card;