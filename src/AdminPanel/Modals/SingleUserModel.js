import { Modal } from 'antd'
import React from 'react'

const SingleUserModel = ({show , setShow , userDetails}) => {
    console.log(show)
    console.log(userDetails)
  
  return (
    <Modal
    visible={show}
    footer={false}
    onCancel={()=>setShow(false)}
    onOk={()=>setShow(false)}
    >
        {/* <p>{userDetails.name}</p> */}
        <p className='name'>Name: {userDetails.name}</p>
        <p>Id: {userDetails.id}</p>
        <p>Email: {userDetails.email}</p>
        <p>Address: {userDetails.address}</p>
        <p>Profile: {userDetails.profile}</p>
        <p>Crerated : {userDetails.createdAt}</p>
      
    </Modal>
  )
}

export default SingleUserModel
