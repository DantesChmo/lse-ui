import styles from './page.module.css'
import {Authorization} from './components/Authorization/Authorization'

export default function Home() {
  return (
    <main>
      <div className={styles.mainWrapper}>
      <Authorization/>
      </div>
    </main>
  )
}
