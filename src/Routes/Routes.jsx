import { Suspense, lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useRoutes,
} from "react-router-dom";
import "../App.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import QLoader from "../Loader/QLoader";
import Committees from "../AboutUs/committees/Committees";

const InsHome = lazy(() => import("../Home/InsHome"));
const DeskMessage = lazy(() => import("../AboutUs/DeskMessage/DeskMessage"));

function AllRoute() {
  axios.defaults.withCredentials = true;

  return (
    <Suspense fallback={<QLoader />}>
      <div className="App">
        <Router>
          <Routes>
            <>
              <Route path="/" exact element={<InsHome />} />

              <Route
                path="/chancellors-message"
                exact
                element={<DeskMessage />}
              />
              <Route
                path="/vice-chancellors-message"
                exact
                element={<DeskMessage />}
              />
              <Route
                path="/principals-message"
                exact
                element={<DeskMessage />}
              />
              <Route path="/dean-message" exact element={<DeskMessage />} />
              <Route path="/committees" exact element={<Committees />} />
            </>
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default AllRoute;
