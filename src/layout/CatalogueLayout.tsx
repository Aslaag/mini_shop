import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export function CatalogueLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}