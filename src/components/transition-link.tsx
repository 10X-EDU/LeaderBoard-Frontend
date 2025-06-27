'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const TransitionLink = ({ children, href, ...rest }: { children: React.ReactNode, className?: string, href: string, rest?: React.ComponentPropsWithoutRef<'a'> }) => {
    const router = useRouter();
    const handleTransitionLinkClick = async (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const body = document.body
        body.classList.add('body-transition');
        await sleep(100);
        router.push(href);
        await sleep(100);
        body.classList.remove('body-transition');
        // Add your custom transition logic here
    };
    return (
        <Link 
        onClick={handleTransitionLinkClick}
        href={href} {...rest}>{children}</Link>
    )
}

export default TransitionLink