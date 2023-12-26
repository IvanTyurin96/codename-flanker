import { Link } from "react-router-dom";

const Faq = () => {
  return (
    <div className="faq pt-3 pb-3">
      <h3 className="mt-0 mb-3 text-center">Frequently Asked Questions</h3>
      <h5 className="mt-3 mb-2">Question №1: Is the mod free?</h5>
      <p className="mt-2 mb-2">- Yes, it’s for free!</p>

      <h5 className="mt-3 mb-2">Question №2: Where can I download?</h5>
      <p className="mt-2 mb-2">
        - Check{" "}
        <Link className="link-primary" to="/download">
          download page
        </Link>
      </p>

      <h5 className="mt-3 mb-2">Question №3: Which versions of the aircraft are included?</h5>
      <p className="mt-2 mb-2">
        - Right now the mod includes Su-30 MKI,SM,MKM and MKA. Depending on which one you choose, you'll have different cockpit
        appearance(UFC, pilot-body) and Livery selection. At this moment, the mod does not include M2,MKK or any non-canard
        variant of Su-30.
      </p>

      <h5 className="mt-3 mb-2">Question №4: I installed the mod but it isn't showing up/getting error.</h5>
      <p className="mt-2 mb-2">
        - You didn't follow{" "}
        <a className="link-primary" href="https://discord.com/channels/839196573228335185/935173821001003018" target="_blank">
          #tutorials
        </a>{" "}
        properly. Ensure this is the path: "\Saved Games\DCS\Mods\aircraft". If "mods" & "aircraft" folders are missing, make
        them.
      </p>

      <h5 className="mt-3 mb-2">Question №5: Do I need to own any official module to play this?</h5>
      <p className="mt-2 mb-2">
        - Right now the mod uses Su-33 avionics for Air-to-Air and Su-25t avionics for Air-to-Ground. So you will need at least
        Su-33 if you want to do AA operations. FC3 will obviously also work.
      </p>

      <h5 className="mt-3 mb-2">Question №6: What if I don't have Su-33?</h5>
      <p className="mt-2 mb-2">
        - Then you can only play the Air-to-Ground version. If you choose Air-to-Air and start/join the mission, AI will take
        over. In order to play Air-to-Ground version, choose the aircraft with "AG" in their name.
      </p>

      <h5 className="mt-3 mb-2">Question №7: Can I use AA weapon with AG configuration and vise versa?</h5>
      <p className="mt-2 mb-2">
        - Guns, Rockets, Fox2 missiles and Dumb Bombs are indifferent to configuration. Every other weapon requires its
        corresponding configuration to be usable(AA weapons require AA and AG weapons require AG).
      </p>

      <h5 className="mt-3 mb-2">Question №8: I see this file called "config.lua" and I really want to modify it.</h5>
      <p className="mt-2 mb-2">- DON'T. It's Dev only. All configuration related settings are accessed from in game. </p>

      <h5 className="mt-3 mb-2">Question №9: Does it have EFM(External Flight Model)?</h5>
      <p className="mt-2 mb-2">
        - At current state, the mod uses SFM (Standard Flight Model). EFM is currently work in progress and will be implemented in
        future update.
      </p>

      <h5 className="mt-3 mb-2">Question №10: Does it have ASM(Advanced System Modelling)?</h5>
      <p className="mt-2 mb-2">
        - Yes, the Module has ASM including clickable cockpit. We are implementing systems based on publicly available data.
      </p>

      <h5 className="mt-3 mb-2">Question №11: Does it have TVC(Thrust vector Control) ?</h5>
      <p className="mt-2 mb-2">
        - Yes, but this is a simplified implantation and a better one will come with EFMs. To learn how to use TVC, watch "Flight
        Control System" tutorial in{" "}
        <a className="link-primary" href="https://discord.com/channels/839196573228335185/935173821001003018" target="_blank">
          #tutorials
        </a>
      </p>

      <h5 className="mt-3 mb-2">Question №12: Is Multicrew implemented/Why can't my friend hop on to the back seat?</h5>
      <p className="mt-2 mb-2">
        - Multicrew is not fully implemented at the moment. It will be added in future. FC3 doesn't accept multicrew, it makes DCS
        crash. And without fc3, cant have weapons.
      </p>

      <h5 className="mt-3 mb-2">Question №13: I can't rearm or refuel/radio communications menu doesn't show up.</h5>
      <p className="mt-2 mb-2">- Press " RShift+\ " instead of the old keybind.</p>

      <h5 className="mt-3 mb-2">Question №14: When I turn on HMD Boresight mode, NVG shows up - and vise versa.</h5>
      <p className="mt-2 mb-2">
        - Boresight is tied to Su33 so you need to use AA configuration to use that. Similarly, NVG is tied to Su-25t so you need
        to use AG configuration to use that. Refer to question 4.
      </p>

      <h5 className="mt-3 mb-2">Question №15: How can I turn on Russian Betty (RI-65)?</h5>
      <p className="mt-2 mb-2">
        - Not implemented at the moment. There is a user mod in{" "}
        <a className="link-primary" href="https://discord.com/channels/839196573228335185/938331458160955442" target="_blank">
          #community-addons
        </a>{" "}
        that may work. Contact the author for technical support.
      </p>

      <h5 className="mt-3 mb-2">Question №16: How can I remove the ladder?</h5>
      <p className="mt-2 mb-2">
        - Enable cursor for clickable cockpit and then click on it from inside the cockpit. This also applies to Stick and
        Throttle.
      </p>

      <h5 className="mt-3 mb-2">Question №17: Some of the keybinds have red exclamation error.</h5>
      <p className="mt-2 mb-2">- Go to "...\Saved Games\Config\Input\ " and remove old Su-30 folder.</p>

      <h5 className="mt-3 mb-2">Question №18: I've installed ECHO19 CORE sound mod and now my engine sounds are broken.</h5>
      <p className="mt-2 mb-2">
        - Remove all Su25 Engine sound files(5 in total) from inside this directory: "...\Saved
        Games\DCS\Mods\Resource\ECHO19_CORE\Sounds\Effects\Aircrafts\ ".
      </p>

      <h5 className="mt-3 mb-2">
        Question №19: Brahmos crashes into the ocean even when it (probably) has lock and is within firing range of the target.
      </h5>
      <p className="mt-2 mb-2">
        - You need to set Steer point with TV/laser ON, then fire, it will start to auto track at 30km from target. Do not use
        launch permission override.
      </p>

      <h5 className="mt-3 mb-2">Question №20: How to open flight information, speed, altitude, attitude, etc?</h5>
      <p className="mt-2 mb-2">- PS-2(PAD panel below throttle) First top button to the left.</p>

      <h5 className="mt-3 mb-2">Question №21: Is there a roadmap for mod development?</h5>
      <p className="mt-2 mb-2">
        - We all work in our free time which has no roadmap, so unfortunately the mod doesn't either. Same goes for EFM. However,
        whenever something is ready, we will mention it in{" "}
        <a className="link-primary" href="https://discord.com/channels/839196573228335185/839204422332841995" target="_blank">
          #announcement
        </a>{" "}
        and{" "}
        <a className="link-primary" href="https://discord.com/channels/839196573228335185/839204869533335582" target="_blank">
          #development-progress
        </a>{" "}
        so keep an eye on those channels.
      </p>

      <h5 className="mt-3 mb-2">Question №22: Can I get involved with the development?</h5>
      <p className="mt-2 mb-0">- Yes, the project is open to any contribution, 3D, Texture, Code don’t hesitate to contact us.</p>
    </div>
  );
};

export default Faq;
