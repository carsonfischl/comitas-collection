
import { useSession, signIn, signOut } from "next-auth/react"
import Link from "next/link"
import React from "react"

type Props = {}

const Login = (props: Props) => {
const { data: session } = useSession()
if (!session) {
    return (
        <>
            <Link href="/api/auth/signin">
                <a onClick={ e => { e.preventDefault(); signIn(); } } css={{margin: '1rem', background: '$black', color: '$white', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none'}}>
                    Sign In
                </a>
            </Link>
        </>
    )
    } else {
        return (
            <>
                <Link href="/api/auth/signout">
                    <a onClick={ e => { e.preventDefault(); signOut(); } } css={{margin: '1rem', background: '$black', color: '$white', padding: '0.5rem 1rem', borderRadius: '0.5rem', textDecoration: 'none'}}>
                        Sign Out
                    </a>
                </Link>`
            </>
        )
    }
}

export default Login