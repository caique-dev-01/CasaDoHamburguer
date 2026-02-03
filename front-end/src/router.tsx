import { createBrowserRouter, Outlet } from "react-router";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Header from "./components/Header";
import Pedidos from "./pages/Pedidos";

// Componente de layout base da aplicação
// Ele define a estrutura comum que será reutilizada entre as páginas
const Layout = () => {
  return (
    <div>
      {/* Cabeçalho fixo exibido em todas as páginas que utilizam este layout */}
      <Header />

      {/* Outlet é responsável por renderizar o conteúdo da rota filha ativa */}
      <Outlet />
    </div>
  );
};

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/pedidos",
        element: <Pedidos />,
      },
    ],
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
