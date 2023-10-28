import React from 'react'
import useOnline from './useOnline'
const HomePage = () => {
    const isOnline = useOnline(5000)
  return isOnline ? "I am online" : "Not online"
}

export default HomePage