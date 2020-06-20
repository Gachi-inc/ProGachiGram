//import {createDefaultAvatar} from "utils/helpers/DefaultAvatar"
import React  from 'react';
import {Avatar} from './Avatar.styles'

const createDefaultAvatar = (user) =>{
    // const colors = ["#71dadf", "#8c7ac8", "#119b89", "#fdcc17", "#e49737"];
    // const colorId = Math.floor(Math.random()*(5 - 0) + 0);
    const firstChar = user.fullname[0].toUpperCase();
    const currentColor = "#71dadf";
    return {currentColor, firstChar}
}


const UserAvatar = ({user}) =>{

    if (user.avatar) {
        return(
          <img 
                className="avatar"
                src= {user.avatar} 
                alt= { `${user.fullname} avatar`} 
          />
        ) 
    } else {
          const {currentColor, firstChar} = createDefaultAvatar(user);
          console.log(currentColor)
          return(
              <Avatar
                  style={{
                      background: `${currentColor}`
                  }}
                  className="avatar--symbol"
              >
                  {firstChar}
              </Avatar>
        )
    }
  }

export default UserAvatar;