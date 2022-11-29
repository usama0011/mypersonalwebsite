import Image from 'next/image'
import styles from '../styles/Companies.module.css'
import Laraval from '../assets/Images/6.png';
import angular from '../assets/Images/angular.png';
import colorlib from '../assets/Images/colorlib.png';
import envato from '../assets/Images/envato.png';
import google from '../assets/Images/google.png';
import magento from '../assets/Images/Magento.png';
import pingdom from '../assets/Images/pingdom.png';
import woocommerce from '../assets/Images/woocommerce.png';

const Companies = () => {

  return (
    <div className={styles.container}>
        <>
        <div className={styles.image_container}>
          <Image className={styles.sImage} src={Laraval} width={250} height={200} alt="laraval"/>
          <Image className={styles.sImage} src={angular} width={250} height={200} alt="laraval"/>
          <Image className={styles.sImage} src={colorlib} width={250} height={200} alt="laraval"/>
        </div>
        </>
    </div>
  )
}

export default Companies