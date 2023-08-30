import { BrowserRouter as Router, Route } from "react-router-dom";
import PackageDependencies from "./components/PackageDependencies";
import Home from "./pages/Home";
function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={Home}></Route>
        <Route
          exact
          path="/package-dependencies/:slug"
          component={PackageDependencies}
        ></Route>
      </Router>
    </>
  );
}

export default App;
