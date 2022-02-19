import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonIcon from "@mui/icons-material/Person";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";

export const NAV_LIST = [
  {
    id: 0,
    name: "Dashboard",
    path: "dashboard",
    icon: DashboardIcon,
  },
  {
    id: 1,
    name: "User Management",
    icon: ManageAccountsIcon,
    children: [
      {
        name: "Add User",
        path: "add-user",
        parentId: 1,
      },
      {
        name: "List Users",
        path: "list-users",
        parentId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "Library Management",
    icon: LocalLibraryIcon,
    children: [
      {
        name: "Item Types Management",
        path: "item-types-manangement",
        parentId: 2,
      },
      {
        name: "Biblio Items Management",
        path: "biblio-items-manangement",
        parentId: 2,
      },
      {
        name: "Items Management",
        path: "items-manangement",
        parentId: 2,
      },
      {
        name: "Check-in Process",
        path: "check-in-process",
        parentId: 2,
      },
      {
        name: "Check-out Process",
        path: "check-out-process",
        parentId: 2,
      },
      {
        name: "Transaction Summary",
        path: "transaction-summary",
        parentId: 2,
      },
      {
        name: "Item History Details",
        path: "item-history-details",
        parentId: 2,
      },
    ],
  },
];
