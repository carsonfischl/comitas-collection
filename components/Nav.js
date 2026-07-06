import { Menu, Button, Group, ActionIcon } from '@mantine/core';
import Link from 'next/link';
import { AiOutlineHome } from 'react-icons/ai';
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import navStyles from '../styles/Nav.module.css';

const btnStyle = { margin: '0.5rem', backgroundColor: '#000', color: '#fff', transition: 'background-color 0.15s ease' };

function NavDropdown({ label, items }) {
  return (
    <Menu shadow="md" width={180}>
      <Menu.Target>
        <Button
          variant="filled"
          style={btnStyle}
          styles={{ root: { '&:hover': { backgroundColor: '#2a2a2a' } } }}
        >{label}</Button>
      </Menu.Target>
      <Menu.Dropdown>
        {items.map(({ href, label: itemLabel }) => (
          <Menu.Item
            key={href}
            component={Link}
            href={href}
            styles={{ item: { '&:hover': { backgroundColor: '#000', color: '#fff' } } }}
          >
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
      <div className={navStyles.homeIcon}>
        <ActionIcon
          component={Link}
          href="/"
          variant="subtle"
          size="lg"
          aria-label="Home"
          style={{ color: '#000', marginRight: '0.5rem' }}
          styles={{ root: { '&:hover': { backgroundColor: '#e5e5e5' } } }}
        >
          <AiOutlineHome size={24} />
        </ActionIcon>
      </div>
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
      <div className={navStyles.socialIcons}>
        <ActionIcon
          component="a"
          href="https://www.instagram.com/the_comitas_collection/"
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          size="lg"
          aria-label="Instagram"
          style={{ color: '#000', marginLeft: '0.5rem' }}
          styles={{ root: { '&:hover': { backgroundColor: '#e5e5e5' } } }}
        >
          <FaInstagram size={22} />
        </ActionIcon>
        <ActionIcon
          component="a"
          href="https://www.tiktok.com/@the_comitas_colle"
          target="_blank"
          rel="noopener noreferrer"
          variant="subtle"
          size="lg"
          aria-label="TikTok"
          style={{ color: '#000', marginLeft: '0.25rem' }}
          styles={{ root: { '&:hover': { backgroundColor: '#e5e5e5' } } }}
        >
          <FaTiktok size={20} />
        </ActionIcon>
      </div>
    </Group>
  );
}
