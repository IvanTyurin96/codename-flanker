import Screenshots from "../components/screenshots";

const Home = ({ screenCollapseWidth }) => {
  return (
    <>
      <div className="pt-3 pb-3">
        <p className="m-0 mb-2">
          Codename Flanker Su-30 - <strong>free</strong> community mod for DCS World.
        </p>
        <p className="mt-2 mb-2">
          The mod already have been released and you can download it from <a href="#/download">download page</a>.
        </p>
        <p className="mt-2 mb-2">It have few modifications in game, but primary all Su-30 separated to two types:</p>
        <ul className="mt-2 mb-2">
          <li key={"1"}>
            Air-to-Ground (<strong>AG</strong>)
          </li>
          <li key={"2"}>
            Air-to-Air (<strong>AA</strong>)
          </li>
        </ul>
        <p className="mt-2 mb-2">
          <strong>Air-to-Ground</strong> variants of Su-30 use Su-25T avionics and have own SFM (Standard Flight Model). These variants of Su-30 absolutely
          free: you don't need to buy any DCS modules to use these variants.
        </p>
        <p className="mt-2 mb-2">
          <strong>Air-to-Air</strong> Su-30 modifications use Su-33 avionics. These variants can use only players that have Flamming Cliffs 3 module or Su-33
          module.
        </p>
        <p className="mt-2 mb-2">
          Join our Discord server: <a href="https://discord.gg/codename-flanker-community-839196573228335185">Click</a>
        </p>
        <div className="mt-2">
          <Screenshots screenCollapseWidth={screenCollapseWidth} />
        </div>
      </div>
    </>
  );
};

export default Home;
