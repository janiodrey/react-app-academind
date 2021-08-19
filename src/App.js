import { Route, Switch } from "react-router";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupsPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
}

export default App;
