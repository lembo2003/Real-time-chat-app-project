
import { arrayUnion, collection, doc, getDoc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore'
import './addUser.css'
import { db } from '../../../../lib/firebase'
import { useState } from 'react'
import { useUserStore } from '../../../../lib/userStore'

const AddUser = () => {
  const [user,setUser] = useState(null)

  const {currentUser} = useUserStore()
  const handleSearch = async (e) =>{
    e.preventDefault()
    const formData = new FormData(e.target)
    const username = formData.get("username")

    try {

    const userRef = collection(db, "users");

    const q = query(userRef, where("username", "==", username));
    const querySnapshot = await getDocs(q)

    if(!querySnapshot.empty){
      setUser(querySnapshot.docs[0].data())
    }

    }catch(err){
      console.log(err)
    }
  }

  const handleAdd = async ()=>{

    const chatRef = collection(db,"chats",)
    const userChatRef = collection(db,"userchats",)
    try{
      const newChatRef = doc(chatRef)
      
      await setDoc(newChatRef,
        {
          createdAt: serverTimestamp(),
        messages: [],
      })

      await updateDoc(doc(userChatRef, user.id),{
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage:"",
          receiverId: currentUser.id,
          updatedAt: Date.now(),
        })
      });

      await updateDoc(doc(userChatRef, currentUser.id),{
        chats: arrayUnion({
          chatId: newChatRef.id,
          lastMessage:"",
          receiverId: user.id,
          updatedAt: Date.now(),
        })
      });

      
    }

  catch(err){
    console.log(err);
  }

  }

  return (
    <div className='addUser'>
        <form action="" onSubmit={handleSearch}>
            <input type="text" placeholder='Username' name="username" />
            <button>Search</button>
        </form>
{   user &&     <div className="user">
            <div className="detail">
                <img src={user.avatar || "./avatar.png"} alt="" />
                <span>{user.username}</span>
            </div>
            <button onClick={handleAdd}>Add user</button>
        </div>}
    </div>
      
      )
  
}

export default AddUser