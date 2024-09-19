import { createContext, useContext, useEffect, useState } from 'react'
import api from '../configs/api'
import { useNavigate } from 'react-router-dom'

const UserContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const nav = useNavigate();

    useEffect(() => {
        api.get('/currentUser')
            .then(res => setUser(res.data.user))
            .catch(() => nav('/login'))
    }, [])

    return <UserContext.Provider value={{ user }}>
        {children}
    </UserContext.Provider>
}

export default UserProvider
export const useUser = () => useContext(UserContext)
