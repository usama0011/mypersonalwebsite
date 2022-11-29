import styles from '../styles/NavBar.module.css'
import { BeakerIcon, BriefcaseIcon,Bars3Icon } from '@heroicons/react/24/solid'
import { useEffect, useState } from 'react'
import Link from 'next/link';
const Header = () => {
  const [Shadow,setBoxShadow]=useState(false);
  const [currentScroll,handSetScroll]=useState(0)
  const handleScrollFunction=(e)=>{
    handSetScroll(e.target.documentElement.scrollTop)
  }
  useEffect(()=>{
   window.addEventListener('scroll',handleScrollFunction)
   
   function setShaowNav(){
    if(currentScroll >= 50){
      setBoxShadow(true)
    }
    else{
      setBoxShadow(false)
    }
   }
   setShaowNav()
   return ()=> window.removeEventListener('scroll',handleScrollFunction)
  },[currentScroll])

  return (
    <div id='top'   style={Shadow ? {boxShadow:'0 3px 3px -3px rgba(0,0,0,.2)'}:{boxShadow:'none'}} className={styles.container}>
      <nav className={styles.navBar}>
        <div className={styles.brand}><Link href="/">𝓤𝓼𝓪𝓶𝓪 𝓐𝓱𝓶𝓪𝓭 </Link> </div>
        <div className={styles.navigation}>
          <ul>
          <li className={styles.active}><a href="#banner">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#certificates">Certificates</a></li>
          <li><a href="#">Contact</a></li>
          <li><a href="#">Download CV</a></li>
        </ul>
        </div>
          <Bars3Icon className={styles.menuIcon}/>
      </nav>
    </div>
  )
}

export default Header