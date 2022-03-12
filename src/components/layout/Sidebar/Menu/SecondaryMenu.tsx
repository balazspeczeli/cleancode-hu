import { Icon } from 'components/ui';
import { ExternalLink } from '../Link';
import styles from './Menu.module.scss';

export const SecondaryMenu = () => (
  <ul className={styles.component}>
    <li>
      <ExternalLink href="https://github.com/balazspeczeli/cleancode-hu">
        <Icon name="github" />
        GitHub
      </ExternalLink>
    </li>
  </ul>
);
