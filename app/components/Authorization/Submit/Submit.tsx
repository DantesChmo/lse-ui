import Link from 'next/link';
import { ChangeEvent, useState } from 'react';
import style from './Submit.module.css';

type Props = {
  resp: {
    fogot: boolean
    remind: boolean
  }
}

export const Submit = ({ resp }: Props) => (
  <div className={style.wrapper}>
    <button type="submit" className={style.btn}>Войти</button>
    {resp.fogot && <Link href='/' className={style.forgotpass}>Не помню пароль</Link>}
    {resp.remind && <Link href='/' className={style.forgotpass}>Забыли пароль?</Link>}
  </div>
)

