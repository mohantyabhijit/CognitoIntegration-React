import React, {useState, useContext} from 'react'
import { AccountContext} from './Account';

export const RandomNumber = () => {

    const {getSession} = useContext(AccountContext)

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);


    const fetchNumber = async() => {
        const url = 'https://s6v08dmzwf.execute-api.ap-southeast-1.amazonaws.com/dev/random-number?max=10&min=20';

        const response = await fetch(url);
        const data = await response.json();
        setNumber(data);
    }

    const fetchNumber2 = async() => {
        getSession().then(async ({headers}) => {
            const url = 'https://s6v08dmzwf.execute-api.ap-southeast-1.amazonaws.com/dev/random-number?max=10&min=20';
        
            console.log(headers);
        const response = await fetch(url, {headers});
        const data = await response.json();
        setNumber2(data);
        })
    }

    const PrintNum = (token) =>  {
        console.log(token);
    }
    return (
        <div>
            <br></br>
            Random Number : {number}   
            <button onClick= {fetchNumber}>Fetch New Number</button>
            <br></br>
            Authenticated Random Number : {number2}
            <button onClick= {fetchNumber2}>Fetch New Number</button>
        </div>
    )
}
