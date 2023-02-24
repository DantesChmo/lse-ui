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
  </div>
)

