import { Link, useLoaderData, useParams } from "react-router-dom";


const CardsDetails = () => {
    const CardsInfo = useLoaderData();
    const { id } = useParams();
    const idINT = parseInt(id);

    const CardInfo = CardsInfo.find(CardMore => CardMore.id == idINT);
    console.log(CardInfo);

    return (
        <div className="container mx-auto mt-20 mb-20">

            <div>
                <img className="w-full h-[700px] rounded-lg" src={CardInfo.picture} alt="" />
                <div style={{ borderRadius: '0px 0px 8px 8px'}}
                className="w-full bg-[#0B0B0B80] h-32 relative -mt-32 opacity-50">

                </div>
                <Link>
                <button 
                style={{backgroundColor:CardInfo.text_button_bg_color}}
                className="btn text-white text-xl font-semibold  absolute -mt-24 border-none ml-14">
                  Donate ${CardInfo.price}
                </button>
                </Link>
                {/* This is for description */}
                <div>
                    <h2 className="text-5xl font-bold mt-14">{CardInfo.title}</h2>
                   <p className="text-lg text-[#0B0B0BB3] text-justify mt-8">{CardInfo.description}</p>
                </div>
            </div>
        </div>
    );
};

export default CardsDetails;