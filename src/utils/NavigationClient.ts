import { NavigationClient, NavigationOptions } from "@azure/msal-browser";
import { NavigateFunction } from "react-router-dom";

/**
 * react-router-dom v6 implementation of msal NavigationClient
 */
export class CustomNavigationClient extends NavigationClient {
  constructor(private navigate: NavigateFunction) {
    super();
  }

  /**
   * Navigates to other pages within the same web application
   * You can use the useHistory hook provided by react-router-dom to take advantage of client-side routing
   * @param url
   * @param options
   */
  async navigateInternal(url: string, options: NavigationOptions) {
    const relativePath = url.replace(window.location.origin, "");
    if (options.noHistory) {
      this.navigate(relativePath, { replace: true });
    } else {
      this.navigate(relativePath);
    }

    return false;
  }
}
