import './App.css';
import './Product.css';
import ProductTab from './ProductTab';
function Product ({title,price}) {
    
    return (
        
        <div className='Product'>
            <h1>{title}</h1> <br/>
            <h3>Price:{price}</h3>
        </div>
    );
}
export default Product;