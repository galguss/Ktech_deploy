import { Outlet, Navigate } from "react-router-dom";
import { useSelector } from 'react-redux'

function PrivateComponents() {
  const GlobalState = useSelector((state) => state.Login.value );
  return GlobalState.isLogged ? <Outlet /> : <Navigate to="login" />;
}

export default PrivateComponents;
