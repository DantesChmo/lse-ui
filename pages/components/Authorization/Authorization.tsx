import Image from 'next/image';
import style from './Authorization.module.css';
import svg from './images/logo.svg'
type Props = {}


export const Authorization = (props: Props) => {

  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <Image src={svg} alt="logo e-education"/>
      </div>

      <form className={style.form}>
        <h3 className={style.title}>Вход</h3>
        <label htmlFor="1" className={style.label}>Почта</label>
        <input type="text" id='1' placeholder='productname@gmail.ru' name='email' className={style.input}/>
        <label htmlFor="1" className={style.label}>Пароль</label>
        <input type="text" id='1' placeholder='••••••' name='password' className={style.input}/>
        <button type="submit" className={style.btn}>Войти</button>
        <p className={style.info}>Если у вас нет аккаунта, вы можете <a href='/' className={style.regLink}>зарегистрироваться</a></p>
      </form>
    </div>
  )
}

