import  React from 'react';
import {useSelector} from 'react-redux';
import { AppState } from '../store/types';


export default ()=> {
  const user = useSelector((state:AppState)=> state.user )
  return (
    <div className="userLogin">
      {user}
    </div>
  )
}