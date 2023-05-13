import React from 'react'
import { AiFillFacebook, AiFillLinkedin, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div><div className="">
      <AiOutlineTwitter/>
      <AiFillFacebook/>
      <AiFillLinkedin/></div>
      <h4>{new Date().getFullYear()}</h4></div>
  )
}

export default Footer