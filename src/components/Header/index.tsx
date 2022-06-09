import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { signInWithGoogle } from '../../firebase'
import { userState } from '../../recoil';


export const Header = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate()
  return (
    <nav className='flex justify-between px-8 py-3 h-[10%] bg-slate-800 text-white'>
        <div className='flex justify-between w-20'>
            <p>She</p>
            <p>He</p>
        </div>
        <p>Mika-Shop</p>
        <div className='flex justify-between w-40'>
            <p>Liked</p>
            <p>Cart</p>
            <div onClick={() => {
              navigate('/registration')
            }}>Sign up</div>
        </div>
    </nav>
  )
}
