import styles from './CodeSnippet.module.scss';
import RecommendedIcon from 'assets/icons/recommended.svg';
import NotRecommendedIcon from 'assets/icons/not-recommended.svg';

interface CodeSnippetProps {
  children: React.ReactNode;
  recommended: boolean;
}

export const CodeSnippet = ({ children, recommended }: CodeSnippetProps) => {
  const icon = recommended ? (
    <RecommendedIcon className={styles.green} />
  ) : (
    <NotRecommendedIcon className={styles.red} />
  );

  return (
    <div className={styles.component}>
      {children}
      {icon}
    </div>
  );
};
