import React from 'react'
import '../styles/Preloader.css'

function Preloader(props) {
  return <div id={props.load ? 'preloader' : 'preloader-none'}></div>
}

export default Preloader
