import { ChangeEvent } from 'react';
import style from './Email.module.css';

type Props = {
  val:string
  handle:(e:ChangeEvent<HTMLInputElement>) => void
}


export const Email = ({val, handle}: Props) => {


  return (
    <div>
      <label htmlFor="1" className={style.label}>Почта</label>
      <input
        type="text"
        id='1'
        placeholder='productname@gmail.ru'
        name='email'
        className={style.input}
        onChange={handle}
        value={val}
        required
      />
    </div>
  )
}

