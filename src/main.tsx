import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/root.tsx'
import ErrorPage from './error-page.tsx'
import Index from './routes/index.tsx'
import Projects from './routes/projects.tsx'
import Other from './routes/other.tsx'

const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Index /> },
      { path: '/projects', element: <Projects />},
      { path: '/misc', element: <Other />}
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>,
)
