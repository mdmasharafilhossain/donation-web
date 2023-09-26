import { Link } from "react-router-dom";


const DonationDetails = ({donation}) => {
    const {id,picture,category,category_bg_color,text_button_bg_color,title,price,card_bg_color} = donation;
    return (
        <div >
           {/*This is card div  */}
           <div style={{backgroundColor:card_bg_color}}
           className="flex border rounded-lg gap-6">
            <img className="w-[220px] h-[200px]" src={picture} alt="" />
            {/* Text div  */}
            <div>
            <h2 style={{backgroundColor:category_bg_color,color:text_button_bg_color}}
                    className="font-medium w-20 text-center px-1 py-1 text-sm rounded mt-6"
                    >{category}</h2>
                    <p
                    className="text-2xl font-semibold mt-1">{title}</p>
                    <h4 style={{color:text_button_bg_color}}
                    className="text-base font-semibold mt-2"
                    >${price}</h4>

                    <Link to="">
                    <button 
                    style={{backgroundColor:text_button_bg_color}}
                    className="btn text-white mt-3">View Details</button>
                    
                    </Link>

            </div>
           </div>
        </div>
    );
};

export default DonationDetails;