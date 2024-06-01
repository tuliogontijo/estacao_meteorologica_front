import NavItem from './components/NavItem';

import CalendarioSVG from './../../../../assets/icons/calendar.svg';
import LocalSVG from './../../../../assets/icons/map-marker.svg';
import AltitudeSVG from './../../../../assets/icons/mountain.svg';

const Navbar = () => {
  return (
    <nav className="flex flex-row max-lg:flex-col place-content-between gap-8 max-lg:gap-3 my-6">
      <NavItem
        iconSrc={CalendarioSVG}
        textContent={<>Segunda-feira, 28 de maio de 2024</>}
      />
      <NavItem
        iconSrc={LocalSVG}
        textContent={<>Monte Carmelo - Minas Gerais - Brasil</>}
      />
      <NavItem
        iconSrc={AltitudeSVG}
        textContent={
          <>
            Altitude: <span className="text-2xl ml-3">800m</span>
          </>
        }
      />
    </nav>
  );
};

export default Navbar;
