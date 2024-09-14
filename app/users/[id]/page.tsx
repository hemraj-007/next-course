import React from 'react'

interface Props {
    params: {id:number}
}
const UserDetailsPage = ({params:{id}}:Props) => {
  return (
    <div>User details {id}</div>
  )
}

export default UserDetailsPage