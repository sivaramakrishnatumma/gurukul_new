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
    name: "Role Management",
    icon: PersonIcon,
    children: [
      {
        name: "Add Role",
        path: "add-role",
        parentId: 1,
      },
      {
        name: "List Roles",
        path: "list-roles",
        parentId: 1,
      },
    ],
  },
  {
    id: 2,
    name: "User Management",
    icon: ManageAccountsIcon,
    children: [
      {
        name: "Add User",
        path: "add-user",
        parentId: 2,
      },
      {
        name: "List Users",
        path: "list-users",
        parentId: 2,
      },
    ],
  },
  {
    id: 3,
    name: "Library Management",
    icon: LocalLibraryIcon,
    children: [
      {
        name: "Item Types Management",
        path: "item-types-manangement",
        parentId: 3,
      },
      {
        name: "Biblio Items Management",
        path: "biblio-items-manangement",
        parentId: 3,
      },
      {
        name: "Items Management",
        path: "items-manangement",
        parentId: 3,
      },
      {
        name: "Check-in Process",
        path: "check-in-process",
        parentId: 3,
      },
      {
        name: "Check-out Process",
        path: "check-out-process",
        parentId: 3,
      },
      {
        name: "Transaction Summary",
        path: "transaction-summary",
        parentId: 3,
      },
      {
        name: "Item History Details",
        path: "item-history-details",
        parentId: 3,
      },
    ],
  },
];
