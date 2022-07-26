const Nav = ({ socials }) => {
  return (
    <nav>
      {socials.map((socials) => {
        return (
          <a key={socials.id} href={socials.attributes.url}>
            {socials.attributes.service}
          </a>
        );
      })}
    </nav>
  );
};

export default Nav;
