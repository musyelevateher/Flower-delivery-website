import Herosection from './Herosection'
import Order from './Order'
import Fresh from './Fresh'
import Dry from './Dry'
import Live from './Live'
import Aroma from './Aroma'
import Freshner from './Freshner'
import  './HeroOrder.css'
const HeroOrder = () => {
  return ( 
    <div className="main-flex">
      <div>
        <Herosection />
        <Order />
      </div>
      <div className="border">
        <Fresh />
        <Dry />
        <Live />
        <Aroma />
        <Freshner />
        
      </div>
    </div>
    
   );
}
 
export default HeroOrder;