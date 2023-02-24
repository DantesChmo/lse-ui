import styles from './page.module.css'
import {Authorization} from './components/Authorization/Authorization'
import { Registration } from './components/Registration/Registration'

export default function Home() {
  return (
    <main>
      <div className={styles.mainWrapper}>
      {/* <Authorization/> */}
      <Registration/>
      </div>
    </main>
  )
}
