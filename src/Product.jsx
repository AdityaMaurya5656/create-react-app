import './App.css';
import './Product.css';
import ProductTab from './ProductTab';

function Product ({title}) {


    
    return (
        
        <div className='Product' >
            <h4>{title}</h4>
            <p>description</p>
            
        </div>
    );
}
export default Product;