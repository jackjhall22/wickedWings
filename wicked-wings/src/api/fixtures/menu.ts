import type { MenuData } from "@/api/types"

export const menuFixture: MenuData = {
  wings: {
    pricingTiers: [
      { label: "6 pc", pieces: 6, price: 9.99 },
      { label: "12 pc", pieces: 12, price: 17.99 },
      { label: "24 pc", pieces: 24, price: 32.99 },
      { label: "The Tailgate (50 pc)", pieces: 50, price: 65.99 },
    ],
    flavors: [
      {
        id: "classic-buffalo",
        name: "Classic Buffalo",
        description:
          "The original. Tangy, buttery heat that hits just right. A crowd favorite for a reason.",
        heatLevel: 3,
      },
      {
        id: "mango-habanero",
        name: "Mango Habanero",
        description:
          "Sweet tropical mango collides with the searing fury of habanero. A fiery fruit punch.",
        heatLevel: 4,
      },
      {
        id: "garlic-parmesan",
        name: "Garlic Parmesan",
        description:
          "Rich, savory garlic butter tossed with shaved parmesan. The cooler side of flavor.",
        heatLevel: 1,
      },
      {
        id: "widowmaker",
        name: "The Widowmaker",
        description:
          "We warned you. Ghost pepper and Carolina Reaper extract. Waiver required. Hall of Flame awaits the brave.",
        heatLevel: 5,
        requiresWaiver: true,
        highlight: "hall-of-flame",
      },
    ],
  },
  appetizers: [
    {
      id: "nachos",
      name: "Stadium Nachos",
      description:
        "Loaded tortilla chips with queso, jalapeños, sour cream, and pico de gallo.",
      price: 14.99,
    },
    {
      id: "fried-pickles",
      name: "Fried Pickles",
      description: "Crispy beer-battered pickle slices with ranch dipping sauce.",
      price: 9.99,
    },
    {
      id: "pretzel-bites",
      name: "Pretzel Bites",
      description: "Soft salted pretzel bites served with beer cheese and spicy mustard.",
      price: 11.99,
    },
  ],
  burgers: [
    {
      id: "wicked-smash",
      name: "The Wicked Smash",
      description:
        "Double smash patty, American cheese, caramelized onions, pickles, and secret sauce on a brioche bun.",
      price: 16.99,
    },
    {
      id: "crispy-buffalo",
      name: "Crispy Buffalo Sandwich",
      description:
        "Crispy fried chicken breast tossed in Classic Buffalo sauce, lettuce, tomato, and blue cheese slaw.",
      price: 15.99,
    },
  ],
  drafts: [
    {
      id: "wicked-lager",
      name: "Wicked Lager",
      description: "Our house lager — crisp, clean, and ice cold.",
      price16oz: 5,
      price22oz: 7,
    },
    {
      id: "neon-haze-ipa",
      name: "Neon Haze IPA",
      description: "A hazy New England IPA from a local Austin brewery. Citrus-forward with a soft finish.",
      price16oz: 7,
      price22oz: 9,
      isLocal: true,
    },
    {
      id: "midnight-stout",
      name: "Midnight Stout",
      description: "Dark and roasty with notes of coffee and dark chocolate.",
      price16oz: 7,
      price22oz: 9,
    },
  ],
  cocktails: [
    {
      id: "electric-margarita",
      name: "Electric Margarita",
      description:
        "Tequila blanco, fresh lime, blue curaçao, agave. Electric blue and dangerously smooth.",
      price: 12,
    },
    {
      id: "hail-mary",
      name: "The Hail Mary",
      description:
        "Spiced rum, ginger beer, jalapeño syrup, fresh lime. The play that wins the game.",
      price: 14,
    },
  ],
}
