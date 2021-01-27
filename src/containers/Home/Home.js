import React  from 'react';
import classes from './Home.module.css'
import ReactLogo from '../../assets/images/React-icon.png'
import CSSLogo from '../../assets/images/css-icon.png'
import HTMLLogo from '../../assets/images/HTML-icon.png'
import JSLogo from '../../assets/images/JS-icon.png'
import GithubLogo from '../../assets/images/Github-icon.png'
import LinkedinLogo from '../../assets/images/Linkedin-icon.png'


const Home = props => {




    return (
        <div className={classes.Container}>
            <div className={classes.Left}>
                <h2 className={classes.Header}>Made With</h2>
                <div className={classes.Languages}>
                    <div className={classes.LogoContainer}>
                        <img src={ReactLogo} className={classes.Reactlogo} alt='Logo' />
                        <p className={classes.LanguageTitles}>React JS</p>
                    </div>
                    <div className={classes.LogoContainer}>
                    <img src={JSLogo} className={classes.JSlogo} alt='Logo' />
                    <p className={classes.LanguageTitles}>JavaScript</p>
                    </div>
                    <div className={classes.LogoContainer}>
                    <img src={CSSLogo} className={classes.CSSlogo} alt='Logo' />
                    <p className={classes.LanguageTitles}>CSS</p>
                    </div>
                    <div className={classes.LogoContainer}>
                    <img src={HTMLLogo} className={classes.HTMLlogo} alt='Logo' />
                    <p className={classes.LanguageTitles}>HTML</p>
                    </div>
                </div>
            </div>
            <div className={classes.Links}>
                <div className={classes.LinksContainers}>
                    <img src={GithubLogo} className={classes.GitLogo} alt='Logo' />
                    <a href='https://github.com/MohammedKhalil123' className={classes.Github}>github.com/MohammedKhalil123</a>
                </div>
                <div className={classes.LinksContainers}>
                    <img src={LinkedinLogo} className={classes.LinkedinLogo}  alt='Logo'/>
                    <a href='https://www.linkedin.com/in/mohammed-abu-arida/' className={classes.Linkedin}>linkedin.com/in/mohammed-abu-arida</a>
                </div>
            </div>
            
        </div>
    )
}

export default Home ;