import React, { useState } from 'react'

function PostCard(props) {
    const {id, userId, title, body} = props;
    const [clicked, setClicked] = useState(false);
  return (
    <div className="bg-white p-6 rounded-lg shadow h-auto hover:bg-red-50 hover:border-2 hover:scale-105">
      <div className='flex flex-col items-center text-center'>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">
            <span className="font-medium">{body}</span> 
        </p>
        <button className={`${clicked ? "bg-special-red2 hover:saturate-200" : "bg-gray-600 hover:bg-gray-400"} text-white p-2 rounded-md`}
            onClick={() => setClicked(true)}
        >
            {clicked ? "Tombol sudah di klik" : "Silahkan Klik"}
        </button>
      </div>

    </div>
  )
}

export default PostCard

/*
function UserCard(props) {
  const {name, email, street, city, ...rest} = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 rounded-lg shadow hover:shadow-md transition-shadow">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600">
        <span className="font-medium">Email:</span> {email}
      </p>
      <p className="text-gray-600">
        <span className="font-medium">Address:</span> {street}, {city}
      </p>

      {Object.entries(rest).map(([key, value]) => (
        <p key={key} className="text-gray-500">
          <span className='font-medium capitalize'>{key}:</span> {value}
        </p>
      ))}

      <button className={`${clicked ? "bg-green-400" : "bg-gray-600"} text-white p-2 rounded-md`}
        onClick={() => setClicked(true)}
      >
        {clicked ? "Tombol sudah di klik" : "Silahkan Klik"}
      </button>
    </div>
  )
}
*/