import { useEffect, useState } from 'react'
import './chatList.css'
import AddUser from './addUser/addUser';
import {useUserStore} from "../../../lib/userStore";
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { db } from '../../../lib/firebase';
const ChatList = () => {
  const [chats,setChats] = useState([])
  const [addMode,setAddMode] = useState(false);

  const {currentUser} = useUserStore()

  useEffect(()=>{
    const unSub = onSnapshot(doc(db, "userchats", currentUser.id), async(res) => {
      const items = res.data().chats;

      const promises = items.map(async(item)=>{
        const userDocRef = doc(db, "users", item.receiverId);
        const userDocSnap = await getDoc(userDocRef);

        const user = userDocSnap.data();

        return {...item, user}
      })
      const chatData = await Promise.all(promises)

      setChats(chatData.sort((a,b)=>b.updatedAt - a.updatedAt));
      
  });

  return ()=>{
    unSub()
  }
  },[currentUser.id])

  console.log(chats);
  

  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" name="" placeholder="Search"id="" />
        </div>
        <img onClick={()=> setAddMode((prev)=>!prev)}src={addMode ? "./minus.png":"./plus.png"} alt="" className='add'/>
      </div>
      {chats.map((chat)=>(
        <div className="item" key={chat.chatId}>
        <img src={chat.user.avatar || "./avatar.png"} alt="" />
        <div className="texts">
          <span>{chat.user.username}</span>
          <p>{chat.lastMessage || "No message yet!"}</p>
        </div>
      </div>
      ))}
      
      {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList