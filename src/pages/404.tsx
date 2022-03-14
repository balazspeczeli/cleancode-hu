import Link from 'next/link';
import { PageHeader } from 'components/ui';

const Custom404Page = () => {
  return (
    <>
      <PageHeader title="404 - Page Not Found" icon="sad-browser" />
      <Link href="/">
        <a>Vissza a főoldalra</a>
      </Link>
    </>
  );
};

export default Custom404Page;
