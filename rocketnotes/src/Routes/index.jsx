import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./App.routes";
import { AuthRoutes} from './auth.routes'

export function Routes() {
  return (
    <BrowserRouter>
      <AppRoutes />
    
    </BrowserRouter>
  )
}