import Header from '../components/Header'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className='flex flex-col h-screen text-white overflow-hidden'>
            <Header />
            <Outlet />
        </div>
    )
}

export default MainLayout