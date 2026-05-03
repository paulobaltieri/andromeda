import AppRoutes from "./routes/index.jsx";
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
      <AppRoutes />
      <ToastContainer theme="colored" />
    </>
  )
}

export default App
