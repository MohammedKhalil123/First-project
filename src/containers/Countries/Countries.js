import React, {useState,useEffect} from 'react';
import classes from './Countries.module.css';
import axios from 'axios';
import Spinner from '../../components/UI/Spinner/Spinner'

const Countries = props => {

    const [countries,setCountries] = useState([]);
    const [searchterm,setSearchterm] = useState('');
    const [Loading,setLoading] = useState(true);
    const [Region,setRegion] = useState('');

    useEffect(() => {

        axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital')
        .then(res => {
            let moh = [];
            res.data.map(item => {
                moh.push(
                    {
                        name:  item.name ,
                        capital : item.capital ,
                    }
                );
                setTimeout(() => {
                    setLoading(false);
                }, 200);
                
                return null;
            })
            setCountries(moh);
        })
    }, [])

    useEffect(() => {
        setLoading(true)
        let url = Region === '' ? 'https://restcountries.eu/rest/v2/all?fields=name;capital' : `https://restcountries.eu/rest/v2/region/${Region}?fields=name;capital` ;
        axios.get(url)
        .then(res => {
            let moh = [];
            res.data.map(item => {
                if( item.name.includes(searchterm))
                moh.push(
                    {
                        name:  item.name ,
                        capital : item.capital ,
                    }
                );
                setTimeout(() => {
                    setLoading(false);
                }, 200);
                
                return null;
            })
            setCountries(moh);
        })
    }, [Region,searchterm])
    

/*     useEffect(() => {
        setLoading(true)
        setTimeout(()=> {
            axios.get('https://restcountries.eu/rest/v2/all?fields=name;capital')
        .then(res => {
            let moh = [];
            res.data.map(item => {
                if( item.name.includes(searchterm))
                moh.push(
                    {
                        name:  item.name ,
                        capital : item.capital ,
                    }
                );
               
                setTimeout(() => {
                    setLoading(false);
                }, 200);
                return null;
            })
            setCountries(moh);
        })
        }, 200)
    }, [searchterm]) */

    const getCapitalhandler = (event) => {
        if(event.target.style.background === 'pink') {
            for(let i = 0 ; i < countries.length; i++){
                if(countries[i].capital === event.target.textContent){
                    event.target.textContent = countries[i].name;
                    event.target.style.background = 'palevioletred';
                }
            }
            return;
        }
       for(let i = 0 ; i < countries.length; i++){
           if(countries[i].name === event.target.textContent){
               event.target.textContent = countries[i].capital;
               event.target.style.background = 'pink';
           }
       }
    }

    let i = 0

    let countryNames = (
        <div className={classes.GridContainer}>
            {countries.map(item => {
                i++;
                return <div className={classes.CountryCard} style={{cursor: 'pointer', '--index': i }} onClick={(event) => getCapitalhandler(event)} key={item.name}>{item.name}</div>
            })}
        </div>
    )

    const onSelectHandler = (event) => {
        console.log('heey')
        setRegion(event.target.value)
    }

    const onChangeHandler = (event) => {
        setSearchterm(event.target.value)
    }

    if(Loading){
        countryNames = <Spinner/>
    }

    if(countries.length === 0 && !Loading){
        countryNames = <div className={classes.NoResultFound} >No results found</div>
    }

    return(
        <div className={classes.Countries}>
            <h1 className={classes.Header}>Countries</h1>
            <h3 className={classes.SubHeader}>Click on a country to reveal its capital</h3>
            <div className={classes.Search}>
                 <input className={classes.Searchbar} type='text' value={searchterm} onChange={(event) => onChangeHandler(event)} placeholder='Search for Countries'/>
                 <select className={classes.RegionSelection} defaultValue='Filter By Region'  onChange={(event) => onSelectHandler(event)}>
                    <option value='' >All Regions</option>
                    <option  value='Africa'>Africa</option>
                    <option  value='Americas'>Americas</option>
                    <option  value='Asia'>Asia</option>
                    <option  value='Europe'>Europe</option>
                    <option  value='Oceania'>Oceania</option>
                 </select>
            </div>
            
        
            {countryNames}
        </div>
    )
}

export default Countries;

