'use client'
import { useUserStore } from '@/store/UserStore';
import { useRouter } from 'next/navigation';
import React, { ReactNode, useEffect } from 'react'

const ProtectedRoute = ({ children }: { children: ReactNode }) => {

    const token = useUserStore((state) => state.token);

    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push("/signin");
        }
    }, [token, router]);
    return (
        <div>
            {children}
        </div>
    )
}

export default ProtectedRoute