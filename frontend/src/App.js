import React from "react";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { AuthProvider } from "./context/AuthContext"; // Adjust the path as necessary
import UpdatePatientForm from "./components/UpdatePatientForm";
import TransactionTable from "./components/TransactionTable";
import AdminLogin from "./components/AdminLogin";
import ProtectedRoute from "./components/ProtectedRoute";
import AddVolunteer from "./components/AddVolunteer";
import VolunteerList from "./components/VolunteerList";
import DonorList from "./components/DonorList";
import AddDonor from "./components/AddDonor";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import CasePage from "./pages/CasePage";
import AdminRegister from "./components/AdminRegister";
import RefundCancellationPolicy from "./pages/RefundCancellationPolicy";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermsOfUse";
import DonatePage from "./pages/DonatePage";
import ScrollToTopBtn from "./components/ScrollToTopBtn";
import ScrollToTop from "./components/ScrollTop";
import BecomeVolunteer from "./pages/BecomeVolunteer";
import DocsPage from "./pages/DocsPage";
const App = () => {
  return (
    <AuthProvider>
      <Helmet>
        <title>Alive Foundation - Lighting the Path to Hope and Happiness</title>
        <meta
          name="description"
          content="Alive Foundation is dedicated to empowering lives through community support and welfare initiatives."
        />
        <meta
          name="keywords"
          content="Alive Foundation, NGO, community support, welfare initiatives"
        />
        <link rel="canonical" href="https://www.alivefoundation.in/" />
      </Helmet>
      <Router>
        <ScrollToTop />
        <Header />
        <div>
          <Routes>
            <Route path="/support-life" element={<CasePage />} />
            <Route path="/donateNow" element={<DonatePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/contact-us" element={<ContactPage />} />
            <Route path="/about-us" element={<AboutPage />} />
            <Route path="/refund-cancellation-policy" element={<RefundCancellationPolicy />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-use" element={<TermsOfUse />} />
            <Route path="/become-volunteer" element={<BecomeVolunteer />} />
            <Route path="/about-us/certificates" element={<DocsPage />} />

            <Route
              path="/admin/addPatient"
              element={<ProtectedRoute element={<UpdatePatientForm />} />}
            />
            <Route
              path="/admin/transactions"
              element={<ProtectedRoute element={<TransactionTable />} />}
            />
            <Route
              path="/admin/Volunteers"
              element={<ProtectedRoute element={<VolunteerList />} />}
            />
            <Route
              path="/admin/Volunteers/addVolunteer"
              element={<ProtectedRoute element={<AddVolunteer />} />}
            />
            <Route
              path="/admin/donors"
              element={<ProtectedRoute element={<DonorList />} />}
            />
            <Route
              path="/admin/donors/addDonor"
              element={<ProtectedRoute element={<AddDonor />} />}
            />

            <Route path="/secretAdmin" element={<AdminLogin />} />
            <Route path="/secretAdmin/register" element={<AdminRegister />} />
          </Routes>
        </div>
        <Footer className="bottom-0" />
        <ScrollToTopBtn />
      </Router>
    </AuthProvider>
  );
};

export default App;
