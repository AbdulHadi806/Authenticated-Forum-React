import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

const ProtectedRoute = () => {

    const { currentUser } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if(!currentUser) {
            navigate('/Login', {replace: true})
        }
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default ProtectedRoute
