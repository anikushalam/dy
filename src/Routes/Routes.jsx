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
import FacultyList from "../AboutUs/FacultyList/FacultyList";
import QualityAssurance from "../AboutUs/QuickLinks/QualityAssurance";
import CodeofConduct from "../AboutUs/QuickLinks/CodeofConduct";
import ImpLinks from "../AboutUs/QuickLinks/ImpLinks";
import NISP from "../AboutUs/QuickLinks/NISP";
import NewsLetter from "../AboutUs/QuickLinks/NewsLetter";
import ExamTimeTable from "../Examination/ExamTimeTable";
import ExamNotification from "../Examination/ExamNotification";
import CapabilityEnhancement from "../Academics/CapabilityEnhancement";
import Syllabus from "../Academics/Syllabus";
import AcademicCalender from "../Academics/AcademicCalender";
import FacultyResources from "../Academics/FacultyResources";
import TeachingActivities from "../Academics/TeachingActivities";
import SocialOutreach from "../Academics/SocialOutreach";
import InfoBrochure from "../Academics/InfoBrochure";

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
              <Route path="/faculty-list" exact element={<FacultyList />} />
              <Route
                path="/quality-assurance"
                exact
                element={<QualityAssurance />}
              />
              <Route
                path="/code-of-conducts"
                exact
                element={<CodeofConduct />}
              />
              <Route path="/important-links" exact element={<ImpLinks />} />
              <Route path="/nisp-policy" exact element={<NISP />} />
              <Route path="/news-letter" exact element={<NewsLetter />} />
              <Route
                path="/examination-time-table"
                exact
                element={<ExamTimeTable />}
              />
              <Route
                path="/examination-notification"
                exact
                element={<ExamNotification />}
              />
              <Route
                path="/capability-enhancement-skills"
                exact
                element={<CapabilityEnhancement />}
              />
              <Route path="/syllabus" exact element={<Syllabus />} />
              <Route
                path="/academic-calendars"
                exact
                element={<AcademicCalender />}
              />
              <Route
                path="/faculty-resources"
                exact
                element={<FacultyResources />}
              />
              <Route
                path="/teaching-activities"
                exact
                element={<TeachingActivities />}
              />
              <Route
                path="/social-outreach"
                exact
                element={<SocialOutreach />}
              />
              <Route path="/info-brochure" exact element={<InfoBrochure />} />
            </>
          </Routes>
        </Router>
      </div>
    </Suspense>
  );
}

export default AllRoute;
