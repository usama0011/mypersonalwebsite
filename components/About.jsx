import styles from '../styles/About.module.css'
import adminImage from '../assets/Images/newUser.png'
import Image from 'next/image'
const About = () => {
  return (
    <div id='about' className={styles.container}>
     <div className={styles.imageContainer}>
      <Image className={styles.adminImage} src={adminImage} width={300} height={300} alt="userImage"/>
     </div>
     <div className={styles.introContainer}>
      <p className={styles.aboutMeHead}>ABOUT ME</p>
      <h1 className={styles.heading}>Creative Independent Web Developer based in USA</h1>
      <p className={styles.description}>I'm web designer, and I'm very passionate and dedicated to my work. With 20 years experience as a professional web developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration.</p>
      <p className={styles.dv}>Download CV</p>
     </div>
    </div>
  )
}

export default About