const MODULE_ID = "sr6-cyberware-compendium";

// ── Helper to build a cyberware/gear item ───────────────────────────
function cyberware(name, {
  type = "CYBERWARE",
  subtype = "CYBER_HEADWARE",
  avail = 0,
  availDef = "",
  price = 0,
  priceDef = "",
  essence = 0,
  genesisID = "",
  description = "",
  needsRating = false,
  rating = 0,
  capacity = 0,
  defense = 0,
} = {}) {
  return {
    name,
    type: "gear",
    img: "icons/svg/card-joker.svg",
    system: {
      genesisID: genesisID || name.toLowerCase().replace(/[^a-z0-9]+/g, "_"),
      description,
      product: "SR6 Core Rulebook",
      page: 0,
      type,
      subtype,
      skill: "",
      skillSpec: "",
      dmg: 0,
      dmgDef: "0P",
      stun: false,
      attackRating: [0, 0, 0, 0, 0],
      modes: { SS: false, SA: false, BF: false, FA: false },
      ammocap: 0,
      ammocount: 0,
      ammoLoaded: "regular",
      avail,
      availDef: availDef || String(avail),
      price,
      priceDef: priceDef || String(price),
      strWeapon: false,
      dualHand: false,
      count: 0,
      countable: false,
      customName: "",
      usedForPool: false,
      notes: "",
      accessories: "",
      needsRating,
      rating,
      defense,
      social: 0,
      essence,
      capacity,
      natural: false,
      devRating: 0,
      a: 0, s: 0, d: 0, f: 0,
      progSlots: 0,
      handlOn: 0, handlOff: 0,
      accOn: 0, accOff: 0,
      spdiOn: 0, spdiOff: 0,
      tspd: 0, bod: 0, arm: 0, pil: 0, sen: 0, sea: 0,
      vtype: "",
      vehicle: { opMode: "manual" },
      modifier: 0,
      wild: false,
      pool: 0,
    },
  };
}

// ── SR6 Core Rulebook Cyberware ─────────────────────────────────────

const CYBERWARE = {
  "headware": [
    // Commlink (implanted)
    cyberware("Commlink (Implanted)", {
      subtype: "CYBER_HEADWARE",
      avail: 2, price: 2000, essence: 0.2,
      description: "The implanted version of the commlink comes with a sim module at no additional cost. An integral headware commlink is popular with corporate operatives, company men, and sararimen on the go. A bricked headware commlink causes 6P damage resisted by Body.",
    }),

    // Control Rig
    cyberware("Control Rig (Rating 1)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, availDef: "4L", price: 30000, essence: 1.0,
      description: "This implant harnesses the raw data-coordinating and synchronization power of the middle brain for the express purpose of directly manipulating rigged vehicles and drones. It has a built-in sim module, allowing DNI with other devices. When jumped in it provides its rating as a dice pool bonus and reduction in threshold to all tests involving the operation of a vehicle, and a bonus point of Edge.",
    }),
    cyberware("Control Rig (Rating 2)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, availDef: "4L", price: 60000, essence: 2.0,
      description: "This implant harnesses the raw data-coordinating and synchronization power of the middle brain for the express purpose of directly manipulating rigged vehicles and drones. Rating 2 provides +2 dice pool bonus and threshold reduction when jumped in, plus a bonus point of Edge.",
    }),
    cyberware("Control Rig (Rating 3)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, availDef: "4L", price: 90000, essence: 3.0,
      description: "This implant harnesses the raw data-coordinating and synchronization power of the middle brain for the express purpose of directly manipulating rigged vehicles and drones. Rating 3 provides +3 dice pool bonus and threshold reduction when jumped in, plus a bonus point of Edge.",
    }),

    // Cortex Bombs
    cyberware("Cortex Kink Bomb", {
      subtype: "CYBER_HEADWARE",
      avail: 6, availDef: "6I", price: 10000, essence: 0,
      description: "Kink bombs are designed to damage only part of the victim's head, either rendering specific headware useless or damaging the brain to cause blindness, stuttering, hearing loss, or some other trauma (5P, resisted with Body). Can be remote- or time-detonated, or set to discharge by sound recognition.",
    }),
    cyberware("Cortex Microbomb", {
      subtype: "CYBER_HEADWARE",
      avail: 6, availDef: "6I", price: 25000, essence: 0,
      description: "The microbomb version is just powerful enough to kill the unfortunate bearer (18P, resisted with Body). Can be remote- or time-detonated, or set to discharge by sound recognition.",
    }),
    cyberware("Cortex Area Bomb", {
      subtype: "CYBER_HEADWARE",
      avail: 6, availDef: "6I", price: 40000, essence: 0,
      description: "Area cranial bombs kill the victim (microbomb damage to victim), and they also affect a blast area exactly like a fragmentation grenade, resisted separately from the initial microbomb damage. Can be remote- or time-detonated, or set to discharge by sound recognition.",
    }),

    // Cyberdeck (implanted)
    cyberware("Cyberdeck (Implanted)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, availDef: "4L", price: 5000, essence: 0.4,
      description: "Simply put, you've got a deck in your body. This is very convenient for the hacker on the go and is often sported by G-men and military deckers. Bricking a headware deck causes 8P damage resisted with Body.",
    }),

    // Cyberjack
    cyberware("Cyberjack (Rating 1)", {
      subtype: "CYBER_HEADWARE",
      avail: 3, availDef: "3L", price: 45000, essence: 1.0,
      description: "The cyberjack harnesses the immense processing power of the brain to take on Matrix protocols and encryption schemes. Rating 1: Data Processing 4, Firewall 3. Also functions as a standard datajack. Allows special Matrix Edge Actions.",
    }),
    cyberware("Cyberjack (Rating 2)", {
      subtype: "CYBER_HEADWARE",
      avail: 3, availDef: "3L", price: 65000, essence: 1.5,
      description: "The cyberjack harnesses the immense processing power of the brain to take on Matrix protocols and encryption schemes. Rating 2: Data Processing 5, Firewall 4. Also functions as a standard datajack. Allows special Matrix Edge Actions.",
    }),
    cyberware("Cyberjack (Rating 3)", {
      subtype: "CYBER_HEADWARE",
      avail: 3, availDef: "3L", price: 80000, essence: 2.0,
      description: "The cyberjack harnesses the immense processing power of the brain to take on Matrix protocols and encryption schemes. Rating 3: Data Processing 6, Firewall 5. Also functions as a standard datajack. Allows special Matrix Edge Actions.",
    }),
    cyberware("Cyberjack (Rating 4)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, availDef: "4L", price: 95000, essence: 2.3,
      description: "The cyberjack harnesses the immense processing power of the brain to take on Matrix protocols and encryption schemes. Rating 4: Data Processing 7, Firewall 6. Also functions as a standard datajack. Allows special Matrix Edge Actions.",
    }),
    cyberware("Cyberjack (Rating 5)", {
      subtype: "CYBER_HEADWARE",
      avail: 5, availDef: "5L", price: 140000, essence: 2.6,
      description: "The cyberjack harnesses the immense processing power of the brain to take on Matrix protocols and encryption schemes. Rating 5: Data Processing 8, Firewall 7. Also functions as a standard datajack. Allows special Matrix Edge Actions.",
    }),
    cyberware("Cyberjack (Rating 6)", {
      subtype: "CYBER_HEADWARE",
      avail: 6, availDef: "6L", price: 210000, essence: 3.0,
      description: "The cyberjack harnesses the immense processing power of the brain to take on Matrix protocols and encryption schemes. Rating 6: Data Processing 9, Firewall 8. Also functions as a standard datajack. Allows special Matrix Edge Actions.",
    }),

    // Datajack
    cyberware("Datajack", {
      subtype: "CYBER_HEADWARE",
      avail: 2, price: 1000, essence: 0.1,
      description: "A datajack gives you a direct neural interface. It also comes with a retractable spool of micro-cable (a meter long) that lets you directly interface with any electronic device via a universal access cable. Two datajack users can string a fiberoptic cable between themselves to conduct a private mental communication immune to radio interception or eavesdropping.",
    }),

    // Datalock
    cyberware("Datalock (Rating 1-12)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, price: 1000, priceDef: "Rating x 1,000", essence: 0.1,
      needsRating: true, rating: 1,
      description: "This special datajack turns the character into a walking data safe. The datalock has a Device Rating equal to its own rating, and it protects the data from anyone not authorized to access it. Datalocks are not wireless enabled; they can only be accessed via universal data connector. The bearer does not have mental access to the data.",
    }),

    // Olfactory Booster
    cyberware("Olfactory Booster (Rating 1-3)", {
      subtype: "CYBER_HEADWARE",
      avail: 3, price: 4000, priceDef: "Rating x 4,000", essence: 0.2,
      needsRating: true, rating: 1,
      description: "This cybersnout enhances, identifies, and records smells, and can play them back later. The user gains a bonus Edge for all scent-based Perception tests. Wireless: Add the booster's rating as a dice pool modifier to scent-based Perception tests.",
    }),

    // Skilljack
    cyberware("Skilljack (Rating 1-6)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, price: 20000, priceDef: "Rating x 20,000", essence: 0.1,
      needsRating: true, rating: 1,
      description: "This headware interprets knowsofts and linguasofts for your brain so you can use them as though they were your own. It can also run activesofts. The total of all skills running on a skilljack cannot exceed its rating x 2, and the maximum rating for a single skill is the skilljack's rating. You can't use Edge with skills you have through a skilljack. Wireless: Total Rating limit increases to rating x 4, and Edge can be used.",
    }),

    // Taste Booster
    cyberware("Taste Booster (Rating 1-3)", {
      subtype: "CYBER_HEADWARE",
      avail: 3, price: 3000, priceDef: "Rating x 3,000", essence: 0.2,
      needsRating: true, rating: 1,
      description: "The taste booster enhances your taste buds and lets you experience gustatory data in AR and VR environments. The user gains a bonus Edge for all taste-based Perception tests. Wireless: Add the booster's rating as a dice pool modifier to taste-based Perception tests.",
    }),

    // Tooth Compartment
    cyberware("Tooth Compartment", {
      subtype: "CYBER_HEADWARE",
      avail: 4, price: 800, essence: 0,
      description: "The oldest cyberware on the market. Storage model is used to smuggle really tiny contraband, no larger than five millimeters on a side. The breakable model triggers a linked effect (such as starting a tracking signal or releasing deadly poison) with a wireless signal, or when you bite down hard on the tooth.",
    }),

    // Ultrasound Sensor
    cyberware("Ultrasound Sensor (Headware)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, price: 3600, essence: 0.3,
      description: "This cyberware is exactly like the ultrasound sensor. When active, it replaces your normal vision. It can be switched between active sonar, passive sonar, and off with a Minor Action. Using ultrasound in dim light or total darkness offers a bonus Edge against opponents who can't see.",
    }),

    // Voice Modulator
    cyberware("Voice Modulator (Rating 1-3)", {
      subtype: "CYBER_HEADWARE",
      avail: 4, availDef: "4L", price: 5000, priceDef: "Rating x 5,000", essence: 0.2,
      needsRating: true, rating: 1,
      description: "This implant gives you perfect pitch and enormous vocal flexibility and distortion capabilities. You can speak with increased volume (up to 100 dB), shift your pitch, and make uncanny vocal impressions. The user gains a bonus Edge for sound-based Con skill tests. Wireless: Add the rating as a dice pool modifier for sound-based Con skill tests.",
    }),
  ],

  "eyeware": [
    // Cybereyes
    cyberware("Cybereyes (Rating 1)", {
      subtype: "CYBER_EYEWARE",
      avail: 2, price: 1000, essence: 0.1, capacity: 1,
      description: "The basic cybereyes system features 20/20 vision for both eyes, an image link, and a built-in camera. Capacity 1 for vision enhancements.",
    }),
    cyberware("Cybereyes (Rating 2)", {
      subtype: "CYBER_EYEWARE",
      avail: 2, price: 4000, essence: 0.2, capacity: 4,
      description: "Cybereyes system with 20/20 vision, image link, built-in camera. Capacity 4 for vision enhancements.",
    }),
    cyberware("Cybereyes (Rating 3)", {
      subtype: "CYBER_EYEWARE",
      avail: 3, price: 6000, essence: 0.3, capacity: 8,
      description: "Cybereyes system with 20/20 vision, image link, built-in camera. Capacity 8 for vision enhancements.",
    }),
    cyberware("Cybereyes (Rating 4)", {
      subtype: "CYBER_EYEWARE",
      avail: 3, price: 10000, essence: 0.4, capacity: 12,
      description: "Cybereyes system with 20/20 vision, image link, built-in camera. Capacity 12 for vision enhancements.",
    }),
    cyberware("Cybereyes (Rating 5)", {
      subtype: "CYBER_EYEWARE",
      avail: 3, price: 16000, essence: 0.5, capacity: 16,
      description: "Cybereyes system with 20/20 vision, image link, built-in camera. Capacity 16 for vision enhancements.",
    }),

    // Ocular Drone
    cyberware("Ocular Drone", {
      subtype: "CYBER_EYEWARE",
      avail: 3, price: 6000, essence: 0.3,
      description: "A small drone (treat as Horizon Flying Eye) placed in your ocular cavity. Functions as a normal cybereye with enhancements until removed and controlled as a drone. When out, you gain Blindness I Status. If both eyes are replaced, Blindness III while drones operate separately. Includes image link and Capacity 4 for vision enhancements.",
    }),

    // Retinal Duplication
    cyberware("Retinal Duplication (Rating 1-6)", {
      subtype: "CYBER_EYEWARE",
      avail: 5, availDef: "5I", price: 20000, priceDef: "Rating x 20,000", essence: 0.1,
      needsRating: true, rating: 1,
      description: "This highly illegal modification can be loaded with a recording of someone else's retina to create an almost perfect reproduction. Make an Opposed test between the retinal duplication rating and the retinal scanner rating. The system can actively store a number of retinas equal to its rating. Changing retinal patterns requires 1 minute.",
    }),
  ],

  "earware": [
    // Cyberears
    cyberware("Cyberears (Rating 1)", {
      subtype: "CYBER_EARWARE",
      avail: 2, price: 1000, essence: 0.1, capacity: 1,
      description: "Cyberears replace the inner ear, offering hearing within normal ranges (like an omnidirectional microphone), a sound link, and Capacity for modifications. All cyberears provide a bonus Edge vs. a target who has something interfering with their hearing.",
    }),
    cyberware("Cyberears (Rating 2)", {
      subtype: "CYBER_EARWARE",
      avail: 2, price: 3000, essence: 0.2, capacity: 4,
      description: "Cyberears with sound link and Capacity 4 for audio enhancements. Provides bonus Edge vs. targets with impaired hearing.",
    }),
    cyberware("Cyberears (Rating 3)", {
      subtype: "CYBER_EARWARE",
      avail: 3, price: 4500, essence: 0.3, capacity: 8,
      description: "Cyberears with sound link and Capacity 8 for audio enhancements. Provides bonus Edge vs. targets with impaired hearing.",
    }),
    cyberware("Cyberears (Rating 4)", {
      subtype: "CYBER_EARWARE",
      avail: 3, price: 7500, essence: 0.4, capacity: 12,
      description: "Cyberears with sound link and Capacity 12 for audio enhancements. Provides bonus Edge vs. targets with impaired hearing.",
    }),
    cyberware("Cyberears (Rating 5)", {
      subtype: "CYBER_EARWARE",
      avail: 3, price: 11000, essence: 0.5, capacity: 16,
      description: "Cyberears with sound link and Capacity 16 for audio enhancements. Provides bonus Edge vs. targets with impaired hearing.",
    }),

    // Balance Augmenter
    cyberware("Balance Augmenter", {
      subtype: "CYBER_EARWARE",
      avail: 3, price: 8000, essence: 0.1,
      description: "The balance augmenter enhances the inner ear's natural balance mechanism. You receive one bonus die on all tests involving balance, such as climbing, walking across a narrow platform, landing after a jump, and so on.",
    }),

    // Damper
    cyberware("Damper", {
      subtype: "CYBER_EARWARE",
      avail: 2, price: 2250, essence: 0.1,
      description: "This implant protects the user from sudden increases in sound as well as damaging sound levels. The damper diminishes the Deafened status by 1 level for any instance in which it is inflicted.",
    }),

    // Sound Link
    cyberware("Sound Link (Implanted)", {
      subtype: "CYBER_EARWARE",
      avail: 2, price: 1000, essence: 0.1,
      description: "The audio equivalent of image link, sound link can play audio from linked sources within the user's PAN directly into the user's cyberears. A common component of immersive AR environments.",
    }),
  ],

  "bodyware": [
    // Bone Lacing
    cyberware("Bone Lacing (Plastic)", {
      subtype: "CYBER_BODYWARE",
      avail: 3, availDef: "3L", price: 8000, essence: 0.5,
      description: "Bones laced with lattice chains of reinforcing plastics. +1 Body when resisting physical damage. Unarmed damage becomes Physical. +1 DV and +1 Close AR for unarmed attacks. +1 Defense Rating (natural). Incompatible with bone density augmentation.",
    }),
    cyberware("Bone Lacing (Aluminium)", {
      subtype: "CYBER_BODYWARE",
      avail: 4, availDef: "4L", price: 18000, essence: 1.0,
      description: "Bones laced with lattice chains of aluminium. +2 Body when resisting physical damage. Unarmed damage becomes Physical. +2 DV and +2 Close AR for unarmed attacks. +1 Defense Rating (natural). Incompatible with bone density augmentation.",
    }),
    cyberware("Bone Lacing (Titanium)", {
      subtype: "CYBER_BODYWARE",
      avail: 6, availDef: "6L", price: 30000, essence: 1.5,
      description: "Bones laced with lattice chains of titanium. +2 Body when resisting physical damage. Unarmed damage becomes Physical. +2 DV and +3 Close AR for unarmed attacks. +2 Defense Rating (natural). Incompatible with bone density augmentation.",
    }),

    // Dermal Plating
    cyberware("Dermal Plating (Rating 1-4)", {
      subtype: "CYBER_BODYWARE",
      avail: 4, availDef: "4L", price: 4000, priceDef: "Rating x 4,000", essence: 0.3,
      needsRating: true, rating: 1,
      description: "Hard plastic and ceramic fiber plates bonded to the user's skin. Clearly visible but can be cosmetically stylized. Provides a Defense Rating bonus equal to its rating. Essence cost: Rating x 0.3. Cannot be combined with orthoskin or other skin augmentations providing a Defense Rating bonus.",
    }),

    // Fingertip Compartment
    cyberware("Fingertip Compartment", {
      subtype: "CYBER_BODYWARE",
      avail: 2, price: 3000, essence: 0.1,
      description: "Hidden in the hollowed-out last joint of one finger, with a catch that allows the fingernail to be lifted as an access panel. Allows storage of micro-sized items (micro-drone, RFID tag, datachip). Concealability threshold 8. Inserting/removing an object takes a Major Action. Can hold a monofilament whip with fingertip as control weight. Wireless: Minor Action to insert/remove items.",
    }),

    // Internal Air Tank
    cyberware("Internal Air Tank (Rating 1-4)", {
      subtype: "CYBER_BODYWARE",
      avail: 2, price: 4500, priceDef: "Rating x 4,500", essence: 0.25,
      needsRating: true, rating: 1,
      description: "Replaces part of one lung with a pressurized internal air reserve allowing you to hold your breath for up to (rating) hours. Provides complete protection from Inhalation-vector toxin attacks while holding breath. Activating/deactivating is a Minor Action. Refilling takes 5 minutes with pressurized air or 6 hours of normal breathing.",
    }),

    // Muscle Replacement
    cyberware("Muscle Replacement (Rating 1-4)", {
      subtype: "CYBER_BODYWARE",
      avail: 3, availDef: "3L", price: 30000, priceDef: "Rating x 30,000", essence: 0.7,
      needsRating: true, rating: 1,
      description: "Vat-grown synthetic muscles replace or augment your own. Increases both Strength and Agility attributes by its rating. Essence cost: Rating x 0.7. Incompatible with muscle augmentation or muscle toner bioware.",
    }),

    // Reaction Enhancers
    cyberware("Reaction Enhancers (Rating 1-4)", {
      subtype: "CYBER_BODYWARE",
      avail: 4, availDef: "4L", price: 15000, priceDef: "Rating x 15,000", essence: 0.3,
      needsRating: true, rating: 1,
      description: "Replaces specific vertebrae with segments of superconducting material. Adds the rating to your Reaction attribute (adjust Initiative Score accordingly). Essence cost: Rating x 0.3. Incompatible with all other Reaction enhancements including wired reflexes. Wireless: Compatible with wireless wired reflexes.",
    }),

    // Skillwires
    cyberware("Skillwires (Rating 1-6)", {
      subtype: "CYBER_BODYWARE",
      avail: 4, price: 20000, priceDef: "Rating x 20,000", essence: 0.1,
      needsRating: true, rating: 1,
      description: "A system of neuromuscular controllers that overlay the body's natural nervous system, capable of aiding or completely overriding muscular movement. Allows you to use activesofts with a rating up to your skillwire's rating, but only if running on your implanted skilljack. Essence cost: Rating x 0.1. Wireless: All skills used with skillwires receive a +1 dice pool modifier.",
    }),

    // Smuggling Compartment
    cyberware("Smuggling Compartment (Body)", {
      subtype: "CYBER_BODYWARE",
      avail: 3, price: 7500, essence: 0.2,
      description: "Located in parts of the body that can be hollowed out/replaced (ribs, hip bones, shoulder blades, etc.). Allows storage of small and miniature items (nothing bigger than a light pistol). Concealability threshold 8. Inserting/retrieving an object requires a Major Action. Wireless: Minor Action to insert/retrieve.",
    }),

    // Wired Reflexes
    cyberware("Wired Reflexes (Rating 1)", {
      subtype: "CYBER_BODYWARE",
      avail: 3, availDef: "3L", price: 40000, essence: 1.0,
      description: "Highly invasive operation adds neural boosters and adrenaline stimulators. Rating 1: +1 Reaction, +1 Initiative Die, +1 Minor Action. Activating manually requires a Major Action; wirelessly is a Minor Action. Incompatible with other Reaction or Initiative augmentations. Wireless: Compatible with wireless reaction enhancers; activation/deactivation is a Minor Action.",
    }),
    cyberware("Wired Reflexes (Rating 2)", {
      subtype: "CYBER_BODYWARE",
      avail: 3, availDef: "3L", price: 150000, essence: 2.0,
      description: "Rating 2: +2 Reaction, +2 Initiative Dice, +2 Minor Actions. Activating manually requires a Major Action; wirelessly is a Minor Action. Incompatible with other Reaction or Initiative augmentations.",
    }),
    cyberware("Wired Reflexes (Rating 3)", {
      subtype: "CYBER_BODYWARE",
      avail: 4, availDef: "4L", price: 250000, essence: 3.0,
      description: "Rating 3: +3 Reaction, +3 Initiative Dice, +3 Minor Actions. Activating manually requires a Major Action; wirelessly is a Minor Action. Incompatible with other Reaction or Initiative augmentations.",
    }),
    cyberware("Wired Reflexes (Rating 4)", {
      subtype: "CYBER_BODYWARE",
      avail: 6, availDef: "6L", price: 450000, essence: 4.0,
      description: "Rating 4: +4 Reaction, +4 Initiative Dice, +4 Minor Actions. Activating manually requires a Major Action; wirelessly is a Minor Action. Incompatible with other Reaction or Initiative augmentations.",
    }),
  ],

  "cyberlimbs": [
    // Cyberskull
    cyberware("Cyberskull (Synthetic)", {
      subtype: "CYBER_LIMBS",
      avail: 5, price: 15000, essence: 0.75,
      description: "The skull replaces the bones and muscles of the head, face, and neck. Includes a cyberjaw that can deliver a powerful bite (5P, AR 2/—/—/—/—). +1 Physical Monitor box. Synthetic model: 2 Headware Implant capacity.",
    }),
    cyberware("Cyberskull (Obvious)", {
      subtype: "CYBER_LIMBS",
      avail: 5, price: 10000, essence: 0.75,
      description: "The skull replaces the bones and muscles of the head, face, and neck. Includes a cyberjaw that can deliver a powerful bite (5P, AR 2/—/—/—/—). +1 Physical Monitor box. Obvious model: 4 Headware Implant capacity.",
    }),

    // Cybertorso
    cyberware("Cybertorso (Synthetic)", {
      subtype: "CYBER_LIMBS",
      avail: 4, price: 25000, essence: 1.5,
      description: "Replaces bones and muscles of the body's core below the neck to the genital region. Internal organs are not replaced but protected in individual compartments. Synthetic design does its best to appear natural. +1 Physical Monitor box. 5 Cyberlimb Implant capacity.",
    }),
    cyberware("Cybertorso (Obvious)", {
      subtype: "CYBER_LIMBS",
      avail: 4, price: 20000, essence: 1.5,
      description: "Replaces bones and muscles of the body's core. Obvious torsos remove genitalia and genital function with the exception of excretion. +1 Physical Monitor box. 10 Cyberlimb Implant capacity.",
    }),

    // Cyberarm - Full
    cyberware("Cyberarm, Full (Synthetic)", {
      subtype: "CYBER_LIMBS",
      avail: 4, price: 20000, essence: 1.0,
      description: "Full arm replacement from the shoulder joint down. Synthetic model. +1 Physical Monitor, Agility 2 (Artificial), Strength 2 (Artificial). 8 Cyberlimb Implant capacity.",
    }),
    cyberware("Cyberarm, Full (Obvious)", {
      subtype: "CYBER_LIMBS",
      avail: 4, price: 15000, essence: 1.0,
      description: "Full arm replacement from the shoulder joint down. Obvious model. +1 Physical Monitor, Agility 2 (Artificial), Strength 2 (Artificial). 15 Cyberlimb Implant capacity.",
    }),

    // Cyberarm - Forearm
    cyberware("Cyberarm, Forearm (Synthetic)", {
      subtype: "CYBER_LIMBS",
      avail: 3, price: 12000, essence: 0.45,
      description: "Partial arm replacement, forearm only. Synthetic model. +0.5 Physical Monitor, Agility 2 (Artificial), Strength 2 (Artificial). 5 Cyberlimb Implant capacity.",
    }),
    cyberware("Cyberarm, Forearm (Obvious)", {
      subtype: "CYBER_LIMBS",
      avail: 3, price: 10000, essence: 0.45,
      description: "Partial arm replacement, forearm only. Obvious model. +0.5 Physical Monitor, Agility 2 (Artificial), Strength 2 (Artificial). 10 Cyberlimb Implant capacity.",
    }),

    // Cyberarm - Hand
    cyberware("Cyberarm, Hand (Synthetic)", {
      subtype: "CYBER_LIMBS",
      avail: 3, price: 5000, essence: 0.25,
      description: "Hand replacement only. Synthetic model. 2 Cyberlimb Implant capacity.",
    }),
    cyberware("Cyberarm, Hand (Obvious)", {
      subtype: "CYBER_LIMBS",
      avail: 3, price: 6000, essence: 0.25,
      description: "Hand replacement only. Obvious model. 4 Cyberlimb Implant capacity.",
    }),

    // Cyberleg - Full
    cyberware("Cyberleg, Full (Synthetic)", {
      subtype: "CYBER_LIMBS",
      avail: 4, price: 20000, essence: 1.0,
      description: "Full leg replacement from the hip joint down. Synthetic model. +1 Physical Monitor, Agility 2 (Artificial), Strength 2 (Artificial). 10 Cyberlimb Implant capacity.",
    }),
    cyberware("Cyberleg, Full (Obvious)", {
      subtype: "CYBER_LIMBS",
      avail: 4, price: 15000, essence: 1.0,
      description: "Full leg replacement from the hip joint down. Obvious model. +1 Physical Monitor, Agility 2 (Artificial), Strength 2 (Artificial). 20 Cyberlimb Implant capacity.",
    }),

    // Cyberleg - Lower
    cyberware("Cyberleg, Lower (Synthetic)", {
      subtype: "CYBER_LIMBS",
      avail: 4, price: 12000, essence: 0.45,
      description: "Lower leg replacement below the knee. Synthetic model. +0.5 Physical Monitor, Agility 2 (Artificial), Strength 2 (Artificial). 6 Cyberlimb Implant capacity.",
    }),
    cyberware("Cyberleg, Lower (Obvious)", {
      subtype: "CYBER_LIMBS",
      avail: 4, price: 10000, essence: 0.45,
      description: "Lower leg replacement below the knee. Obvious model. +0.5 Physical Monitor, Agility 2 (Artificial), Strength 2 (Artificial). 12 Cyberlimb Implant capacity.",
    }),

    // Cyberleg - Foot
    cyberware("Cyberleg, Foot (Synthetic)", {
      subtype: "CYBER_LIMBS",
      avail: 3, price: 6000, essence: 0.25,
      description: "Foot replacement only. Synthetic model. 2 Cyberlimb Implant capacity.",
    }),
    cyberware("Cyberleg, Foot (Obvious)", {
      subtype: "CYBER_LIMBS",
      avail: 3, price: 5000, essence: 0.25,
      description: "Foot replacement only. Obvious model. 4 Cyberlimb Implant capacity.",
    }),
  ],

  "cyberlimb-enhancements": [
    // Attribute Increase
    cyberware("Attribute Increase (Agility)", {
      type: "ACCESSORY", subtype: "CYBER_LIMB_ENHANCEMENT",
      avail: 1, price: 5000, priceDef: "Rating x 5,000", essence: 0,
      needsRating: true, rating: 1,
      description: "Increases the Agility of the cyberlimb user. Maximum augmented increase of 4. Uses Cyberlimb Implant capacity equal to rating. Increases only apply when the limb is used; no effect for whole-body activities (sprinting, climbing, swimming). No effect in a cyberskull.",
    }),
    cyberware("Attribute Increase (Strength)", {
      type: "ACCESSORY", subtype: "CYBER_LIMB_ENHANCEMENT",
      avail: 1, price: 5000, priceDef: "Rating x 5,000", essence: 0,
      needsRating: true, rating: 1,
      description: "Increases the Strength of the cyberlimb user. Maximum augmented increase of 4. Uses Cyberlimb Implant capacity equal to rating. Increases only apply when the limb is used; no effect for whole-body activities (sprinting, climbing, swimming). No effect in a cyberskull.",
    }),

    // Armor Increase
    cyberware("Armor Increase (Rating 1-8)", {
      type: "ACCESSORY", subtype: "CYBER_LIMB_ENHANCEMENT",
      avail: 1, availDef: "Rating L", price: 5000, priceDef: "Rating x 5,000", essence: 0,
      needsRating: true, rating: 1,
      description: "Increases your Defense Rating at all times by the rating. Uses Cyberlimb Implant capacity equal to rating. Unlike Agility/Strength increases, armor increases always apply.",
    }),

    // Cyber Slide
    cyberware("Cyber Slide", {
      type: "ACCESSORY", subtype: "CYBER_LIMB_ACCESSORY",
      avail: 5, availDef: "5L", price: 3000, essence: 0,
      description: "Functions the same as a hidden arm slide. Uses 3 Cyberlimb Implant capacity.",
    }),

    // Cyber Holster
    cyberware("Cyber Holster", {
      type: "ACCESSORY", subtype: "CYBER_LIMB_ACCESSORY",
      avail: 4, price: 2000, essence: 0,
      description: "Holds a weapon for convenience, not concealment. The holster should be reasonably appropriate to the size of the limb. Uses 5 Cyberlimb Implant capacity.",
    }),

    // Hydraulic Jacks
    cyberware("Hydraulic Jacks (Rating 1-8)", {
      type: "ACCESSORY", subtype: "CYBER_LIMB_ACCESSORY",
      avail: 4, price: 2500, essence: 0,
      needsRating: true, rating: 1,
      description: "For these to function properly, you need two of them, one in each leg, with identical ratings. The user can make Jumping tests (Athletics + Strength) and add the rating of the jacks to the dice pool. Each hit adds 0.1m to a vertical leap and 0.2m to a horizontal leap. Uses Cyberlimb Implant capacity equal to rating.",
    }),
  ],

  "cyber-implant-weapons": [
    // Implanted Firearms
    cyberware("Implanted Hold-out Pistol", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 3, availDef: "3L", price: 2000, essence: 0.1,
      description: "The implant only makes the space; the firearm must be purchased separately. All forms of pistols increase their Concealability by 2 when implanted. Uses 2 Cyberlimb Implant capacity.",
    }),
    cyberware("Implanted Light Pistol", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 3, availDef: "3L", price: 3000, essence: 0.25,
      description: "The implant only makes the space; the firearm must be purchased separately. All forms of pistols increase their Concealability by 2 when implanted. Uses 4 Cyberlimb Implant capacity.",
    }),
    cyberware("Implanted Machine Pistol", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 4, availDef: "4L", price: 3500, essence: 0.5,
      description: "The implant only makes the space; the firearm must be purchased separately. All forms of pistols increase their Concealability by 2 when implanted. Uses 6 Cyberlimb Implant capacity.",
    }),
    cyberware("Implanted Heavy Pistol", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 4, availDef: "4L", price: 4300, essence: 0.5,
      description: "The implant only makes the space; the firearm must be purchased separately. All forms of pistols increase their Concealability by 2 when implanted. Uses 6 Cyberlimb Implant capacity.",
    }),
    cyberware("Implanted Submachine Gun", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 5, availDef: "5L", price: 4800, essence: 1.0,
      description: "The implant only makes the space; the firearm must be purchased separately. Larger guns receive no change to Concealability. Uses 8 Cyberlimb Implant capacity.",
    }),
    cyberware("Implanted Shotgun", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 5, availDef: "5L", price: 4800, essence: 1.25,
      description: "The implant only makes the space; the firearm must be purchased separately. Larger guns receive no change to Concealability. Uses 10 Cyberlimb Implant capacity.",
    }),
    cyberware("Implanted Launcher", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 6, availDef: "6I", price: 24000, essence: 1.5,
      description: "Cyber launcher includes the weapon (similar to MGL-12). Uses 15 Cyberlimb Implant capacity.",
    }),
    cyberware("External Clip Port", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 1, price: 1000, essence: 0.1,
      description: "External access to implanted weapon clip. Uses 1 Cyberlimb Implant capacity.",
    }),

    // Cyberlimb Implant Melee Weapons
    cyberware("Cyberjaw", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 2, price: 1500, essence: 0.1,
      description: "Adds extra biting power. Damage 5P, Attack Rating 2/—/—/—/—. Uses Close Combat (Unarmed). Uses 1 Headware Implant capacity.",
    }),
    cyberware("Hardening", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 2, price: 2500, essence: 0.1,
      description: "The skin/limb is hardened to make it more club-like and damaging. Unarmed DV 3P (increase to 4P if Strength 7+), Close Attack Rating 6. Uses 1 Cyberlimb Implant capacity.",
    }),
    cyberware("Shock Limb", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 3, price: 5000, essence: 0.25,
      description: "Electrodes built into strategic points deliver a taser-like jolt. Damage 4S(e), Attack Rating 5/—/—/—/—. Uses Close Combat (Unarmed). Uses 1 Cyberlimb Implant capacity.",
    }),
    cyberware("Handblade", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 4, availDef: "4I", price: 2000, essence: 0.15,
      description: "A simple blade built into the hand, placed opposite the thumb for swinging cuts. Damage 4S(e), Attack Rating 6/—/—/—/—. Uses Close Combat (Blades). Uses 1 Cyberlimb Implant capacity. Retractable version: 2 capacity, 0.25 Essence, 2,500 nuyen.",
    }),
    cyberware("Handblade (Retractable)", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 4, availDef: "4I", price: 2500, essence: 0.25,
      description: "A retractable blade built into the hand. Damage 4S(e), Attack Rating 6/—/—/—/—. Uses Close Combat (Blades). Uses 2 Cyberlimb Implant capacity. Concealability threshold 8 when retracted.",
    }),
    cyberware("Hand Razors", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 3, availDef: "3I", price: 1000, essence: 0.15,
      description: "Go under the fingernails or replace them, for clawing attacks. Damage 4S(e), Attack Rating 6/—/—/—/—. Uses Close Combat (Blades). Uses 1 Cyberlimb Implant capacity.",
    }),
    cyberware("Hand Razors (Retractable)", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 3, availDef: "3I", price: 1250, essence: 0.25,
      description: "Retractable hand razors. Damage 4S(e), Attack Rating 6/—/—/—/—. Uses Close Combat (Blades). Uses 2 Cyberlimb Implant capacity. Concealability threshold 8 when retracted.",
    }),
    cyberware("Spurs", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 3, availDef: "3I", price: 3000, essence: 0.15,
      description: "Spikes placed on the wrist or back of knuckles for stabbing puncture. Damage 3P, Attack Rating 7/—/—/—/—. Uses Close Combat (Blades). Uses 1 Cyberlimb Implant capacity.",
    }),
    cyberware("Spurs (Retractable)", {
      subtype: "CYBER_IMPLANT_WEAPON",
      avail: 3, availDef: "3I", price: 5000, essence: 0.25,
      description: "Retractable spurs. Damage 3P, Attack Rating 7/—/—/—/—. Uses Close Combat (Blades). Uses 3 Cyberlimb Implant capacity. Concealability threshold 8 when retracted.",
    }),
  ],
};

// ── Compendium population ────────────────────────────────────────────

async function populateCompendium(packName, items) {
  const packKey = `${MODULE_ID}.${packName}`;
  const pack = game.packs.get(packKey);
  if (!pack) {
    console.warn(`${MODULE_ID} | Pack '${packKey}' not found`);
    return;
  }

  const wasLocked = pack.locked;
  if (wasLocked) {
    await pack.configure({ locked: false });
  }

  try {
    const existing = await pack.getDocuments();
    const existingNames = new Set(existing.map((i) => i.name));

    for (const itemData of items) {
      if (existingNames.has(itemData.name)) continue;
      await Item.create(itemData, { pack: packKey });
      console.log(`${MODULE_ID} | Created: ${itemData.name} in ${packName}`);
    }
  } finally {
    if (wasLocked) {
      await pack.configure({ locked: true });
    }
  }
}

// ── Initialization ───────────────────────────────────────────────────

Hooks.once("init", () => {
  console.log(`${MODULE_ID} | Initializing SR6 Core Cyberware Compendium`);
});

Hooks.once("ready", async () => {
  if (!game.user.isGM) return;
  console.log(`${MODULE_ID} | Populating cyberware compendiums...`);

  for (const [packName, items] of Object.entries(CYBERWARE)) {
    await populateCompendium(packName, items);
  }

  console.log(`${MODULE_ID} | Done`);
});
