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
const exists = storedDonation.find(donateID => donateID === id);
if(!exists){
    storedDonation.push(id);
localStorage.setItem('donation',JSON.stringify(storedDonation))
return true;
}
return false;
}

export{saveDonation,getDonation }