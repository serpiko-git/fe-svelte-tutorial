import Home from "../components/Home.svelte";
import SignUp from "../components/SignUp.svelte";
import Login from "../components/Login.svelte";
import SignUpInfo from "../components/SignUpInfo.svelte";
import CoReg from "../components/CoReg.svelte";
import SiteMap from "../components/SiteMap.svelte";
import ViewMore from "../components/ViewMore.svelte";

const routes = {
  "/": Home,
  "/siteMap": SiteMap,
  "/signUp": SignUp,
  "/login": Login,
  "/signUpInfo": SignUpInfo,
  "/coReg": CoReg,
  "/viewMore": ViewMore,
};

export default routes;
