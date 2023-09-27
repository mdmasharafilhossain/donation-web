import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts"
import { useLoaderData } from "react-router-dom";
import { getDonation } from "../../Utility/localStroge";
const Statistics = () => {
    const [length,setlength] =useState([]);
    

    const data = useLoaderData();
    console.log(data);
    useEffect(()=>{
        const mydonation = [];
       
     const datalength = getDonation();
      mydonation.push(datalength.length);
      const totaldonationOption = 12;
      mydonation.push(totaldonationOption);
      setlength(mydonation);
    },[])
    return (
        <div className="container mx-auto mt-20 h-auto ">
            
            <React.Fragment>
            
            <Chart 
            type="pie"
            width="100%"
            height={550}
            series={length}
            options={{
                colors:["#00C49F","#FF444A"],
                labels :["Your Donation","Total Donation"]
            }}
            >





            </Chart>






            </React.Fragment>
        </div>
    );
};

export default Statistics;