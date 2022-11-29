import styles from '../styles/Skills.module.css'
import Skill from './Skill'

const Skills = () => {
  return (
    <div className={styles.container}>
      <div className={styles.skill_heading}> <h1>I have high skills in developing and programming</h1>
      <p>I am working on a professional, visually sophisticated and technologically proficient, responsive and multi-functional personal portfolio template Shane.</p>
      </div>
      <div>
        {/* <Skill sName="HTML" sPercentage={95}/>
        <Skill sName="CSS" sPercentage={90}/>
        <Skill sName="JAVASCRIPT" sPercentage={90}/>
        <Skill sName="REACT JS" sPercentage={80}/>
        <Skill sName="NEXT JS" sPercentage={80}/>
        <Skill sName="MONGO DB" sPercentage={80}/>
        <Skill sName="NODE JS" sPercentage={75}/>
        <Skill sName="ANT DESING CSS" sPercentage={80}/>
        <Skill sName="TAILWIND CSS" sPercentage={85}/> */}
      </div>
    </div>
  )
}

export default Skills