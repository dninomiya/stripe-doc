import Link from 'next/link';
import { FC } from 'react';

const Tab: FC = ({ children }) => {
  return <a>{children}</a>;
};

const SceneTab = () => {
  return (
    <div className="flex items-center space-x-4 mb-6">
      <Link href="">
        <a>単発決済</a>
      </Link>
      <Link href="">
        <a>月額課金</a>
      </Link>
      <Link href="">
        <a>CtoC</a>
      </Link>
      <Link href="">
        <a>カスタマーポータル</a>
      </Link>
    </div>
  );
};

export default SceneTab;
