import { Navigate, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import LibraryHomePage from "./pages/LibraryHomePage";
import Login from "./pages/Login";
import Register from "./pages/register";
import AppLayout from "./components/AppLayout";
import AddBook from "./pages/Library/AddBook";
import DisplayBooks from "./pages/Library/DisplayBooks";
import SearchItem from './pages/Library/SearchItem';
import ItemTypesManagement from './pages/Library/ItemTypesManagement';
import CheckIn from './pages/Library/CheckIn';
import CheckOut from './pages/Library/CheckOut';
import TransactionSummary from './pages/Library/TransactionSummary';
import ItemHistory from './pages/Library/ItemHistory';
import BiblioItem from './pages/Library/BiblioItem';
import CheckOutSummary from './pages/Library/CheckOutSummary';
const routes = (isLoggedIn) => [
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "library" },
      { path: "addBook", element: <AddBook /> },
      { path: "displayBooks", element: <DisplayBooks /> },
      { path: "searchItem", element: <SearchItem /> },
      { path: "itemTypesManagement", element: <ItemTypesManagement /> },
      { path: "biblioItem", element: <BiblioItem /> },
      { path: "checkIn", element: <CheckIn /> },
      { path: "checkOut", element: <CheckOut /> },
      { path: "checkOutSummery", element: <CheckOutSummary /> },
      { path: "transactionSummary", element: <TransactionSummary /> },
      { path: "itemHistory", element: <ItemHistory /> },

      
    // children: [
    //   { path: "addBook", element: <AddBook/> },
    //   { path: "displayBooks", element: <DisplayBooks/> },
    // ],
  

      //   { path: '/account', element: <Account /> },
      //   { path: '/', element: <Navigate to="/app/dashboard" /> }
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
];

export default routes;
