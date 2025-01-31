import { Link } from '@aivenio/aquarium';
import Image from 'next/image';

import styles from './styles.module.css';


export const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      <Link href="/recipes">
        <Image src="/logo.svg" width={140} height={50} alt="Aiven logo" />
      </Link>
    </nav>
  );
};
