import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import ImpactPage from "./pages/impact/ImpactPage";
import PortfolioPage from "./pages/portfolio/PortfolioPage";
import OpportunitiesPage from "./pages/opportunities/OpportunitiesPage";
import ChatPage from "./pages/chat/ChatPage";
import NewsListing from "./pages/news-listing/NewsListing";
import ReportsListing from "./pages/reports-listing/ReportsListing";
import InsightListing from "./pages/insight-listing/InsightListing";
import NewsDetail from "./pages/news-detail/NewsDetail";
import InsightDetail from "./pages/insight-detail/InsightDetail";
import ReportDetails from "./pages/report-details/ReportDetails";
import NavBar from "./components/common/navbar/NavBar";
import Header from "./components/common/header/Header";
import Login from "./pages/login/Login";
import SignupLanding from "./pages/signup/common/landing/SignupLanding";
import SignupIntro from "./pages/signup/investor/signup-intro/SignupIntro";
import Signup from "./pages/signup/Signup";
import OtpPage from "./pages/otp/OtpPage";
import DetailsForm from "./pages/signup/DetailsForm";
import PersonalDetails from "./pages/signup/common/personal-detail/PersonalDetails";
import IdentityProof from "./pages/signup/common/identity-proof/IdentityProof";
import ResidenceProof from "./pages/signup/common/residence-proof/ResidenceProof";
import ConfirmDetails from "./pages/signup/common/confirm-details/ConfirmDetails";
import CompanyDetails from "./pages/signup/legal-entity/company-details/CompanyDetails";
import ContactDetails from "./pages/signup/legal-entity/contact-details/ContactDetails";
import UboDetails from "./pages/signup/legal-entity/ubo-details/UboDetails";
import LegalRepresentativeDetail from "./pages/signup/legal-entity/legal-representative-detail/LegalRepresentativeDetail";
import Notification from "./pages/notifications/Notification";
import PortfolioDetail from "./pages/portfolio-detail/PortfolioDetail";
import CompanyDetailsPage from "./pages/company-details/CompanyDetails";
import ProfileSettings from "./pages/profile-settings/ProfileSettings";
import AccountDetails from "./pages/account-details/AccountDetails";
import AddAdvisor from "./pages/add-advisor/AddAdvisor";
import Approval from "./pages/approval/Approval";
import LanguageSelection from "./pages/language-selection/LanguageSelection";
import PrivacySecurity from "./pages/privacy-security/PrivacySecurity";
import CustomerSupport from "./pages/customer-support/CustomerSupport";
import Onboarding from "./pages/onboarding/Onboarding";
import PageListing from "./pages/pages";
import Acknowledgement from "./pages/acknowledgement-page/Acknowledgement";
import ActiveDevices from "./pages/active-devices/ActiveDevices";
import AdvisorIntro from "./pages/advisor-intro/AdvisorIntro";
import TermsConditions from "./pages/terms-conditions/TermsConditions";
import HighlightDetail from "./pages/highlight-details/HighlightDetails";
import HighlightListing from "./pages/highlight-listing/HighlightListing";
import HighlightPage from "./pages/highlights/HighlightPage";
import SelectClient from "./components/select-client/SelectClient";
import NoteDrawer from "./components/note-drawer/NoteDrawer";
import AccordionModule from "./components/accordion-module/AccordionModule";
import ProfileUpdatePage from "./pages/profile-update/ProfileUpdate";
import ProfileDrawer from "./components/profile-drawer/ProfileDrawer";
import CreatePin from "./pages/profile-update/CreatePin";
import AddProfilePicture from "./pages/profile-update/AddProfilePicture";
import ProfileAddAdvisor from "./pages/profile-update/ProfileAddAdvisor";
import AddClient from "./pages/add-client/AddClient";
import ConfirmClient from "./pages/add-client/confirm-client/ConfirmClient";
import AdvisorClientPage from "./pages/advisor-client/AdvisorClientPage";
import ApprovalPage from "./pages/approval-page/ApprovalPage";
import AdvisorDetails from "./pages/advisor-details/AdvisorDetails";
import AdvisorList from "./pages/advisor-list/AdvisorList";
import DeletePage from "./pages/delete-page/DeletePage";
import InterestPage from "./pages/express-interest/InterestPage";
import ChatMessagePage from "./pages/chat-message-page/ChatMessagePage";
import ConfirmRequest from "./pages/chat-confirm-request/ConfirmRequest";
import RequestDetails from "./pages/chat-request-details/RequestDetails";
import ChatDetails from "./pages/chat-details/ChatDetails";
import Exploration from "./components/exploration/Exploration";
import AccountPersonalDetails from "./pages/account-personal-details/AccountPersonalDetails";
import AccountIdentityDetails from "./pages/account-identity-details/AccountIdentityDetails";
import AccountResidenceDetails from "./pages/account-residence-details/AccountResidenceDetails";
// import ExplorePage from "./pages/explore-page/ExplorePage";

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname === "/impact" ||
      pathname === "/select-client" ||
      pathname === "/portfolios" ||
      pathname === "/opportunities" ||
      pathname === "/chat" ? (
        <header>
          <Header
            showProfile={true}
            showChat={true}
            actionItems={["notification"]}
          ></Header>
        </header>
      ) : (
        <></>
      )}

      <Routes>
        <Route path="/" element={<Onboarding />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/otp" element={<OtpPage />}></Route>
        <Route path="/signup" element={<Signup />}>
          <Route path="" element={<SignupLanding />} />
          <Route path="intro" element={<SignupIntro />} />
          <Route path="details-form" element={<DetailsForm />}>
            <Route path="" element={<PersonalDetails />} />
            <Route path="personal-details" element={<PersonalDetails />} />
            <Route
              path="identity-proof"
              element={<IdentityProof currentStep={2} />}
            />
            <Route
              path="residence-proof"
              element={<ResidenceProof currentStep={3} />}
            />
            <Route path="company-details" element={<CompanyDetails />} />
            <Route path="ubo-details" element={<UboDetails />} />
            <Route
              path="legal-representative-details"
              element={<LegalRepresentativeDetail />}
            />
            <Route path="contact-details" element={<ContactDetails />} />
          </Route>
          <Route path="confirm-details" element={<ConfirmDetails />} />
        </Route>
        <Route path="/add-client" element={<AddClient />}></Route>
        <Route path="confirm-client" element={<ConfirmClient />} />
        <Route path="/profile-update" element={<ProfileUpdatePage />}>
          <Route path="" element={<ProfileDrawer />} />
          <Route path="create-pin" element={<CreatePin />} />
          <Route
            path="add-profile-picture"
            element={<AddProfilePicture currentStep={2} />}
          ></Route>
          <Route
            path="profile-add-advisor"
            element={<ProfileAddAdvisor currentStep={3} />}
          ></Route>
          <Route path="confirm-details" element={<ConfirmDetails />} />
        </Route>
        <Route path="/acknowledgement" element={<Acknowledgement />}></Route>
        <Route path="/notifications" element={<Notification />}></Route>
        <Route path="/impact" element={<ImpactPage />}></Route>
        <Route path="/portfolios" element={<PortfolioPage />}></Route>
        <Route path="/portfolio-detail" element={<PortfolioDetail />}></Route>
        <Route path="/opportunities" element={<OpportunitiesPage />}></Route>
        <Route path="/company-details" element={<CompanyDetailsPage />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
        <Route path="/highlights" element={<HighlightPage />}></Route>
        <Route path="/highlight-list" element={<HighlightListing />}></Route>
        <Route path="/news-list" element={<NewsListing />}></Route>
        <Route path="/report-list" element={<ReportsListing />}></Route>
        <Route path="/insight-list" element={<InsightListing />}></Route>
        <Route path="/highlight-detail" element={<HighlightDetail />}></Route>
        <Route path="/news-detail" element={<NewsDetail />}></Route>
        <Route path="/insight-detail" element={<InsightDetail />}></Route>
        <Route path="/report-detail" element={<ReportDetails />}></Route>
        <Route path="/profile-settings" element={<ProfileSettings />}></Route>
        <Route path="/account-details" element={<AccountDetails />}></Route>
        <Route
          path="/account-personal-details"
          element={<AccountPersonalDetails />}
        ></Route>
        <Route
          path="/account-identity-details"
          element={<AccountIdentityDetails />}
        ></Route>
        <Route
          path="/account-residence-details"
          element={<AccountResidenceDetails />}
        ></Route>
        <Route path="/add-advisor" element={<AddAdvisor />}></Route>
        <Route path="/approval" element={<Approval />}></Route>
        <Route path="/approval-page" element={<ApprovalPage />}></Route>
        <Route
          path="/language-selection"
          element={<LanguageSelection />}
        ></Route>
        <Route path="/privacy-security" element={<PrivacySecurity />}></Route>
        <Route path="/customer-support" element={<CustomerSupport />}></Route>
        <Route path="/active-devices" element={<ActiveDevices />}></Route>
        <Route path="/onboarding" element={<Onboarding />}></Route>
        <Route path="/pages" element={<PageListing />}></Route>
        <Route path="/delete-page" element={<DeletePage />}></Route>
        <Route path="/advisor-intro" element={<AdvisorIntro />}></Route>
        <Route path="/terms-conditions" element={<TermsConditions />}></Route>
        <Route path="/select-client" element={<SelectClient />}></Route>
        <Route path="/note-drawer" element={<NoteDrawer />}></Route>
        <Route path="/accordion-module" element={<AccordionModule />}></Route>
        <Route path="/advisor-client" element={<AdvisorClientPage />}></Route>
        <Route path="/advisor-details" element={<AdvisorDetails />}></Route>
        <Route path="/advisor-list" element={<AdvisorList />}></Route>
        <Route path="/express-interest" element={<InterestPage />}></Route>
        <Route path="/chat-message-page" element={<ChatMessagePage />}></Route>
        <Route
          path="/chat-confirm-request"
          element={<ConfirmRequest />}
        ></Route>
        <Route
          path="/chat-request-details"
          element={<RequestDetails />}
        ></Route>
        <Route path="/chat-details" element={<ChatDetails />}></Route>
        <Route path="/explore-page" element={<Exploration />}></Route>
      </Routes>

      {pathname === "/impact" ||
      pathname === "/select-client" ||
      pathname === "/portfolios" ||
      pathname === "/opportunities" ||
      pathname === "/chat" ? (
        <footer>
          <NavBar></NavBar>
        </footer>
      ) : (
        <></>
      )}
    </>
  );
}

export default App;
