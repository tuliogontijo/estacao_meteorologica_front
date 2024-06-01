const NavItem = ({ iconSrc, textContent }) => {
  return (
    <div className="border-2 border-black rounded-2xl align-middle flex p-4 justify-center w-full max-lg:justify-start">
      <img
        src={iconSrc}
        className="w-[35px] mr-3"
      />
      <b className="self-center">{textContent}</b>
    </div>
  );
};

export default NavItem;
