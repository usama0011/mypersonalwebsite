import styles from '../styles/Portfolio.module.css'
const Portfolio = () => {
  return (
    <div className={styles.container}>
      <div className={styles.navigation_pannel}>
        <div className={styles.heading}>
          <h2>Some of My Owesome Porjects</h2>
        </div>
        <div className={styles.navButtons}>
          <select name="filter" id="fitter">
            <option value="reactjs">React JS</option>
            <option value="nextjs">Next JS</option>
            <option value="nodejs">Node JS</option>
            <option value="mongodb">Mongo DB</option>
            <option value="mysql">My SQL</option>
            <option value="crud">Crud Operations</option>
            <option value="auth">Authentication</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default Portfolio