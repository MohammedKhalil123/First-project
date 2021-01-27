import React from 'react'
import { NavLink, withRouter } from 'react-router-dom'
import classes from './Navigation.module.css'

const Navigation = props => {

    /* const navclasses = [ classes.Navlinks] */

    const showNavLinks = () => {
        
        const navlinks = document.querySelector('#Navlinks')
        
        const burger = document.querySelector('#burger')

        burger.classList.toggle(classes.toggle);
        navlinks.classList.toggle(classes.navactive);

    }


    return (
        <nav className={classes.Navigation} >
            <div className={classes.Navlinks} id='Navlinks'>
            <NavLink className={classes.Nav} activeClassName={classes.active} to="/" exact>Home</NavLink>
            <NavLink className={classes.Nav} activeClassName={classes.active} to="/Calculator">Calculator</NavLink>
            <NavLink className={classes.Nav} activeClassName={classes.active} to="/Tic-tac-toe">Tic-Tac-Toe</NavLink>
            <NavLink className={classes.Nav} activeClassName={classes.active} to="/Bin2Dec">Bin2Dec</NavLink>
            <NavLink className={classes.Nav} activeClassName={classes.active} to="/Countries">Countries</NavLink>
            </div>
            <div className={classes.burger} id='burger' onClick={ showNavLinks}>
                <div className={classes.line1}></div>
                <div className={classes.line2}></div>
                <div className={classes.line3}></div>
            </div>
        </nav>
    )

}



export default withRouter(Navigation);