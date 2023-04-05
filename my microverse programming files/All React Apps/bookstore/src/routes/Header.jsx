import { Outlet } from 'react-router-dom';
import Headerlink from '../components/headerlinks';

const Header = () => {
  const links = [{ link: 'BOOKS', path: '/' }, { link: 'CATEGORY', path: 'category' }];
  return (
    <>
      <Headerlink links={links} />
      <Outlet />
    </>
  );
};
export default Header;
