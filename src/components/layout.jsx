import { Outlet } from "react-router-dom";

import Header from './header.jsx';
import MenuResponsive from './home_page/menu_responsive.jsx';
import Footer from './footer.jsx';


export default function Layout() {
  
  return (
    <div>
      <Header onShowSecond={() => setShowSecond(!showSecond)} />
      {/* {showSecond && <MenuResponsive activeMenu={showSecond}/>} */}

      <Outlet />

      <Footer/>
    </div>
  );
}
