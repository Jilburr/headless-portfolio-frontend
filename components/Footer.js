import Link from "next/link";

const Footer = ({ socials }) => {
    return (
        <footer>
            {socials.map((socials) => {
                return (
                    <Link key={socials.id} href={socials.attributes.url}>
                        {socials.attributes.service}
                    </Link>
                );
            })}
        </footer>
    );
};

export default Footer;