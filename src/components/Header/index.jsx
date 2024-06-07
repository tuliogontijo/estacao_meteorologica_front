import ClimaSVG from './../../assets/icons/cloud-sun.svg';
import Subheader from './Subheader';

import CalendarioSVG from './../../assets/icons/calendar.svg';
import LocalSVG from './../../assets/icons/map-marker.svg';
import AltitudeSVG from './../../assets/icons/mountain.svg';
import { useContext, useState } from 'react';
import Context from '../../context/Context';

const Header = ({ handleMudaData }) => {
  const { altitude } = useContext(Context);

  const [data, setData] = useState('2024-06-07');

  const handleChangeDate = (e) => {
    const { value } = e.target;
    setData(value);
    handleMudaData(value);
  };

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
          textContent={
            <input
              type="date"
              className="text-xl border border-black rounded-lg p-1"
              value={data}
              onChange={handleChangeDate}
            />
          }
        />
        <Subheader.Item
          iconSrc={LocalSVG}
          textContent={<>Monte Carmelo - Minas Gerais - Brasil</>}
        />
        <Subheader.Item
          iconSrc={AltitudeSVG}
          textContent={
            <>
              Altitude: <span className="text-2xl ml-3">{altitude}</span>
            </>
          }
        />
      </Subheader.Root>
    </header>
  );
};

export default Header;
