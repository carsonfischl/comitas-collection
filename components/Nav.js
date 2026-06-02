import { Menu, Button, Group } from '@mantine/core';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const btnStyle = { margin: '0.5rem', backgroundColor: '#d4d4d8', color: '#000' };

function NavDropdown({ label, items }) {
  return (
    <Menu shadow="md" width={180}>
      <Menu.Target>
        <Button variant="filled" style={btnStyle}>{label}</Button>
      </Menu.Target>
      <Menu.Dropdown>
        {items.map(({ href, label: itemLabel }) => (
          <Menu.Item key={href} component={Link} href={href}>
            {itemLabel}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
}

export default function Nav() {
  return (
    <Group className={navStyles.bar} gap={0}>
      <NavDropdown label="Hellenistic" items={[
        { href: '/category/hellenistic', label: 'All' },
        { href: '/category/hellenistic/subcategory/argead', label: 'Argead' },
        { href: '/category/hellenistic/subcategory/antigonid', label: 'Antigonid' },
        { href: '/category/hellenistic/subcategory/bactrian', label: 'Bactrian' },
        { href: '/category/hellenistic/subcategory/bithynian', label: 'Bithynian' },
        { href: '/category/hellenistic/subcategory/greek', label: 'Greek' },
        { href: '/category/hellenistic/subcategory/pergamon', label: 'Pergamene' },
        { href: '/category/hellenistic/subcategory/ptolemaic', label: 'Ptolemaic' },
        { href: '/category/hellenistic/subcategory/seleucid', label: 'Seleucid' },
        { href: '/category/hellenistic/subcategory/thrace', label: 'Thracian' },
      ]} />
      <NavDropdown label="Roman" items={[
        { href: '/category/roman', label: 'All' },
        { href: '/category/roman/subcategory/imperatorial', label: 'Imperatorial' },
        { href: '/category/roman/subcategory/imperial', label: 'Imperial' },
        { href: '/category/roman/subcategory/byzantine', label: 'Byzantine' },
      ]} />
      <NavDropdown label="Medieval" items={[
        { href: '/category/medieval', label: 'All' },
      ]} />
      <NavDropdown label="Early Modern" items={[
        { href: '/category/earlymodern', label: 'All' },
        { href: '/category/earlymodern/subcategory/french', label: 'French' },
        { href: '/category/earlymodern/subcategory/spanish', label: 'Spanish' },
        { href: '/category/earlymodern/subcategory/german', label: 'German' },
        { href: '/category/earlymodern/subcategory/dutch', label: 'Dutch' },
        { href: '/category/earlymodern/subcategory/belgian', label: 'Belgian' },
        { href: '/category/earlymodern/subcategory/italian', label: 'Italian' },
      ]} />
    </Group>
  );
}
