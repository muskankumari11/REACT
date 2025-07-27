
import Login from "./components/Login"

import Profile from "./components/Profile"
import UserContextProvider from "./context/UserContextPROVIDER.JSX"


function App() {

  return (
    <UserContextProvider>
<h1>React with chai  is really an amazing course on yt</h1>

<Login/>
<Profile/>
    </UserContextProvider>
   
  )
}

export default App
