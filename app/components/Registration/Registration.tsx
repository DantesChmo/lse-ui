'use client';
import Image from 'next/image';
import style from './Registration.module.css';
import svg from './images/logo.svg'
import { Email } from '../Authorization/Email/Email';
import { Password } from '../Authorization/Password/Password';
import { Submit } from '../Authorization/Submit/Submit';
import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
type Props = {}


export const Registration = (props: Props) => {

  const [response] = useState(false); // back
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmation, setConfirmation] = useState('');
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

  const confirmationHandle = (e: Event<HTMLInputElement>) => {
    setConfirmation(e.target.value)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.imageWrapper}>
        <Image src={svg} alt="logo education"/>
      </div>

      <form className={style.form} onSubmit={formHandle}>
        <h3 className={style.title}>Вход</h3>
        <Email val={email} handle={emailHandle} />
        <Password val={password} handle={passwordHandle} label='пароль'/>
        <Password val={confirmation} handle={confirmationHandle} label='Подтверждение пароля'/>
        <Submit resp={{fogot: true, remind: false}} />
        <p className={style.info}>Если у вас уже есть аккаунт, вы можете  <Link href='/' className={style.regLink}>войти</Link></p>
      </form>
    </div>
  )
}
