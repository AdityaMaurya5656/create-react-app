import Product from './Product.jsx';
import './Product.css';


function ProductTab() {
    let options = [<li>hii-tech</li>, <li>"durable"</li>, <li>"fast"</li>];
        return (

        <>
        <Product title="Iphone" price={10000} description="This product is good" features={options}/>
        <Product title="Laptop" price={40000} description="Warranty is for 2 years only"/>
        <Product title="Pen" price={45/3} description="Made up of Graphite"/>
        <Product title="Laptop charger" price={4000} description="Warranty up to 2 years"/>
        <Product/>
        
        </>
    )
}
export default ProductTab;