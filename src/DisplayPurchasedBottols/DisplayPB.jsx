

const DisplayPB = ({purchaseBottol}) => {
const {img}=purchaseBottol

    return (
        <div style={{
            border:'2px solid purple',
        
        }}>
            <img style={{
                width:'100px'
            }} src={img} alt="" />
            <button>Remove</button>
        </div>
    );
};

export default DisplayPB;