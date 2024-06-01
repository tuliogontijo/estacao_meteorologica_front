import Navbar from './components/Navbar';
import ClimaSVG from './../../assets/icons/cloud-sun.svg';

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
      <Navbar />
    </header>
  );
};

export default Header;
