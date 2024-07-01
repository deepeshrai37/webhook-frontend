/* eslint-disable react/prop-types */
import { useNavigate,} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { useEffect } from 'react';

const PrivateRoute = ({ children}) => {
  const { user } = useAuth();
  const navigate=useNavigate();

  useEffect(()=>{
    if(user===null){
      navigate('/login',{replace:true});
    }
  },[navigate,user]);

 return children;
};

export default PrivateRoute;
