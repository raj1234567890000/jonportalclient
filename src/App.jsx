
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Login from './Auth/Login'
import Singup from './Auth/Singup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browser from './components/Browser'
import Profile from './components/Profile'
import JobDescription from './components/JobDescription'
import Companies from './Admin/Companies'
import CreateCompanies from './Admin/CreateCompanies'
import CompanySetup from './Admin/CompanySetup'
import Jobbs from './Admin/Jobbs'
import PostAdminJob from './Admin/PostAdminJob'
import Applicants from './Admin/Applicants'
import JobUpdate from './Admin/JobUpdate'
import ProtectedRoute from './Admin/ProtectedRoute'
import Contact from './components/Contact'
import AboutUs from './components/AboutUs'
import OurServices from './components/OurServices'
import Blogs from './components/Blogs'
import PrivacyPolicy from './components/PrivacyPolicy'
import Service from './components/Services'
import HelpUs from './components/HelpUs'



function App() {

 const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },

  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/singup',
    element:<Singup/>
  },
  {
    path:'/job',
    element:<Jobs/>
  },
  {
    path:'/browser',
    element:<Browser/>
  },
  {
    path:'/profile',
    element:<Profile/>
  },
  {
    path:'/description/:id',
    element:<JobDescription/>
  },
  {
    path:'/contact',
    element:<Contact/>
  },
  {
    path:'/about',
    element:<AboutUs/>
  },
  {
    path:'/services',
    element:<OurServices/>
  },
  {
    path:'/blog',
    element:<Blogs/>
  },
  {
    path:'/privacypolicy',
    element:<PrivacyPolicy/>
  },
  {
    path:'/service',
    element:<Service/>
  },
  {
    path:'/helpus',
    element:<HelpUs/>
  },

  //admin statt here
  {
    path:'/admin/companies',
    element:<ProtectedRoute><Companies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/create",
    element:<ProtectedRoute><CreateCompanies/></ProtectedRoute>
  },
  {
    path:"/admin/companies/:id",
    element:<ProtectedRoute><CompanySetup/></ProtectedRoute>
  },
  {
    path:"/admin/jobs",
    element:<ProtectedRoute><Jobbs/></ProtectedRoute>
  },
  {
    path:"/admin/jobs/post",
    element:<ProtectedRoute><PostAdminJob/></ProtectedRoute>
  },
  {
    path:"/admin/jobs/:id",
    element:<ProtectedRoute><JobUpdate/></ProtectedRoute>
  },
  {
    path:"/admin/jobs/:id/applicants",
    element:<ProtectedRoute><Applicants/></ProtectedRoute>
  }


 ]
 
 )

  return (
    <>
   
  <RouterProvider router={appRouter}/>

 
   

    </>
  )
}

export default App
