
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Register from './Components/Register';
import SingleCourse from './Components/SingleCourse';
import Contactform from './Components/Contactform';
import Courses from './Components/Courses';
import AdminDashboard from './AdminComponent/AdminDashboard';
import AddCourse from './AdminComponent/AddCourse';

import Videos from './AdminComponent/Videos';
import ProtectedRoute from './ProtectedRoute';
import Payment from './Components/Payment';
import AddtoCart from './Components/AddtoCart';
import Profile from './Components/Profile';
import SingleCourseDetails from './Components/SingleCourseDetails';
import UserDashboard from './UserDashboardComponent/UserDashboard';
import Aboutus from "./UserDashboardComponent/Aboutus"
import Shipping from "./UserDashboardComponent/Shipping"
import RefundPolicy from "./UserDashboardComponent/RefundPolicy"

import Termsofuses from './Components/Termsofuses';
import Carouselposting from './AdminComponent/CrouselPosting';

import GetBlogList from './Components/GetBlogs';
import PostBlogs from './AdminComponent/PostBlogs';
import Crouseldelete from './AdminComponent/Crouseldelete';
import AdminPaymentDetails from './AdminComponent/PaymentDetails';
import AdminCourses from './AdminComponent/AdminCourses';
import EditCourse from './AdminComponent/EditCourse';
import PostCourseImage from './AdminComponent/PostCourseImage';
import AdminCourseDetails from './AdminComponent/AdminCourseDetails';
import RegisterUser from './AdminComponent/RegisterUser';
import SingleUserDetails from './AdminComponent/SingleUserDetails';




import JavaInfo from './CourseInfo/JavaInfo';
import JavascriptInfo from './CourseInfo/Javascriptinfo';
import PythonInfo from './CourseInfo/PythonInfo';
import ReactInfo from './CourseInfo/ReactInfo';
import AwsInfo from './CourseInfo/AwsInfo';
import DataScienceInfo from './CourseInfo/DataScienceInfo';
import AngularInfo from './CourseInfo/AngularInfo';
import ProjectManagementInfo from './CourseInfo/ProjectManagementInfo';
import CybersecurityInfo from './CourseInfo/CybersecurityInfo';
import MachineLearningInfo from './CourseInfo/MachineLearningInfo';
import GameDevInfo from './CourseInfo/GameDevInfo';
import AzureInfo from './CourseInfo/AzureInfo';
import SqlInfo from './CourseInfo/SqlInfo';
import ExcelInfo from './CourseInfo/ExcelInfo';
import PowerBIInfo from './CourseInfo/PowerBIInfo';
import KubernetesInfo from './CourseInfo/KubernetesInfo';
import ChatGPTInfo from './CourseInfo/ChatGPTInfo';
import DeepLearningInfo from './CourseInfo/DeepLearningInfo';
import LeadershipInfo from './CourseInfo/LeadershipInfo';
import HRManagementInfo from './CourseInfo/HRManagementInfo';
import CommunicationInfo from './CourseInfo/CommunicationInfo';
import ProductivityInfo from './CourseInfo/ProductivityInfo';
import NodeJSInfo from './CourseInfo/NodeJSInfo';
import MongodbInfo from './CourseInfo/MongodbInfo';
import UIUXInfo from './CourseInfo/UIUXInfo';
import DevOpsInfo from './CourseInfo/DevOpsInfo';
import SalesforceInfo from './CourseInfo/SalesforceInfo';
import DigitalMarketingInfo from './CourseInfo/DigitalMarketingInfo';
import FlutterInfo from './CourseInfo/FlutterInfo';
import LegalProtection from './UserDashboardComponent/LegalProtection';
import AccessibilityInfo from './UserDashboardComponent/AccessibilityInfo';
import Sitemap from './UserDashboardComponent/Sitemap';













function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />


        <Route path='/'
          element={<ProtectedRoute allowedRole="STUDENT">
            <UserDashboard />
          </ProtectedRoute>} />
        <Route path='/Aboutus' element={<Aboutus />} />

        <Route path='/GetBlogs' element={<GetBlogList />} />
        <Route path='/termsofuses' element={<Termsofuses />} />
        <Route path='/Shipping' element={<Shipping />} />
        <Route path='/RefundPolicy' element={<RefundPolicy />} />


        <Route path='/SingleCourse/:id' element={<SingleCourse />} />
        <Route path='/SingleCourseDetails/:id' element={<SingleCourseDetails />} />
        <Route path='/Payment/:id' element={<Payment />} />
        <Route path='/AddtoCart' element={<AddtoCart />} />
        <Route path='/Contactform' element={<Contactform />} />

        <Route path='/Profile' element={<Profile />} />


        <Route path="/Courses" element={<Courses />} />
        <Route path="/courses/:keyword" element={<Courses />} />





        <Route path="/javainfo" element={<JavaInfo />} />
        <Route path="/javascriptinfo" element={<JavascriptInfo />} />
        <Route path="/pythoninfo" element={<PythonInfo />} />
        <Route path="/reactinfo" element={<ReactInfo />} />
        <Route path="/awsinfo" element={<AwsInfo />} />
        <Route path="/datascienceinfo" element={<DataScienceInfo />} />
        <Route path="/angularinfo" element={<AngularInfo />} />
        <Route path="/projectmanagementinfo" element={<ProjectManagementInfo />} />
        <Route path="/cybersecurityinfo" element={<CybersecurityInfo />} />
        <Route path="/machinelearninginfo" element={<MachineLearningInfo />} />
        <Route path="/gamedevinfo" element={<GameDevInfo />} />
        <Route path="/azureinfo" element={<AzureInfo />} />
        <Route path="/sqlinfo" element={<SqlInfo />} />
        <Route path="/excelinfo" element={<ExcelInfo />} />
        <Route path="/powerbiinfo" element={<PowerBIInfo />} />
        <Route path="/kubernetesinfo" element={<KubernetesInfo />} />
        <Route path="/chatgptinfo" element={<ChatGPTInfo />} />
        <Route path="/deeplearninginfo" element={<DeepLearningInfo />} />
        <Route path="/leadershipinfo" element={<LeadershipInfo />} />
        <Route path="/hrmanagementinfo" element={<HRManagementInfo />} />
        <Route path="/communicationinfo" element={<CommunicationInfo />} />
        <Route path="/productivityinfo" element={<ProductivityInfo />} />
        <Route path="/nodejsinfo" element={<NodeJSInfo />} />
        <Route path="/mongodbinfo" element={<MongodbInfo />} />
        <Route path="/uiuxinfo" element={<UIUXInfo />} />
        <Route path="/devopsinfo" element={<DevOpsInfo />} />
        <Route path="/salesforceinfo" element={<SalesforceInfo />} />
        <Route path="/digitalmarketinginfo" element={<DigitalMarketingInfo />} />
        <Route path="/flutterinfo" element={<FlutterInfo />} />
        <Route path="/legal-protection" element={<LegalProtection />} />
        <Route path="/accessibility" element={<AccessibilityInfo />} />
        <Route path="/sitemap" element={<Sitemap />} />









        <Route path='/admindashboard'
          element={<ProtectedRoute allowedRole="ADMIN">
            <AdminDashboard />
          </ProtectedRoute>} />
        <Route path='/postCourseimage/:id' element={<PostCourseImage />} />
        <Route path='/PostBlogs' element={<PostBlogs />} />
        <Route path='/crouselposting' element={<Carouselposting />} />
        <Route path='/crouseldeleting' element={<Crouseldelete />} />
        <Route path='addCourse' element={<AddCourse />} />
        <Route path='/addVideos/:id' element={<Videos />} />
        <Route path='allcourses' element={<AdminCourses />} />
        <Route path='registeruser' element={<RegisterUser />} />
        <Route path='/singleuserdetails/:id' element={<SingleUserDetails />} />
        <Route path='/admincoursedetails/:id' element={<AdminCourseDetails />} />
        <Route path='/editcourses/:id' element={<EditCourse />} />
        <Route path='paymentDetails' element={<AdminPaymentDetails />} />
        <Route path='protectedRoute' element={<ProtectedRoute />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App



