import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
const Header = () => {
  return (
    <div>
      <h1>当前时间:{dayjs().format()}</h1>
      <button onClick={() => {
        // 魔法注释
        // prefetch preload https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules
        import(
          /* webpackPrefetch: true */
          /* webpackChunkName: 'sider' */
          '../Sider')
        .then(res => {
          console.log(res.default())
        })
      }}>
        动态导入
        </button>
      <Link to={'/'}>首页</Link>
      <Link to={'/about'}>关于</Link>
    </div>
  )
}

export default Header