import styles from '../styles/Skill.module.css'
const Skill = ({sName,sPercentage}) => {
  return (
    <div className={styles.container}>
      <div className={styles.skill_top}>
        <span>{sName}</span>
        <span>{sPercentage}%</span>
      </div>
      <div id={sPercentage} className={styles.skill_bottom}>
        <div style={{width:`${sPercentage}%`}} className={styles.percent}></div>
      </div>
    </div>
  )
}

export default Skill