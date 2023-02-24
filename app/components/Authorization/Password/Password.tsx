import style from './Password.module.css';
import Image from 'next/image'
import svg from './images/password-eye.svg'
import { ChangeEvent, RefObject, useRef } from 'react';

type Props = {
  val: string
  label:string
  handle: (e: ChangeEvent<HTMLInputElement>) => void
}


export const Password = ({ val, handle, label}: Props) => {

  const inputElem = useRef<HTMLInputElement>(null)

  const togglePassword = () => {
    if (inputElem.current !== null) {
      inputElem.current.type === 'password' ?
        inputElem.current.type = 'text' :
        inputElem.current.type = 'password';
    }
  }

  return (
    <div className={style.passwordWapper}>
      <label  className={style.label}>{label}</label>
      <input
        type="password"
        ref={inputElem}
        placeholder='••••••'
        name='password'
        className={style.input}
        value={val}
        onChange={handle}
        required
      />
      <Image src={svg} alt='password eye' className={style.passwordEye} onClick={togglePassword} />
    </div>
  )
}

