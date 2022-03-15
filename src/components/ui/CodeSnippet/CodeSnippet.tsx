import classNames from 'classnames';
import styles from './CodeSnippet.module.scss';

interface CodeSnippetProps {
  children: React.ReactNode;
  recommended?: boolean;
  'not-recommended'?: boolean;
}

export const CodeSnippet = ({
  children,
  recommended,
  'not-recommended': notRecommended,
}: CodeSnippetProps) => {
  return (
    <div
      className={classNames(styles.component, {
        [styles.recommended]: recommended,
        [styles['not-recommended']]: notRecommended,
      })}
    >
      {children}
    </div>
  );
};
