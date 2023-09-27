import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getDonation } from "../../Utility/localStroge";
import DonationDetails from "../DonationDetails/DonationDetails";


const Donation = () => {
    const donations = useLoaderData();
    const [donate, setdonate] = useState([]);
    const [isShow, setisShow] = useState(false);
    useEffect(() => {
        const storeDonation = getDonation();
        if (donations.length > 0) {
            const donationStored = [];
            for (const id of storeDonation) {
                const donation = donations.find(donation => donation.id === id);
                if (donation) {
                    donationStored.push(donation)
                }
            }
            setdonate(donationStored);
        }

    }, [])
    return (
        <div className="container mx-auto mt-10">

            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-7">
                {
                    isShow ? donate.map(donation => <DonationDetails key={donation.id} donation={donation}></DonationDetails>) :

                        donate.slice(0, 4).map(donation => <DonationDetails key={donation.id} donation={donation}></DonationDetails>)
                }
            </div>
            <div className="text-center mt-14">
                {donate.length > 4 && (
                    <button
                        onClick={() => setisShow(!isShow)}
                        className={`btn ${isShow ? "hidden" : "btn-primary"}`}
                    >
                        {isShow ? "" : "See All"}
                    </button>
                )}
            </div>
        </div>
    );
};

export default Donation;