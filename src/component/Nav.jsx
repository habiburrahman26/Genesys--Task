import CLogo from '../assets/logo/Valuetainment_Logo_2018 1.svg';
import MenuLogo from '../assets/logo/menu.svg';

const Nav = () => {
  return (
    <header className="flex justify-between items-center bg-red py-2 px-3 md:px-10 xl:px-20">
      <div className='flex items-center'>
        <img src={CLogo} alt="company logo" className='w-16 h-auto' />
        <p className='text-white font-extrabold text-3xl md:text-5xl lg:text-6xl xl:text-[90px] font-montserrat'>VTMERCH</p>
      </div>
      <img
        src={MenuLogo}
        alt="menu logo"
        className="w-10 h-10 cursor-pointer"
      />
    </header>
  );
};

export default Nav;
