import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import NavbarIki from '../src/assets/navbariki.jpg';

function Navbar2() {
  return (
    <div style={{ 
      backgroundImage: `url(${NavbarIki})`, 
      backdropFilter: 'blur(5px)',
     
    }} className="flex md:hidden justify-between border-b-2 border-black">
      <div className="kayan-yazi  flex text-white ">Eren Eroglu 2023 &copy;
     </div> <div className="flex pt-1 ml-5">
        <a href="https://github.com/eren-eroglu" className="text-white mr-4"><FaGithub /></a>
        <a href="https://twitter.com/eren_eroglu" className="text-white mr-4"><FaTwitter /></a>
        <a href="https://www.linkedin.com/in/eren-eroglu/" className="text-white"><FaLinkedin /></a>
      </div>
    </div>
  );
}

export default Navbar2;
