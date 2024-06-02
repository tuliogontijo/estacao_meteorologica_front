import ClimaSVG from './../../assets/icons/cloud-sun.svg';
import Subheader from './Subheader';

import CalendarioSVG from './../../assets/icons/calendar.svg';
import LocalSVG from './../../assets/icons/map-marker.svg';
import AltitudeSVG from './../../assets/icons/mountain.svg';

const Header = () => {
  return (
    <header>
      <div className="border-2 border-black	rounded-2xl p-9 flex justify-center gap-3">
        <h1 className="text-[40px] max-lg:text-[24px] font-bold self-center">DADOS METEOROLÓGICOS</h1>
        <img
          src={ClimaSVG}
          className="w-[70px]"
        />
      </div>

      <Subheader.Root>
        <Subheader.Item
          iconSrc={CalendarioSVG}
          textContent={<>Segunda-feira, 28 de maio de 2024</>}
        />
        <Subheader.Item
          iconSrc={LocalSVG}
          textContent={<>Monte Carmelo - Minas Gerais - Brasil</>}
        />
        <Subheader.Item
          iconSrc={AltitudeSVG}
          textContent={
            <>
              Altitude: <span className="text-2xl ml-3">800m</span>
            </>
          }
        />
      </Subheader.Root>
    </header>
  );
};

export default Header;
