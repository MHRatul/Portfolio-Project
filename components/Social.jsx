import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
const socials = [
  {icons: <FaGithub />, path: 'https://github.com/MHRatul/'},
    {icons: <FaLinkedin />, path: 'https://www.linkedin.com/in/mahmudulhasanratul/'},
    {icons: <FaFacebook/>, path: 'https://www.facebook.com/Mahmudulhasanratul015'},
    {icons: <FaTwitter />, path: 'https://x.com/MahmudulhR'},
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map(({icons, path}, index) => <Link href={path} target="_blank" key={index} className={iconStyles}>{icons}</Link>)}
  </div>

}

export default Social