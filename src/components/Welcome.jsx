import React from 'react';
import { useState, useEffect } from 'react';
const Welcome = () => {
    const [mounted, setMounted] = useState(false);
    const [userName, setUserName] = useState(false);
    const getUserData = (userData) =>{
        setUserName(JSON.parse(userData).name)
    }
    useEffect(() => {
		setMounted(true)
        getUserData(localStorage.getItem('userData'));
	}, [])
    if (!mounted) {
	}

  return (
    <ul>
     Welcome {userName} ; You are logged in.Enjoy  the tour. 
    </ul>
  )
}

export default Welcome;