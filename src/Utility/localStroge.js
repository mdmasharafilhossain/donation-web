const getDonation = () =>{
    const getStoredDonation = localStorage.getItem('donation');
    if(getStoredDonation){
        return JSON.parse(getStoredDonation);
    }
    return [];
}



const saveDonation = id =>{
// console.log(id);
const storedDonation = getDonation();
storedDonation.push(id);
localStorage.setItem('donation',JSON.stringify(storedDonation))
}

export{saveDonation,getDonation }