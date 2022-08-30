import React from 'react';
import './App.css';
// import { PersonCard } from './components/personCard';
import { PersonCardFunc } from './components/personCardFunc';

function App() {
  
  
  
  return (
    <div className="App">
      {/* person cards build with functional components */}
      <PersonCardFunc firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCardFunc firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCardFunc firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCardFunc firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/>

      {/* person cards built with class component */}
      {/* <PersonCard firstName={"Jane"} lastName={"Doe"} age={45} hairColor={"Black"}/>
      <PersonCard firstName={"John"} lastName={"Smith"} age={88} hairColor={"Brown"}/>
      <PersonCard firstName={"Millard"} lastName={"Fillmore"} age={50} hairColor={"Brown"}/>
      <PersonCard firstName={"Maria"} lastName={"Smith"} age={62} hairColor={"Brown"}/> */}
    </div>
  );
}


export default App;
