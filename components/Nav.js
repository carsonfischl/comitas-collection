import { Dropdown, Navbar, Link, Button, Modal, Text } from "@nextui-org/react";
import navStyles from "../styles/Nav.module.css";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Login from "./Login";

export default function App() {
    const { data: session } = useSession()
  return (
    <span className={navStyles.bar}>
        <Dropdown>
        <Dropdown.Button flat css={{margin: '1rem', background: '$gray300', color: '$black'}}>Hellenistic</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item>
                <Link href="/category/hellenistic" css={{color: '$black'}}>
                    All
                </Link>
            </Dropdown.Item>
            <Dropdown.Item withDivider>
                <Link href="/category/hellenistic/subcategory/argead" css={{color: '$black'}}>
                    Argead
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/hellenistic/subcategory/antigonid" css={{color: '$black'}}>
                    Antigonid
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/hellenistic/subcategory/bactrian" css={{color: '$black'}}>
                    Bactrian
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/hellenistic/subcategory/bithynian" css={{color: '$black'}}>
                    Bithynian
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/hellenistic/subcategory/greek" css={{color: '$black'}}>
                    Greek
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/hellenistic/subcategory/pergamon" css={{color: '$black'}}>
                    Pergamene
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/hellenistic/subcategory/ptolemaic" css={{color: '$black'}}>
                    Ptolemaic
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/hellenistic/subcategory/seleucid" css={{color: '$black'}}>
                    Seleucid
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/hellenistic/subcategory/thrace" css={{color: '$black'}}>
                    Thracian
                </Link>
            </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
        <Dropdown.Button flat css={{margin: '1rem', background: '$gray300', color: '$black'}}>Roman</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item href="/category/roman">
                <Link href="/category/roman" css={{color: '$black'}}>
                    All
                </Link>
            </Dropdown.Item>
            <Dropdown.Item withDivider>
                <Link href="/category/roman/subcategory/imperatorial" css={{color: '$black'}}>
                    Imperatorial
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/roman/subcategory/imperial" css={{color: '$black'}}>
                    Imperial
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/roman/subcategory/byzantine" css={{color: '$black'}}>
                    Byzantine
                </Link>
            </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
        <Dropdown.Button flat css={{margin: '1rem', background: '$gray300', color: '$black'}}>Medieval</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item>
                <Link href="/category/medieval" css={{color: '$black'}}>
                    All
                </Link>
            </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
        <Dropdown.Button flat css={{margin: '1rem', background: '$gray300', color: '$black'}}>Early Modern</Dropdown.Button>
        <Dropdown.Menu aria-label="Static Actions">
            <Dropdown.Item>
                <Link href="/category/earlymodern" css={{color: '$black'}}>
                    All
                </Link>
            </Dropdown.Item>
            <Dropdown.Item withDivider>
                <Link href="/category/earlymodern/subcategory/french" css={{color: '$black'}}>
                    French
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/earlymodern/subcategory/spanish" css={{color: '$black'}}>
                    Spanish
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/earlymodern/subcategory/german" css={{color: '$black'}}>
                    German
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/category/earlymodern/subcategory/dutch" css={{color: '$black'}}>
                    Dutch
                </Link>
            </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Login css={{ color: '$white', background: '$black'}}/>
    </span>
  );
}
