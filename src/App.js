import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchPage from "./pages/SearchPage";
import ViewPage from "./pages/ViewPage";
import ErrorPage from "./pages/ErrorPage";
import PrivacyPage from "./pages/PrivacyPage";
import ExplorePage from "./pages/ExplorePage";
import DisclaimerPage from "./pages/DisclaimerPage";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/view/:id" component={ViewPage} exact />
        <Route path="/search/:keyword" component={SearchPage} exact />
        <Route path="/pagenotfound" component={ErrorPage} exact />
        <Route path="/term" component={PrivacyPage} exact />
        <Route path="/disclaimer" component={DisclaimerPage} exact />
        <Route path="/explore" component={ExplorePage} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
