import { useState } from 'react'
import './login.css'
import { toast } from 'react-toastify'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../../lib/firebase'
import { doc, setDoc } from 'firebase/firestore'

const Login = () => {
    const [avatar,setAvatar] = useState({
        file:null,
        url:""
    })

    const handleAvatar = e => {
        if(e.target.files[0]){

            setAvatar({
                file:e.target.files[0],
                url: URL.createObjectURL(e.target.files[0])
            })
        }
    }

    const handleLogin = e => {
        e.preventDefault()
        
    }
    const handleRegister =  async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)

        const {username,email,password} = Object.fromEntries(formData);
        console.log(username)
        try{
            const res = await createUserWithEmailAndPassword(auth,email,password)

            await setDoc(doc(db, "users", res.user.uid), {
                username,
                email,
                id: res.user.uid,
                blocked:[],
              });
              await setDoc(doc(db, "userchats", res.user.uid), {
                chats:[],
              });
              toast.success("Account created, you can login now")

        }catch(err){
            console.log(err)
            toast.error(err.message)
        }

    }

  return (
    <div className='login'>
        <div className="item">
            <h2>Welcome back,</h2>
            <form action="" onSubmit={handleLogin}>
                <input type="text" name="email" placeholder='Email'/>
                <input type="password" name="password" placeholder="password"id="" />
                <button>Sign in</button>
            </form>
        </div>
        <div className="separator"></div>
        <div className="item">
        <h2>Create an account</h2>
            <form action="" onSubmit={handleRegister}>
                <label htmlFor="file">
                    <img src={avatar.url || "./avatar.png"} alt="" />
                    Upload an image</label>
                <input type="file" name="" id="file" style={{display:'none'}} onChange={handleAvatar}/>
                <input type="text" name='username' placeholder='Username' />
                <input type="text" name="email" placeholder='Email'/>
                <input type="password" name="password" placeholder="password"id="loginpw" />
                <button>Sign up</button>
            </form>
        </div>
    </div>
  )
}

export default Login