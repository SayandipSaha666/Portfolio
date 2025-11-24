import { mySocials } from "../constants";
const Footer = () => {
  return (
    <section className="flex flex-wrap items-center justify-between mt-20 pb-3 text-sm text-neutral-400 c-space">
      <div className="mb-4 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
      <div className="flex gap-2">
        <p>Terms & Conditions</p>
        <p>|</p>
        <p>Privacy Policy</p>
      </div>
      <div className="flex gap-8">
        {mySocials.map((social, index) => (
          <a href={social.href} key={index} target="_blank">
            <img src={social.icon} className="w-8 h-8" alt={social.name} />
          </a>
        ))}
      </div>
      <p>© 2025 Sayandip. All rights reserved.</p>
    </section>
  );
};

export default Footer;