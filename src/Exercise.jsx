import React, {useState, useEffect} from 'react'
import UserCard from './UserCard';
import PostCard from './PostCard';
import {getUsers} from './Services';
import { postsData } from './Posts';

function Exercise() {
  const [users, setUsers] = useState([]);

  //const isNotJakarta = users.filter((user) => user.city!=="Jakarta");

  useEffect (() => {
    const fetchData = async () => {
      try {
        const data = await getUsers();
        setUsers(data)
      } catch (error){
        console.error("[Component] Gagal Mendapatkan data:", error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold text-center mb-6">
          Post Cards
        </h1>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6 max-h-fit">
          {postsData.map((post, index) => <PostCard key={index} {...post}/>)}
        </div>
      </div>
    </>
  );
}

export default Exercise