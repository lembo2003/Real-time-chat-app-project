import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Detail from "./components/detail/Detail";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";



const App = () => {
  
  const {currentUser, isLoading, fetchUserInfo} = useUserStore()

  useEffect(()=>{
    const unSub = onAuthStateChanged(auth,(user)=>{
      fetchUserInfo(user.uid);

    })

    return ()=>{
      unSub();
    }
  },[fetchUserInfo])

  

  if(isLoading) return <div className="loading">Loading</div>

  return (
    <div className='container'>

        {
            currentUser ? (
              <>
              <List/>
              <Chat/>
              <Detail/>
              </>
            ) : (<Login/>)
        }
        <Notification position="bottom-right"/>
      
      </div>
  )
}

export default App