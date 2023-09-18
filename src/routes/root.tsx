import { Outlet, Link } from "react-router-dom"

const Root = () => {

  return (
    <>
    <div id="topbar">
      <nav>
      <h2><Link to={``} className="site-header">nguyenurban.github.io</Link></h2>
        <Link to={`projects`}>Projects</Link>
        <Link to={`misc`}>Posts</Link>
      </nav>
    </div>
    <div>
      <Outlet />
    </div>
    </>
  )
}

export default Root