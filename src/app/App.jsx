import  AppRoutes  from "./routes/routes";
import { UserProvider } from './providers/UserProvider';

import "./styles/global.css";

function App() {
  
  return (
    <UserProvider>
    <AppRoutes />
    </UserProvider>
  )
}

export default App
