const patchnotes = [
  {
    _id: "3",
    version: "2.1.12 Beta",
    changes: [
      {
        name: "List of fixes:",
        value: `- Fixed nozzle direction animation when using TVC
                - Fixed AI Canopy and Canard animations
                - Fixed missing star on livery of Su-30SM
                - Fixed incorrect naming of livery
                - Fixed missing text on MK-Type UFC
                - Fixed missing geometry detail on pilot in exterior view
                - Fixed loft characteristics of R-77-1`,
      },
      {
        name: "Changes/Additions:",
        value: `- Added ability to change Cockpit Skin and Language from Special Settings in game
                - Added ability to set Countermeasure Programs from Special Settings in game
                - Significantly reduced Poly count of external model
                - Added new A2G weapons: KAB-500L, SAB-100
                - Added new A2A weapons: R-73L, R-73M, RVV-EA (export R-77) and RVV-SD (export R-77-1)
                - Added key-bind for Next/previous Target/waypoint/airfield
                - Added SAP-518 Advanced Jammer Suit(Only basic functionality)
                - Ladder/Stick/Throttle now has option for Hide/Show using mouse click
                - Radio change preset with custom frequency
                - Weapon names in loadout are now more informative
                - More Stable SFM behavior
                - Added Logbooks`,
      },
      {
        name: "Important Notes:",
        value: `- All configuration related changes are now done using in-game settings. No need to touch "Config.lua" anymore`,
      },
      {
        name: "In Progress:",
        value: `- External Flight Model
        - Unusual FPS drop due to new script algorithm`,
      },
    ],
  },
  {
    _id: "2",
    version: "2.1.10 Beta",
    changes: [
      {
        name: "List of fixes:",
        value: `- Fixed missing texture in canopy
              - Fixed artifacts related to glass reflection
              - Fixed Joystick/Keyboard conflict (No need to toggle AFCS anymore for keyboard users)
              - Fixed several RWR bugs
              - Darkened SM HUD glass color
              - Fixed AI not engaging AG targets
              - Fixed some of the weapons not working correctly 
              - Fixed no change on fuel qty when doing AAR.
              - Removed buggy Fire warning light`,
      },
      {
        name: "Changes/Additions:",
        value: `- Added 3 color variations for Cockpit
              - Added ability to choose Cockpit Language and Avionics (Russian/English). Translation done by @Архангел and @SK=52=MNXAH4NK 
              - A full rework of labeling of all the instrument gauges by @Crow 
              - Replaced old ejection seat model with newer K-36D-5 variant
              - Added ability to carry western munitions to MKM, namely Gbu12/38 and MK82
              - Added Fictional HMD functionality
              - Added TSD Map Waypoint
              - Added Waypoints HUD Symbology
              - Added some missing Key binds
              - Added some logic for PS-2 onboard computer 
              - Added INS alignment page for MFD
              - Changed Instrument Power Switch to R/F instead of MFWS
              - Added Key bind for smoke
              - Added SEMI/AUTO Mode to ECM Dispenser
              - Add MFD MFWS Brake Pressure indicator 
              - Added ELM2060 POD (For show only for now)
              - Added 3D model for MKM NATO Pylon on External Model`,
      },
      {
        name: "Important Notes:",
        value: `- Cockpit Color and Language options can be changed from inside config.lua by using parameters "Cockpit_SKIN" and "Cockpit_LANG"
              - AA and AG roles are now both available by default inside Mission Editor. No need to toggle them from config.lua
              - Startup procedure has been overhauled slightly. Refer to the new tutorial in #tutorials`,
      },
      {
        name: "In progress:",
        value: `- Rewrite Waypoint management system
              - External Flight Model
              - Radio System`,
      },
    ],
  },
  {
    _id: "1",
    version: "2.01 Beta",
    changes: [
      {
        name: "List of fixes/additions:",
        value: `- Canopy Glare reduced for better visibility
              - HUD made darker for better visibility
              - Brahmos tracking fix
              - R27R fixed missile reaching mach 10
              - Pilot Eyes fix. No more creepy eyes staring at your soul
              - Engine Shutoff keybind added. Physical button in cockpit is also functional. Requires Press and Hold 
              - OLS fixed
              - RWR tone fix and indication added to HUD
              - RWR Volume can now be adjusted
              - MFD preset is now correctly determined when selecting NAV/AA/AG modes
              - Gun Sounds fix
              - Fixed Kh-59MK2 clashing with Su 57 mod
              - NVG now correctly functions
              - Cockpit Engine sound added
              - Smoke pods now functional. Keybind is same as FC3.
              - keybind for jettison of payload added
              - IC breaking elements fixed`,
      },
      {
        name: "Known issues:",
        value: `- Brahmos booster phase(SDK limitations)
              - cockpit afterburner sound switch to quieter sound and back
              - Engine Crank handle starts 1 engine`,
      },
    ],
  },
];

const fetchAll = () => {
  return patchnotes;
};

export default {
  fetchAll,
};
