
const WaterBottle = ({bottledetails,handlePurchaseBottleDetails}) => {
    const { name, img, price } = bottledetails;

    // Log properties to the console
    return (
        <div style={{
            width:'200px',
            border:'2px solid purple',
            marginBottom: "10px",
            borderRadius:'10px'
        }}>
           <h3>Bottle: {name} </h3>
           <img style={{
              width:'100%',
           }} src={img} alt="" />
           <p>Price: {price}</p>
           <button onClick={()=>{handlePurchaseBottleDetails(bottledetails)}}>Purchase</button>
        </div>
    );
};

export default WaterBottle;