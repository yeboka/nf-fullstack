import React from 'react'
import {bg} from './styleFooter.module.css'

export default function Footer() {

  console.log("footer class bg: ", bg);

  return (
    <div className={bg}>
        <hr />
        Footer
        </div>
  )
}
