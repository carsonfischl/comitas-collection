import { Dropdown, Navbar, Link, Button, Modal, Text } from "@nextui-org/react";
import navStyles from "../styles/Nav.module.css";
import React from "react";
import Form from "./Form";

export default function App() {
    const [visible, setVisible] = React.useState(false);
    const handler = () => setVisible(true);
  
    const closeHandler = () => {
      setVisible(false);
      console.log("closed");
    };
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
                <Link href="/subcategory/argead" css={{color: '$black'}}>
                    Argead
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/antigonid" css={{color: '$black'}}>
                    Antigonid
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/bactrian" css={{color: '$black'}}>
                    Bactrian
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/greek" css={{color: '$black'}}>
                    Greek
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/pergamon" css={{color: '$black'}}>
                    Pergamene
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/ptolemaic" css={{color: '$black'}}>
                    Ptolemaic
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/seleucid" css={{color: '$black'}}>
                    Seleucid
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/thrace" css={{color: '$black'}}>
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
                <Link href="/subcategory/imperatorial" css={{color: '$black'}}>
                    Imperatorial
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/imperial" css={{color: '$black'}}>
                    Imperial
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/byzantine" css={{color: '$black'}}>
                    Byzantine
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
                <Link href="/subcategory/french" css={{color: '$black'}}>
                    French
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/spanish" css={{color: '$black'}}>
                    Spanish
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/german" css={{color: '$black'}}>
                    German
                </Link>
            </Dropdown.Item>
            <Dropdown.Item>
                <Link href="/subcategory/dutch" css={{color: '$black'}}>
                    Dutch
                </Link>
            </Dropdown.Item>
        </Dropdown.Menu>
        </Dropdown>
        <Button auto onClick={handler} css={{margin: '1rem', background: '$black', color: '$white'}} size="lg">Contact Me</Button>
      <Modal closeButton aria-labelledby="modal-title" open={visible} onClose={closeHandler}>
        <Modal.Header>
          <Text id="modal-title" size={18}>
              Carson
          </Text>
        </Modal.Header>
        <Modal.Body>
            <Form />
        </Modal.Body>
        <Modal.Footer css={{alignContent: "center", margin: "auto"}}>
            <Button onClick={closeHandler} css={{margin: '1rem', background: '$black', color: '$gray100'}}>Close</Button>
        </Modal.Footer>
      </Modal>
    </span>
  );
}
