import { Link } from 'react-router-dom'
import styles from './getaway.module.css'
import { Button } from 'antd'

const GetAway = () => {
  return (
   <>
    <h2 className={styles.title}>Cart</h2>
    <p className={styles.para}>Payment gateway only applicable for Production build.</p>
    <Link to='/'>
    <Button color="default" variant="solid" className={styles.myButton}>Explore More</Button>
    </Link>
   </>
  )
}

export default GetAway
