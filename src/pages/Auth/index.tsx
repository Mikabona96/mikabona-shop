import { Mail } from '@mui/icons-material';
import { useLayoutEffect, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { addUsers, setCurrentUser, signInwithEmailAndPassword, signInWithGoogle, User } from '../../firebase'
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { userState } from '../../recoil';


export const Registration = () => {
    const navigate = useNavigate();
    const [user, setUser] = useRecoilState(userState);
    const {users} = useFetchUsers();
    const [password, setPassword] = useState('');
    const [registerUser, setRegisterUser] = useState({
        displayName: '',
        email: '',
        id: `${Math.floor((Math.random() * 100000000)) + Math.floor((Math.random() * 100000000)) + Math.floor((Math.random() * 100000000))}${Math.random() * 100000000}`,
        role: '',
        photo: ''
    })

    if (user) {
        setTimeout(() => navigate('/'), 1000)
    }

    useLayoutEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user, navigate])
   
  return (
    <div className='h-screen pl-56 flex justify-center my-[5rem]'>
        <form className='w-[25rem]'>
            <label className='text-2xl'>
                Name:
                <div className='border-2 border-black h-10 pl-2'>
                    <input className='outline-0' type="text" name='name' onChange={(event) => {
                        setRegisterUser((prevState) => ({
                            ...prevState,
                            displayName: event.target.value
                        }))
                    }} />
                </div>
            </label>
            <label className='text-2xl'>
                Email:
                <div className='border-2 border-black h-10 pl-2'>
                    <input className='outline-0' type="email" name='email' onChange={(event) => {
                        setRegisterUser((prevState) => ({
                            ...prevState,
                            email: event.target.value.toLowerCase()
                        }))
                    }} />
                </div>
            </label>
            <label className='text-2xl'>
                Password:
                <div className='border-2 border-black h-10 pl-2'>
                    <input className='outline-0' type="password" name='password' onChange={(event) => setPassword(event.target.value)} />
                </div>
            </label>
            <label className='text-2xl'>
                Confirm Password:
                <div className='border-2 border-black h-10 pl-2'>
                    <input className='outline-0' type="password" name='password' />
                </div>
            </label>
            <div 
            className='border-2 border-black text-center text-2xl mt-5 hover:bg-black hover:text-white cursor-pointer h-10'
            onClick={() => {
                signInwithEmailAndPassword(registerUser.email, password).then(res => {
                    users.forEach((user: User) => {
                        if (user.email === res.user.email) {
                            console.log('user exist')
                            return false
                        }
                    
                    })
                    addUsers({...registerUser, id: res.user.uid})
                    setUser({...registerUser, id: res.user.uid})
                    setCurrentUser({...registerUser, id: res.user.uid})
                    localStorage.setItem('user', JSON.stringify(user))
                })
                // console.log(registerUser)
            }}
            >Sign up</div>
            <div className='border-2 border-black text-center text-2xl mt-5 hover:bg-black hover:text-white cursor-pointer h-10 flex items-center content-center justify-center'
            onClick={() => {
                signInWithGoogle().then(res => {
                    if (res.user) {
                        if (res.user.email === 'dmitriygolubapk@gmail.com') {
                            users.forEach((user: User) => {
                                if (user.email === res.user.email) {
                                    console.log('user exist')
                                    return false
                                }
                            
                            })
                            addUsers({
                                displayName: (res.user.displayName as string),
                                email: (res.user.email?.toLowerCase() as string),
                                photo: (res.user.photoURL as string),
                                id: (res.user.uid as string),
                                role: 'admin'
                            })
                            setUser({
                                displayName: (res.user.displayName as string),
                                email: (res.user.email?.toLowerCase() as string),
                                photo: (res.user.photoURL as string),
                                id: (res.user.uid as string),
                                role: 'admin'
                            })
                            setCurrentUser({
                                displayName: (res.user.displayName as string),
                                email: (res.user.email?.toLowerCase() as string),
                                photo: (res.user.photoURL as string),
                                id: (res.user.uid as string),
                                role: 'admin'
                            })
                        } else {
                            users.forEach((user: User) => {  
                                if (user.email === res.user.email) {
                                    console.log('user exist')
                                    return false
                                }

                            })
                            addUsers({
                                displayName: (res.user.displayName as string),
                                email: (res.user.email?.toLowerCase() as string),
                                photo: (res.user.photoURL as string),
                                id: (res.user.uid as string),
                                role: ''
                            })
                            setUser({
                                displayName: (res.user.displayName as string),
                                email: (res.user.email?.toLowerCase() as string),
                                photo: (res.user.photoURL as string),
                                role: '',
                                id: (res.user.uid as string),
                            })
                            setCurrentUser({
                                displayName: (res.user.displayName as string),
                                email: (res.user.email?.toLowerCase() as string),
                                photo: (res.user.photoURL as string),
                                role: '',
                                id: (res.user.uid as string),
                            })
                        }
                       
                        localStorage.setItem('user', JSON.stringify(user))
                    }
                  })
            }}>{'Sign up with '} <FcGoogle /></div>
        </form>

    </div>
  )
}
