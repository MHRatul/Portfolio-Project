import Link from "next/link";

import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";
const socials = [
    {icons: <FaGithub />, path: ''},
    {icons: <FaLinkedin />, path: ''},
    {icons: <FaFacebook/>, path: ''},
    {icons: <FaTwitter />, path: ''},
]

const Social = ({containerStyles, iconStyles}) => {
  return <div className={containerStyles}>
    {socials.map(({icons, path}, index) => <Link href={path} key={index} className={iconStyles}>{icons}</Link>)}
  </div>

}

export default Social