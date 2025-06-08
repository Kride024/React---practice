import {useEffect,useState} from "react";
// currency="USD";
function useCurrencyInfo(currency){
const [data,setData]=useState({});
useEffect(()=>{
    fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
    .then((res)=>res.json())
    .then((res)=>setData(res[currency] || {}));
    console.log(data);
    
},[currency]);
//return setData,[data,setData] all can'nt return in this state.
return data ;// data is object
}

export default useCurrencyInfo;//we are returning function directly and from there we can take excess to currency from data.


