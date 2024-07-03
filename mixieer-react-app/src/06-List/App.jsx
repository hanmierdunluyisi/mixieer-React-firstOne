// import Header from './Header'
// import Footer from './Footer'
// import Food from './Foob';
// import Card from './Card';
// import Button from "./Button/Button";
// import Student from "./Student";
// import UserGreeting from "./UserGreeting";
import List from "./06-List/List";

function App() {
  const fruits =[{id:1,name: "apple", calories:95},
    {id:2,name: "orange", calories:90},
    {id:3,name: "banana", calories:85},
    {id:4,name: "coconut", calories:45},
    {id:5,name: "pineapple", calories:55}]

  const vegetables =[{id:1,name: "potatoes", calories:35},
    {id:2,name: "celery", calories:10},
    {id:3,name: "carrots", calories:25},
    {id:4,name: "corn", calories:45},
    {id:5,name: "broccoli", calories:55}]

  return (
    <>
      {fruits.length > 0 && <List items={fruits} category= "fruits"></List>}
      {vegetables.length > 0 && <List items={vegetables} category= "vegetables"></List>}
      {/* <List items={fruits} category= "fruits"></List>
      <List items={vegetables} category= "vegetables"></List> */}
    </>
  );
}

export default App
