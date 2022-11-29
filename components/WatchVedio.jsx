import { useEffect, useRef, useState } from 'react'
import styles from '../styles/WatchVedio.module.css'
import { XMarkIcon } from '@heroicons/react/24/solid'

const WatchVedio = () => {
  const [model,showModel]=useState(false);
  const ref = useRef();
  const handleClickOutSide=(event)=>{
  if(ref.current && !ref.current.contains(event.target)){
    showModel((prev)=>!prev)
  }
  }
  useEffect(() => {
    document.addEventListener('click',handleClickOutSide,true)


  return () => {
    document.removeEventListener('click',handleClickOutSide,true)
  }
}, [ref])

  return (
    <div className={styles.container}>
      <div className={styles.play_Box}>
        <div onClick={()=>showModel((pre)=>!pre)} className={styles.play_Icon}>
          <div className={styles.play}></div>
        </div>
        <h1 className={styles.playHeading}>I am delivering beautiful digital products for my clents</h1>
        <p onClick={()=>showModel((pre)=>!pre)} className={styles.watch_Link}>Watch Vedio</p>
      </div>
     {model ? <div ref={ref} className={styles.Vedio}>
     <iframe style={{border:'none'}} width="100%" height="100%" src="https://www.youtube.com/embed/HGSR3FDVkkQ">
   </iframe>
   <div className={styles.close}>
    <XMarkIcon onClick={()=>showModel(p=>!p)} className={styles.closeIcon}/>
   </div>
      </div>: null }
    </div>
  )
}

export default WatchVedio