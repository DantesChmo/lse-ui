---
to: <%= absPath %>/<%= component_name %>.tsx
---

import style from './<%= component_name %>.module.css';

type Props = {}


export const <%= component_name %> = (props:Props) => {

  return <div className = {style.container}></div>
}

