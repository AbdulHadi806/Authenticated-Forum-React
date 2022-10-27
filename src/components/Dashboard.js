import React from 'react'
import {useAuth} from "../context/AuthContext"

export default function Dashboard() {
    const { currentUser } = useAuth()

  return (
    <div>Current User: {JSON.stringify(currentUser.email)}</div>
  )
}
