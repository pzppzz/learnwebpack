import React from 'react'
import ReactDOM from 'react-dom/client'
export default function App() {
  return (
    <div>App组件</div>
  )
}
// ReactDOM.render(document.getElementById('root'), <App />)
ReactDOM.createRoot(document.getElementById('root')).render(<App />)
 