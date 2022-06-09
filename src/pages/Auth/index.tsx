import GoogleIcon from '@mui/icons-material/Google';
import { FcGoogle } from 'react-icons/fc';
import { useRecoilState } from 'recoil';
import { signInWithGoogle } from '../../firebase'
import { userState } from '../../recoil';

export const Registration = () => {
    const [user, setUser] = useRecoilState(userState);
  return (
    <div className='h-screen pl-56 flex justify-center my-[5rem]'>
        <form className='w-[25rem]'>
            <label className='text-2xl'>
                Name:
                <div className='border-2 border-black h-10 pl-2'>
                    <input className='outline-0' type="text" name='name' />
                </div>
            </label>
            <label className='text-2xl'>
                Email:
                <div className='border-2 border-black h-10 pl-2'>
                    <input className='outline-0' type="email" name='email' />
                </div>
            </label>
            <label className='text-2xl'>
                Password:
                <div className='border-2 border-black h-10 pl-2'>
                    <input className='outline-0' type="password" name='password' />
                </div>
            </label>
            <label className='text-2xl'>
                Confirm Password:
                <div className='border-2 border-black h-10 pl-2'>
                    <input className='outline-0' type="password" name='password' />
                </div>
            </label>
            <div className='border-2 border-black text-center text-2xl mt-5 hover:bg-black hover:text-white cursor-pointer h-10'>Sign up</div>
            <div className='border-2 border-black text-center text-2xl mt-5 hover:bg-black hover:text-white cursor-pointer h-10 flex items-center content-center justify-center'
            onClick={() => {
                signInWithGoogle().then(res => {
                    if (res.user) {
                      setUser({
                        displayName: (res.user.displayName as string),
                        email: (res.user.email as string),
                        photo: (res.user.photoURL as string),
                      })
                      localStorage.setItem('user', JSON.stringify(user))
                    }
                  })
            }}>{'Sign up with '} <FcGoogle /></div>
        </form>

    </div>
  )
}
