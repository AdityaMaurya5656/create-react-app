import Product from './Product.jsx';
import './Product.css';


function ProductTab() {

    return (

        <>
        <Product title="Phone" price={10000}/>
        <Product title="Laptop" price={40000}/>
        <Product title="Pen" price={45/3}/>
        </>
    )
}
export default ProductTab;