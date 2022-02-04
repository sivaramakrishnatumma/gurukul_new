import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const NAV_LIST = [
  {
    name: "Dashboard",
    path: "/",
    icon: <DashboardIcon />,
  },
  {
    name: "Role Management",
    icon: <PersonIcon />,
    children: [
      {
        name: "Add Role",
        path: "/add-role",
      },
      {
        name: "List Roles",
        path: "/list-roles",
      },
    ],
  },
  {
    name: "User Management",
    icon: <ManageAccountsIcon />,
    children: [
      {
        name: "Add User",
        path: "add-user",
      },
      {
        name: "List Users",
        path: "list-users",
      },
    ],
  },
  {
    name: "Library Management",
    icon: <LocalLibraryIcon />,
    children: [
      {
        name: "Add Items",
        path: "add-items",
      },
      {
        name: "List Items",
        path: "list-items",
      },
      {
        name: "Search Items",
        path: "search-items",
      },
      {
        name: "Item Types Management",
        path: "item-types-manangement",
      },
      {
        name: "Check-in Process",
        path: "check-in-process",
      },
      {
        name: "Check-out Process",
        path: "check-out-process",
      },
      {
        name: "Transaction Summary",
        path: "transaction-summary",
      },
      {
        name: "Item History Details",
        path: "item-history-details",
      },
    ],
  },
];
