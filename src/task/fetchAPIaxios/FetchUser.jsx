import React, { useEffect, useState } from 'react';
import Style from './fetchuser.module.css';
import axios from 'axios';

const FetchUser = () => {

  let [user, setUser] = useState([]);

  let fetchApi = async() => {
    let {data} = await axios.get('https://api.github.com/users');
    console.log(data);
    setUser(data);
  };

  useEffect(()=>{
    try {
      fetchApi();
    }catch(err){
      console.log(err);
    }
  },[]);

  return (
    <>
      {user.map((val, index)=>{
        return(
          <div className={Style.card} key={index}>
            <h1>{val.login}</h1>
            <img src={val.avatar_url} alt="" />
            <h3>ID : {val.id}</h3>
            <h3>Type : {val.type}</h3>
          </div>
        )
      })}
    </>
  )
}

export default FetchUser