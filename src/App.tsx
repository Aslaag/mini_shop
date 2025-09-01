import { BrowserRouter, Route, Routes } from "react-router";
import { CatalogueLayout } from "./layout/CatalogueLayout";
import { CatalogueHomePage } from "./pages/CatalogueHomePage";
import { ModifProduct } from "./pages/ModifProduct";
import { NotFound } from "./pages/NotFound";
import { ProductView } from "./pages/ProductView";
import { ROUTES } from "./routes/Routes";

export function App() {
  return <>
  <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<CatalogueLayout/>}>
          <Route path={ROUTES.HOME}  element={<CatalogueHomePage/>}/>
          <Route path={ROUTES.PRODUCT}   element={<ProductView/>}/>
          <Route path={ROUTES.MODIFPRODUCT}   element={<ModifProduct/>}/>
          <Route path={ROUTES.NOT_FOUND}   element={<NotFound/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </>
}