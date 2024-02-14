import React, { useEffect, useState } from 'react';
import User from '../components/User/User';
import '../styles/members.css'
import icon from '../assets/but-icon.svg'

function UserList() {
    const [users, setUsers] = useState([]);
    const [count, setCount] = useState(4)
    const f = async () => {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUsers(json.data);
    };
    useEffect(() => {
      f();
    }, []);
    const list = users.filter((_, i) => i < count)
    const isLoading = users.length<count
    return (
          <section >
              <div>
                  {list.map(item =><User name={item.first_name} image={item.avatar} key={item.id} id={item.id}/>)}
              </div>
             {!isLoading &&<button onClick={() => setCount(count + 4)} className='but' >Показать еще<img className='icon' src={icon}></img></button>}

          </section>
      )}
export default UserList;