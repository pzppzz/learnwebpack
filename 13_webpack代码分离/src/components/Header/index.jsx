import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
const Header = () => {
  return (
    <div>
      <h1>当前时间:{dayjs().format()}</h1>
      <Link to={'/'}>首页</Link>
      <Link to={'/about'}>关于</Link>
    </div>
  )
}

export default Header