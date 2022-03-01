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
        name: "User Management",
        path: "users-manangement",
        parentId: 2,
      },
      {
        name: "Borrowers Management",
        path: "borrowers-manangement",
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
