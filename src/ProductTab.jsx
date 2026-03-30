import Product from './Product.jsx';
import './Product.css';


function ProductTab() {
        return (

        <>
        <Product title="Logictech MX Master 35"  description="This product is good" idx={0}/>
        <Product title="Apple Pencil(2nd Gen)"  description="Warranty is for 2 years only" idx={1}/>
        <Product title="Zebronics zeb-Transfer"  description="Made up of Graphite" idx={2}/>
        <Product title="Petronics Toad23 Wireless Mouse"  description="Warranty up to 2 years" idx={3}/>
        
        
        </>
    )
}
export default ProductTab;