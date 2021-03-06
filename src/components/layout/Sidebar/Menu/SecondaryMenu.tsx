import dynamic from 'next/dynamic';
import { Icon } from 'components/ui';
import { ExternalLink, InternalLink } from './Link';
import styles from './Menu.module.scss';

const DynamicThemeSwitcher = dynamic<unknown>(
  () => import('./ThemeSwitcher').then((mod) => mod.ThemeSwitcher),
  {
    ssr: false,
  }
);

export const SecondaryMenu = () => {
  return (
    <ul className={styles.component}>
      <li>
        <DynamicThemeSwitcher />
      </li>
      <li>
        <InternalLink href="/kozremukodes">
          <Icon name="people" />
          Közreműködés
        </InternalLink>
      </li>
      <li>
        <ExternalLink href="https://github.com/balazspeczeli/cleancode-hu">
          <Icon name="github" />
          GitHub
        </ExternalLink>
      </li>
    </ul>
  );
};
