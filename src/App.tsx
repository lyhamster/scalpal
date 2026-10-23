import { createBrowserRouter, RouterProvider } from 'react-router'
import './App.css'
import LoginPage from './login/LoginPage'
import OverallPage from './overallPage/OverallPage'
import MailPage, { type MailContent } from './mail/MailPage'
import DashboardP from './dashboard/DashboardP'
import PatientsPage from './patients/PatientsPage'
import { useFetchData } from './hooks/useFetchData'
import { createContext } from 'react'
import type { UserData } from './types/user'

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <OverallPage />,
    children: [
      {
        path: "dashboard",
        element: <DashboardP/>
      },
      {
        path: "patients",
        element: <PatientsPage/>
      },
      {
        path: "mail",
        element: <MailPage />
      }
    ]
  },
])

type UserFetchProps = {
  patients: UserData[],
  patientsPostContents: MailContent | undefined,
}

export const UserFetchContext = createContext<UserFetchProps | null>(null);

function App() {
  const [patients, patientsPostContents] = useFetchData();
  
  return (
    <UserFetchContext value={{patients, patientsPostContents}}>
      <RouterProvider router={router}/>
    </UserFetchContext>
  )
}

export default App
