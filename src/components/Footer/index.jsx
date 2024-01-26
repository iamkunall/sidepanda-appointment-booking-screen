import { IoIosArrowForward } from 'react-icons/io';

import './footer.css';

const Footer = () => {
  return (
    <div className="footer-container">
      <a
        className="footer-text"
        href="https://apps.shopify.com/appointo-appointments-and-bookings"
        target="_blank"
        rel="noreferrer"
      >
        Powered By <span className="organizationName"> Appointo</span>
      </a>
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
