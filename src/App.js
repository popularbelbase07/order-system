import React from 'react';
import { Navbar } from './Navbar/Navbar';
import {Banner} from './Banner/banner';
import { Menu } from './Menu/menu';
import {GlobalStyle} from './Styles/GlobalStyle';
import { FoodDialog } from './FoodDialog/foodDialog';
import { Order } from './Order/orders';
import { useOpenFood } from './Hooks/useOpenFood';
import {useOrders} from './Hooks/useOrders';
import { useTitle } from './Hooks/useTitle';
import { useAuthentication } from './Hooks/useAuthentication';
import { OrderDialog } from './Order/orderDialog';
import { useOrderDialog } from './Hooks/useOrderDialog';


/*
// Sample code for creating DatabaseObject database in firebase
const database = window.firebase.database();
const refTest = database.ref('DatabaseObject').push();
refTest.set({
  hello: 'world'
});
*/

function App() {
  //{...} //spread the property of this object in as a prop
  // own custom hook 
  // OpenFood = variable && setOpenFood = method
  //const [openFood, setOpenFood] = useState();
  const openFood = useOpenFood();
  const orders = useOrders();
  const auth = useAuthentication();
  const orderDialog = useOrderDialog();

  useTitle({...openFood, ...orders});

  return (
    <>
      <GlobalStyle/>
      <OrderDialog {...orderDialog} {...orders}/>
      <FoodDialog {...openFood} {...orders}/> 
      <Navbar {...auth}/>
      <Order {...orders} {...openFood} {...orderDialog} {...auth} />
      <Banner />
      <Menu {...openFood}/>
     
    </>
  );
}

export default App;
