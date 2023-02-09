import { Outlet, RouterProvider } from "react-router-dom"
import { Sidebar } from "../components/Sidebar"

export const Default = () => {
    return (
        <div className="layout">
      <Sidebar />
      <div className="content">
        <Outlet />
      </div>
    </div>
    )
}