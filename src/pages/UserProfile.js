import React, { useState, useEffect } from 'react'
import axios from 'axios'
const UserProfile = () => {

  const [message, setMessage] = useState('')

  useEffect(() => {
    // Send GET request to Django server
    axios.get('http://127.0.0.1:8000/api/success/')
      .then(response => {
        setMessage(response.data.message)
      })
      .catch(error => {
        console.error('There was an error making the GET request!', error)
      })
  }, [])

  return (
    <div className="flex justify-center min-h-screen bg-gradient-to-b from-blue-500 to-blue-900 p-4">
      <div className="bg-blue-700 rounded-xl p-6 h-max w-full max-w-sm mt-5 text-white">
        <div className="flex justify-center mb-4">
          <div className="rounded-full h-24 w-24 overflow-hidden">
            <img 
              src="https://media.npr.org/assets/img/2023/12/12/gettyimages-1054147940-627235e01fb63b4644bec84204c259f0a343e35b.jpg?s=1100&c=50&f=jpeg" 
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <div className="text-center mb-4">
          <h2 className="text-xl font-bold">Luke Tee</h2>
          <p className="text-sm">Community Member Since 2019</p>
          <a
            href="https://www.instagram.com/LukeJamesTyler"
            className="text-sm text-blue-300"
          >
            @LukeJamesTyler
          </a>
        </div>
        <div className="bg-blue-600 rounded-lg p-4 text-left">
          <h3 className="text-lg font-semibold ">EVENTS</h3>
          <h3 className="text-sm font-thin mb-2">Events Attended: 23</h3>
          <div className="bg-blue-800 p-2 mb-2 rounded">
            <p className="text-md font-medium">Akash Summer Party</p>
            <p className="text-sm">June 2024</p>
          </div>
          <div className="bg-blue-800 p-2 mb-2 rounded">
            <p className="text-md font-medium">Balenciaga Release Party</p>
            <p className="text-sm">October 2023</p>
          </div>
          
          
        </div>
      </div>
    </div>
  )
}

export default UserProfile