import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { authContext } from '../contexts/AuthContext';
import VerifyingLoader from '../components/Loading';

const VerifyAccount = () => {
    const {token} = useParams();
    const {verifyAccount,vResponse,processing} = useContext(authContext);
    useEffect(()=>{
        verifyAccount(token)
        console.log(vResponse)
    }, [])
  return (
    <div className='verify'>
        <h1>Verify Account</h1>
        {
            processing ? (
            <div style={{ padding: '10px', border: '1px solid #ccc' }}>
              <VerifyingLoader/>
            </div>
            ) : (
                <div>
                 <h2 className={vResponse.status}>{vResponse.status}</h2>
                 <p className={vResponse.status}>{vResponse.message}</p>
                </div>
            )
        }
    </div>
  )
}

export default VerifyAccount