import { useNavigate, useRoutes } from "react-router-dom";
import { useMsal } from "@azure/msal-react";
import { InteractionStatus } from "@azure/msal-browser";
import routes from "./routes";

// MSAL imports
import { MsalProvider } from "@azure/msal-react";
import { IPublicClientApplication } from "@azure/msal-browser";
import { CustomNavigationClient } from "./utils/NavigationClient";
import Loader from "./components/common/Loader";
import { useSelector } from "react-redux";

type AppProps = {
  pca: IPublicClientApplication;
};

function App({ pca }: AppProps) {
  const { inProgress } = useMsal();
  const isAuthenticated = useSelector(
    (state: any) => state.commonReducer.isAuthenticated
  );

  const routing = useRoutes(routes(isAuthenticated));
  const navigate = useNavigate();
  const navigationClient = new CustomNavigationClient(navigate);
  pca.setNavigationClient(navigationClient);

  if (isAuthenticated) {
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
      {routing}
      <Loader />
    </MsalProvider>
  );
}

export default App;
