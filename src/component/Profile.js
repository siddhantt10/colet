import React from 'react'
import "./Profile.css";

function Profile({pfp, name, reg_no, linkedIn, gitHub, gmail}) {
  return (
    <div className='profile__card'>
        <img className='profile__img' src={pfp} alt='pfp'/>
        <p className='profile__name'>{name}</p>
        <p className='profile__reg'>{reg_no}</p>

        <div className='icons'>
        <a rel="noopener noreferrer" target="_blank" href={linkedIn}>
        <img className='profile__icon' src="linkedin.png" alt='pfp'/>
        </a>

        <a rel="noopener noreferrer" target="_blank" href={gitHub}>
        <img className='profile__icon' src="github.png" alt='pfp'/>
        </a>

        <a rel="noopener noreferrer" target="_blank" href={gmail}>
        <img className='profile__icon' src="gmail.png" alt='pfp'/>
        </a>
        </div>
    </div>
  )
}

export default Profile