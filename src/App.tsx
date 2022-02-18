import { useNavigate, useRoutes } from "react-router-dom";
import { useIsAuthenticated, useMsal, useAccount } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import routes from "./routes";

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { CustomNavigationClient } from "./utils/NavigationClient";
import { useEffect, useState } from "react";
import Loader from "./components/common/Loader";

type AppProps = {
  pca: IPublicClientApplication;
};

function App({ pca }: AppProps) {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [name, setName] = useState("");
  const { inProgress } = useMsal();
  const isAuthenticated = useIsAuthenticated();

  const routing = useRoutes(routes(true));
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  useEffect(() => {
    if (account && account.name) {
      setName(account.name.split(" ")[0]);
    } else {
      setName("");
    }
  }, [account]);

  if (isAuthenticated) {
    // console.log("#####", isAuthenticated);
  } else if (
    inProgress !== InteractionStatus.Startup &&
    inProgress !== InteractionStatus.HandleRedirect
  ) {
    // inProgress check prevents sign-in button from being displayed briefly after returning from a redirect sign-in. Processing the server response takes a render cycle or two
    // console.log("@@@@");
  } else {
    return null;
  }

  return (
    <MsalProvider instance={pca}>
      {/* <div>Name::{name}</div> */}
      {routing}
      <Loader />
    </MsalProvider>
  );
}

export default App;
