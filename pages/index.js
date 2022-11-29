import { ArrowUpIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import HomePage from './HomePage'


const Home = () => {
  const [show,setShow]=useState(false);
  const [currentScroll,handSetScroll]=useState(0)
  function handleScrollFunction(e){
   handSetScroll(e.target.documentElement.scrollTop)
  }
  useEffect(()=>{
  window.addEventListener('scroll',handleScrollFunction)
  
  function setShaowNav(){
    if(currentScroll >= 500){
      setShow(true)
    }
    else{
      setShow(false)
    }
   }
   setShaowNav()
  return ()=>window.addEventListener('scroll',handleScrollFunction)
  },[currentScroll])
  return (
    <div className={styles.container}>
      <HomePage/>
      <div id="top"></div>
       {show && 
      <Link href="/">
       <div className={styles.arrow_container}>
        <ArrowUpIcon className={styles.arrowUp}/>
       </div>
 </Link>
 }
       </div>
  )
}

export default Home;