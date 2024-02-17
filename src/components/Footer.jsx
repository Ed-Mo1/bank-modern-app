import styles from "../styles";
import { logo } from "../assets";
import { footerLinks, socialMedia } from "../constants";
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className="flex flex-1 flex-col justify-start mr-10">
          <img src={logo} alt="abnk" className="w-[266px] h-[72px]" />
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
            A new way to make payments easy, reliable and secure
          </p>
        </div>
        <div className="flex-[1.5] w-full flex justify-between flex-row flex-wrap md:mt-0 mt-10">
          {footerLinks.map((footerLink) => (
            <div
              key={footerLink.key}
              className="flex flex-col ss:my-0 my-4 min-w-[150px]"
            >
              <h4 className=" font-poppins font-medium text-18px leading-[27px] text-white mb-5">
                {footerLink.title}
              </h4>
              <ul className="flex flex-col gap-5">
                {footerLink.links.map((link) => (
                  <li
                    key={link.name}
                    className="font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer"
                  >
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between w-full items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
        <p className="font-poppins font-medium text-18px leading-[27px] text-white mb-5">
          2024 HoobBnk. All rights reversed
        </p>
        <div className="flex flex-row gap-4 md:mt-0 mt-6">
          {socialMedia.map((social) => (
            <img
              key={social.id}
              src={social.icon}
              className="w-[21px] aspect-square"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
