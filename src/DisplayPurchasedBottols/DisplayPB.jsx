import { removetoLS } from "../WaterBottles/WaterBottles";
const DisplayPB = ({purchaseBottol}) => {
const {img,id}=purchaseBottol
    return (
        <div style={{
            border:'2px solid purple',
        
        }}>
            <img style={{
                width:'100px'
            }} src={img} alt="" />
            <button onClick={()=>{removetoLS(id)}}>Remove</button>
        </div>
    );
};

export default DisplayPB;