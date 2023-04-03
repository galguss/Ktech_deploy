import { Outlet, Navigate } from 'react-router-dom'


function PraivteComponents(){
  const isLogged = localStorage.getItem('isLogged');
    return(
      isLogged ? <Outlet /> : <Navigate to= "login" />
    )
}

export default PraivteComponents;
