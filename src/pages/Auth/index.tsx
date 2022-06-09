import React from 'react'
import GoogleIcon from '@mui/icons-material/Google';

export const Registration = () => {
  return (
    <div>
        <form>
            <label>
                <input type="email" name='email' />
            </label>
            <label>
                <input type="password" name='password' />
            </label>
        </form>

        <div>Sign In with<GoogleIcon /></div>
    </div>
  )
}
