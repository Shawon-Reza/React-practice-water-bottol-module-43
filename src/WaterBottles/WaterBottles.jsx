import { useEffect } from "react";
import { useState } from "react";
import WaterBottle from "../WaterBottle/WaterBottle";
import { addtoLS } from "../LocalStorage/LocalStorage";
import DisplayPB from "../DisplayPurchasedBottols/DisplayPB";

const WaterBottles = () => {
    // Fetch Total Bottols
    const [bottles, setbottles] = useState([])
    useEffect(() => {
        fetch('waterBottles.json')
            .then(res => res.json())
            .then(data => setbottles(data))
    }, [])

    // (PBottles) = update Purchase Bottles List
    const [pBottles, setPbottles] = useState([])

    const handlePurchaseBottleDetails = (bottledetails) => {
        const newdetails = [...pBottles, bottledetails]
        setPbottles(newdetails)
        addtoLS(bottledetails.id)  //Sending Purchase card id to addtoLs funtion for saving in localSorate

    }
    // Fetching purchase data from local Storage
    const [purchedBOttols, setPurchasedBottol] = useState([])
    useEffect(() => {
        const LSdata = localStorage.getItem('cart');
        if (LSdata) {
            const purchasedData = JSON.parse(LSdata);
            // console.log(purchasedData);
            setPurchasedBottol(purchasedData)
        }
    }, [pBottles]);

    // Find Bottols Details through purchase Bottols ID
  
    // console.log(purchaseDetails)

    const removetoLS = (id) => {
       


    }


    return (
        <div>
            <h1>Bottles</h1>
            <p>Purchase bottle:{purchedBOttols.length}</p>
            {/* Display Purchase Botttles on screen */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(12,1fr)',
                gap: '5px',
                marginBottom: '30px'
            }}>
                {
                    purchaseDetails.map(bottol => <DisplayPB
                        key={bottol.id}
                        purchaseBottol={bottol}
                    ></DisplayPB>)
                }
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3,1fr)',
                gap: '5px',

            }}>
                {
                    bottles.map(bottledetails => <WaterBottle
                        bottledetails={bottledetails}
                        key={bottledetails.id}
                        handlePurchaseBottleDetails={handlePurchaseBottleDetails}

                    ></WaterBottle>)
                }
            </div>
        </div>
    );
};

export default WaterBottles;
export { removetoLS }
