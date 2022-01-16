import React, { Children, createContext , useContext,useState} from 'react'


const Crypto=createContext();

const CryptoContext = ({children}) => {

    const [currency, setcurrency] = useState("INR")
    const [symbol, setsymbol] = useState("₹")

    useEffect(() => {
       
        if(currency === "INR") setsymbol("₹");
        else if(currency === "USD" )setsymbol ("$")

    }, [currency]);

    return  <Crypto.Provider value={(currency,symbol,setcurrency)}>{children}</Crypto.Provider>
    
}   


export default CryptoContext
//Note we can't export two things at default
export const CryptoState = () => {
    return useContect(Crypto);
}
