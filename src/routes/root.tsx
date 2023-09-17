import { Outlet, Link } from "react-router-dom"

const Root = () => {
  return (
    <>
    <div id="topbar">
      <h2><Link to={``}>nguyenurban.github.io</Link></h2>
      <nav>
        <Link to={`projects`}>Projects</Link>
        <Link to={`misc`}>Misc.</Link>
      </nav>
    </div>
    <div id="content">
      <Outlet />
    </div>
    </>
  )
}

export default Root