import {React,useState,useEffect,Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [apiResponse,setapi] = useState("");

//corrected
const callapi = async () => {
  fetch("http://localhost:9000/testAPI")
.then(res => res.json())
.then((result_from) => {
      console.log("DATA FROM RESPONSE::",result_from);
      setapi(result_from) 
      return result_from

}).catch(err => console.error("ERROR for call:", err));

}








//Overload
 const callapi_overload = async (route) => {
  fetch(route)
      .then((res) =>res.json())
      .then(resjson => useState({apiResponse:resjson}))
      .catch(err=> console.error("ERROR for call:", err));
}

//setapi(resjson); can update the state as well

useEffect(() => {
 console.log(callapi());
}, []);



  return (
     
<div>

<div className="p-4 space-y-4">
      <button onClick={callapi} className="px-4 py-2 bg-blue-500 text-white rounded">
      Press for Api call </button>
    </div>
  

<div className="response">
<b>
{apiResponse.text}
</b>
</div>



</div>

);
}

export default App;
