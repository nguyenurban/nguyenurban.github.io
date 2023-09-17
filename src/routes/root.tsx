import { Outlet } from "react-router-dom"

const Root = () => {
  return (
    <>
    <div id="topbar">
      <h2>nguyenurban.github.io</h2>
      <nav>
        <a>Projects</a>
        <a>Misc.</a>
      </nav>
    </div>
    <div id="content">
      <Outlet />
    </div>
    </>
  )
}

export default Root