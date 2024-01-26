import { IoIosArrowForward } from 'react-icons/io';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <p className="footer-text">Powered By Appointo</p>
      <button className="footer-next-button">
        Next{' '}
        <span className="footer-button-next">
          <IoIosArrowForward />
        </span>{' '}
      </button>
    </div>
  );
};

export default Footer;
