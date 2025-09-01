import { Outlet } from "react-router";
import { Header } from "../components/Header";

export function CatalogueLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
    </div>
  )
}