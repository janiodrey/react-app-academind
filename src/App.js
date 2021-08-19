import { Route, Switch } from "react-router";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";

function App() {
  return (
    <div>
      <MainNavigation />
      <Switch>
        <Route path="/" exact="true">
          <AllMeetupsPage></AllMeetupsPage>
        </Route>
        <Route path="/new-meetup">
          <NewMeetupsPage></NewMeetupsPage>
        </Route>
        <Route path="/favorites">
          <FavoritesPage></FavoritesPage>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
