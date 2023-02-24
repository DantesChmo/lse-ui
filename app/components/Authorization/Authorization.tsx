'use client';
import Image from 'next/image';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import style from './Authorization.module.css';
import { Email } from './Email/Email';
import svg from './images/logo.svg'
import { Password } from './Password/Password';
import { Submit } from './Submit/Submit';


type Props = {}


export const Authorization = (props: Props) => {

  const [response] = useState(false); // back
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  type Event<T> = ChangeEvent<T>

  const formHandle = (e: Event<HTMLFormElement>) => {
    e.preventDefault()
    /* post */
  }


  const emailHandle = (e: Event<HTMLInputElement>) => {
    setEmail(e.target.value)
  }
  const passwordHandle = (e: Event<HTMLInputElement>) => {
    setPassword(e.target.value)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <Image src={svg} alt="logo education" />
      </div>

      <form className={style.form} onSubmit={formHandle}>
        <h3 className={style.title}>Вход</h3>
        <Email val={email} handle={emailHandle} />
        <Password val={password} handle={passwordHandle} label='пароль'/>
        <Submit resp={{fogot: true, remind: false}} />
        <p className={style.info}>Если у вас нет аккаунта, вы можете <Link href='/' className={style.regLink}>зарегистрироваться</Link></p>
      </form>
    </div>
  )
}

