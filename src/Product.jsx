import './App.css';
import './Product.css';
import ProductTab from './ProductTab';
function Product ({title,price,description,}) {
    let isDiscount = price>3000 ? "5%": "";
    let styles={backgroundColor: price>30000? "yellow":""};
    let h3={backgroundColor:"teal"}
    let p={color:"brown"}
    return (
        
        <div className='Product' style={styles}>
            <h2>{title}</h2> <br/>
            < h3 style={h3}>Price:{price} </h3>
            <p style={p}>description:{description}</p>
            <h4>{isDiscount}</h4>
        </div>
    );
}
export default Product;