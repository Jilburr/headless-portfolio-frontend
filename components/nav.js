const Nav = ({ socials }) => {
  return (
    <header>
      <h1>Jilbert</h1>

      <nav>
        {socials.map((socials) => {
          return (
            <a key={socials.id} href={socials.attributes.url}>
              {socials.attributes.service}
            </a>
          );
        })}
      </nav>
    </header>
  );
};

export default Nav;
