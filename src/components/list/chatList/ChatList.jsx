import { useState } from 'react'
import './chatList.css'
import AddUser from './addUser/addUser';
const ChatList = () => {
  const [addMode,setAddMode] = useState(false);
  
  return (
    <div className='chatList'>
      <div className="search">
        <div className="searchBar">
          <img src="./search.png" alt="" />
          <input type="text" name="" placeholder="Search"id="" />
        </div>
        <img onClick={()=> setAddMode((prev)=>!prev)}src={addMode ? "./minus.png":"./plus.png"} alt="" className='add'/>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>To Beo</span>
          <p>Hallo</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Him</span>
          <p>Hallo</p>
        </div>
      </div>
      <div className="item">
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>An Lee</span>
          <p>Hallo</p>
        </div>
      </div>
      {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList