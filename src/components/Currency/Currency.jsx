import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";
import css from "../Currency/Currency.module.css";
import { ReactComponent as CurrencyIcon } from "../../icons/currency-icon.svg";

function Currency() {
    const [isLoading, setIsLoading] = useState(false);
    const [currency, setCurrency] = useState([]);
    const nameCurrency = ["USD", "EUR"];

    useEffect(() => {
        setIsLoading(true);
        async function fetchCurrencyFromAPI() {
            const response = await fetch("https://api.nbp.pl/api/exchangerates/tables/C?format=json");
                const data = await response.json();
                const currencyData = data[0].rates;
                return currencyData; 
        }
        setIsLoading(false); 
    
        fetchCurrencyFromAPI()
        .then((currencyData) => {
            const selectedCurrency = currencyData.filter((currency) => nameCurrency.includes(currency.code));
            setCurrency(selectedCurrency);
        }).catch ((error) => {console.error(error);
        });
    }, []);

    return(
        <div className={css.currency}>
            <ul className={css.currencyListHead}>
                <li className={css.currencyItemHead}>Currency</li>
                <li className={css.currencyItemHead}>Purchase</li>
                <li className={css.currencyItemHead}>Sale</li>
            </ul> 
            {isLoading && <Loader /> }
            {currency.map((item) => (
            <ul key={item.code} className={css.currencyList}>
                <li className={css.currencyItem}>{item.code}</li>
                <li className={css.currencyItem}>{item.bid.toFixed(2)}</li>
                <li className={css.currencyItem}>{item.ask.toFixed(2)}</li>
            </ul>
            ))}
            <CurrencyIcon className={css.icon}/>
        </div>
    )
}

export default Currency;