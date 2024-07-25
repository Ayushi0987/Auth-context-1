import React, { useEffect, useState } from 'react'
const cryptoApi = 'https://api.frontendexpert.io/api/fe/cryptocurrencies';

export default function App() {
    const [coins, setCoins] = useState([]);
    const [page, setPages] = useState(0);
    const [hasNext, setHasNext] = useState(false);

    const getApiData = async function () {
        try {
            const url = new URL(cryptoApi);
            url.searchParams.set('page', page);
            // const response = await fetch(`${cryptoApi}?page=${page}`);
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Something went Wrong")
            }
            const cryptodata = await response.json();
            console.log(cryptodata)
            setCoins(cryptodata.coins);
            setHasNext(cryptodata.hasNext);
        } catch (err) {
            console.error(err)
        }
    }
    useEffect(()=> {
        getApiData();
    }, [page])

  return (
    <>
        <table>
            <tbody>

                <tr>
                    <th>Coin</th>
                    <th>Price</th>
                    <th>Market Cap</th>
                </tr>
                {
                    coins.map((coin)=>{
                        return (
                            <tr>
                                <td>{coin.name}</td>
                                <td>{coin.price}</td>
                                <td>{coin.marketCap}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table> 
        <div>
           <button disabled={page===0} onClick={()=> setPages(page-1)}>Previous</button>
           <button onClick={()=> setPages(page+1)} disabled={hasNext ? false : true}>Next</button>
        </div>
        
    </>
  )
}
