import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Register from "./pages/register";
import AppLayout from "./components/layout/AppLayout";
import AddItems from "./pages/Library/AddItems";
import ListItems from "./pages/Library/ListItems";
import SearchItems from "./pages/Library/SearchItems";
import CheckIn from "./pages/Library/CheckIn";
import CheckOut from "./pages/Library/CheckOut";
import TransactionSummary from "./pages/Library/TransactionSummary";
import ItemHistory from "./pages/Library/ItemHistory";
import { BaseList } from "./components/shared/BaseList";
import { BaseForm } from "./components/shared/BaseForm";

const routes = (isLoggedIn) => [
  {
    path: "/app",
    element: <AppLayout />,
    children: [
      { path: "dashboard", element: <Dashboard /> },
      {
        path: "item-types-manangement",
        element: (
          <BaseList
            key="itemTypeList"
            page="itemType"
            title="List Item Types"
          />
        ),
      },
      {
        path: "item-type-update",
        element: <BaseForm key="itemTypeForm" page="itemType" />,
      },

      {
        path: "biblio-items-manangement",
        element: (
          <BaseList
            key="biblioItemList"
            page="biblioItem"
            title="List Biblio Items"
          />
        ),
      },
      {
        path: "biblio-item-update",
        element: <BaseForm key="biblioItemForm" page="biblioItem" />,
      },

      {
        path: "items-manangement",
        element: <BaseList key="itemList" page="item" title="List Items" />,
      },
      {
        path: "item-update",
        element: <BaseForm key="itemForm" page="item" />,
      },

      { path: "check-in-process", element: <CheckIn /> },
      { path: "check-out-process", element: <CheckOut /> },
      // { path: "checkOutSummery", element: <CheckOutSummary /> },
      { path: "transaction-summary", element: <TransactionSummary /> },
      { path: "item-history-details", element: <ItemHistory /> },
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
