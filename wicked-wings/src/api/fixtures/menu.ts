import type { MenuData } from "@/api/types"

export const menuFixture: MenuData = {
  wings: {
    styles: ["Boneless", "Bone-In (Breaded or Naked)"],
    note: "Jumbo sized wings — fresh, never frozen, made to order. Served with seasoned fries or tots. Substitute sides for $1.00. Price based on current market value.",
    flavors: [
      // Wet sauces
      {
        id: "wicked-hot",
        name: "Wicked Hot",
        description: "Our hottest wet sauce. Five-alarm heat for the fearless.",
        heatLevel: 5,
        category: "wet",
        highlight: "hall-of-flame",
      },
      {
        id: "extra-hot",
        name: "Extra Hot",
        description: "Serious heat with a tangy kick. Not for beginners.",
        heatLevel: 4,
        category: "wet",
      },
      {
        id: "jamaican-jerk",
        name: "Jamaican Jerk",
        description: "Caribbean spices and slow-burn heat. Island flavor with a punch.",
        heatLevel: 3,
        category: "wet",
      },
      {
        id: "hot",
        name: "Hot",
        description: "Classic wing heat. The go-to for spice lovers.",
        heatLevel: 2,
        category: "wet",
      },
      {
        id: "sweet-red-chili",
        name: "Sweet Red Chili",
        description: "Sweet with a warm chili finish. A crowd pleaser.",
        heatLevel: 2,
        category: "wet",
      },
      {
        id: "hot-honey",
        name: "Hot Honey",
        description: "Sticky honey meets spicy heat. Sweet fire on every bite.",
        heatLevel: 2,
        category: "wet",
      },
      {
        id: "mango-habanero",
        name: "Mango Habanero",
        description: "Sweet tropical mango collides with the searing fury of habanero.",
        heatLevel: 2,
        category: "wet",
      },
      {
        id: "buffalo",
        name: "Buffalo",
        description: "The original. Tangy, buttery heat that hits just right.",
        heatLevel: 1,
        category: "wet",
      },
      {
        id: "buffalo-bbq",
        name: "Buffalo BBQ",
        description: "Buffalo tang meets smoky BBQ. Best of both worlds.",
        heatLevel: 1,
        category: "wet",
      },
      {
        id: "kickin-bourbon",
        name: "Kickin' Bourbon",
        description: "Rich bourbon glaze with a subtle spicy finish.",
        heatLevel: 1,
        category: "wet",
      },
      {
        id: "spicy-lemon-pepper",
        name: "Spicy Lemon Pepper",
        description: "Bright citrus and cracked pepper with a spicy edge.",
        heatLevel: 1,
        category: "wet",
      },
      {
        id: "garlic-parmesan",
        name: "Garlic Parmesan",
        description: "Rich, savory garlic butter tossed with parmesan. The cooler side of flavor.",
        heatLevel: 0,
        category: "wet",
      },
      {
        id: "bbq",
        name: "BBQ",
        description: "Classic smoky barbecue. Simple, sweet, and reliable.",
        heatLevel: 0,
        category: "wet",
      },
      {
        id: "golden-bbq",
        name: "Golden BBQ",
        description: "A tangy, mustard-forward BBQ with a golden hue.",
        heatLevel: 0,
        category: "wet",
      },
      {
        id: "sweet-teriyaki",
        name: "Sweet Teriyaki",
        description: "Sticky-sweet Japanese-inspired glaze. Savory and addictive.",
        heatLevel: 0,
        category: "wet",
      },
      {
        id: "garlic-ranch",
        name: "Garlic Ranch",
        description: "Creamy ranch with a roasted garlic twist.",
        heatLevel: 0,
        category: "wet",
      },
      // Dry rubs
      {
        id: "dry-spicy-ranch",
        name: "Spicy Ranch",
        description: "Tangy ranch seasoning with a peppery bite.",
        heatLevel: 1,
        category: "dry",
      },
      {
        id: "dry-lemon-pepper",
        name: "Lemon Pepper",
        description: "Bright citrus and cracked black pepper. A dry rub classic.",
        heatLevel: 1,
        category: "dry",
      },
      {
        id: "dry-honey-garlic",
        name: "Honey Garlic",
        description: "Sweet honey and savory garlic in a crispy dry coat.",
        heatLevel: 0,
        category: "dry",
      },
      {
        id: "dry-garlic-herb",
        name: "Garlic & Herb",
        description: "Aromatic herbs and roasted garlic. Light and flavorful.",
        heatLevel: 0,
        category: "dry",
      },
    ],
  },

  starters: [
    {
      id: "loaded-waffle-fries",
      name: "Loaded Waffle Fries",
      description: "Chili, Queso, Salsa, Jalapenos, Shredded Cheese & Sour Cream",
      price: 8.99,
    },
    {
      id: "breadsticks",
      name: "Breadsticks",
      description: "Served with Queso & Marinara",
      price: 5.99,
    },
    {
      id: "fried-mushrooms",
      name: "Fried Mushrooms",
      price: 6.99,
    },
    {
      id: "fried-pickle-chips",
      name: "Fried Pickle Chips",
      price: 5.99,
    },
    {
      id: "chips-and-queso",
      name: "Chips & Queso",
      price: 7.99,
    },
    {
      id: "sampler",
      name: "Sampler",
      description: "Onion Rings, Mushrooms, Cheese Sticks & Jalapeno Poppers",
      price: 11.99,
      badge: "shareable",
    },
    {
      id: "mozzarella-sticks",
      name: "Mozzarella Sticks",
      description: "Served with a side of Marinara (6 pc)",
      price: 7.99,
    },
    {
      id: "jalapeno-poppers",
      name: "Jalapeno Poppers",
      description: "6 pc",
      price: 6.99,
    },
    {
      id: "chips-and-salsa",
      name: "Chips & Salsa",
      price: 4.99,
    },
  ],

  burgers: [
    {
      id: "ko-burger",
      name: "K.O. Burger",
      description: "Swiss Cheese, Grilled Onions, Mushrooms & Jalapenos, Bacon, Onion Ring & Fried Egg",
      price: 15.99,
      badge: "signature",
    },
    {
      id: "buffalo-burger",
      name: "Buffalo Burger",
      description: "Buffalo Sauce & Blue Cheese",
      price: 13.99,
    },
    {
      id: "spicy-black-bean-burger",
      name: "Spicy Black Bean Burger",
      price: 10.99,
    },
    {
      id: "mushroom-swiss",
      name: "Mushroom Swiss",
      description: "Swiss Cheese, Grilled Mushrooms & Onions",
      price: 13.99,
    },
    {
      id: "byo-burger",
      name: "B.Y.O. Burger",
      description: "Build your own — starting at $12.99. Add-ons: American Cheese 75¢, Swiss Cheese 75¢, Grilled Onions 50¢, Grilled Mushrooms 50¢, Grilled Jalapenos 50¢, Bacon $1, Fried Egg $1, Onion Rings $1, Chili $1, Queso $1",
      price: 12.99,
    },
  ],

  pizza: {
    sizes: [
      { label: "Large", size: "14\"", basePrice: 13.99, extraToppingPrice: 1.75 },
      { label: "Medium", size: "12\"", basePrice: 11.99, extraToppingPrice: 1.25 },
      { label: "Small", size: "10\"", basePrice: 9.99, extraToppingPrice: 0.75 },
    ],
    sauces: ["Traditional", "Any Wing Sauce"],
    crusts: ["Thin", "Hand Tossed"],
    toppings: {
      meats: ["Pepperoni", "Canadian Bacon", "Beef", "Italian Sausage", "Bacon"],
      fruitsAndVegetables: [
        "Onion", "Basil", "Green Peppers", "Mushrooms", "Jalapenos",
        "Black Olives", "Garlic", "Pineapple", "Tomatoes",
      ],
      cheese: ["Parmesan", "Extra Mozzarella"],
    },
    specialtyPizzas: [
      {
        id: "hawaiian",
        name: "Hawaiian",
        description: "Canadian Bacon, Pineapple & Cheese",
        prices: [
          { size: "Large", price: 14.99 },
          { size: "Medium", price: 12.99 },
          { size: "Small", price: 10.49 },
        ],
      },
      {
        id: "philly-cheese-steak-pizza",
        name: "Philly Cheese Steak",
        description: "Philly, Mushrooms, Onions, Green Peppers & Cheeses",
        prices: [
          { size: "Large", price: 18.99 },
          { size: "Medium", price: 16.99 },
          { size: "Small", price: 12.99 },
        ],
      },
      {
        id: "veggie-pizza",
        name: "Veggie",
        description: "Onion, Mushrooms, Black Olive, Green Peppers, Tomato & Cheese",
        prices: [
          { size: "Large", price: 17.99 },
          { size: "Medium", price: 15.99 },
          { size: "Small", price: 11.99 },
        ],
      },
      {
        id: "wicked-meat",
        name: "Wicked Meat",
        description: "Pepperoni, Canadian Bacon, Beef, Sausage & Cheeses",
        prices: [
          { size: "Large", price: 17.99 },
          { size: "Medium", price: 15.99 },
          { size: "Small", price: 11.99 },
        ],
      },
    ],
  },

  seafood: [
    {
      id: "fried-shrimp",
      name: "Fried Shrimp",
      description: "Plain or tossed in any sauce",
      prices: [{ label: "6 pc", price: 10.99 }],
    },
    {
      id: "fish",
      name: "Fish",
      description: "Plain or tossed in any sauce",
      prices: [
        { label: "2 pc", price: 9.99 },
        { label: "4 pc", price: 11.99 },
      ],
    },
  ],

  sandwiches: [
    {
      id: "philly-cheese-steak",
      name: "Philly Cheese Steak",
      description: "Philly, Swiss Cheese, Grilled Green Peppers, Onions & Mushrooms",
      price: 10.99,
    },
    {
      id: "philly-melt",
      name: "Philly Melt",
      description: "Philly, Grilled Green Peppers, Onions, Mushrooms, Jalapenos & Queso",
      price: 11.99,
    },
    {
      id: "chicken-bacon-ranch",
      name: "Chicken Bacon Ranch",
      description: "Breaded Chicken, Bacon, Lettuce, Pickles, Tomatoes & Ranch",
      price: 9.99,
    },
    {
      id: "saucy-chicken",
      name: "Saucy Chicken",
      description: "Breaded Chicken (Plain or Tossed in any Wing Sauce), Lettuce, Pickles & Tomato",
      price: 9.99,
    },
    {
      id: "fish-sandwich",
      name: "Fish Sandwich",
      description: "Fish (Plain or Tossed in any Wing Sauce) Tartar Sauce, Lettuce & Pickles",
      price: 9.99,
    },
    {
      id: "chicken-parmesan",
      name: "Chicken Parmesan",
      description: "Breaded Chicken, Marinara & Cheese",
      price: 9.99,
    },
  ],

  sides: [
    { id: "onion-rings", name: "Onion Rings", price: 8.99 },
    { id: "seasoned-fries", name: "Seasoned Fries", price: 4.99 },
    { id: "waffle-fries", name: "Waffle Fries", price: 5.99 },
    { id: "tater-tots", name: "Tater Tots", price: 5.99 },
    { id: "sweet-potato-fries", name: "Sweet Potato Fries", price: 6.99 },
    { id: "side-salad", name: "Side Salad", price: 4.99 },
    { id: "hush-puppies", name: "Hush Puppies", price: 4.99 },
    { id: "chili-cheese-fries", name: "Chili Cheese Fries", price: 6.99 },
  ],

  salads: [
    {
      id: "garden-salad",
      name: "Garden Salad",
      description: "Lettuce, Tomato, Croutons & Shredded Cheese",
      price: 6.99,
    },
    {
      id: "shrimp-garden-salad",
      name: "Shrimp Garden Salad",
      description: "Lettuce, Shrimp, Tomato, Shredded Cheese & Croutons",
      price: 9.99,
    },
    {
      id: "chicken-salad",
      name: "Chicken Salad",
      description: "Breaded Chicken (Plain or Tossed in any Wing Sauce), Lettuce, Tomato, Shredded Cheese & Croutons",
      price: 9.99,
    },
    {
      id: "chicken-caesar",
      name: "Chicken Caesar",
      description: "Breaded Chicken, Parmesan Cheese & Croutons",
      price: 9.99,
    },
  ],

  chickenEntrees: [
    {
      id: "chicken-and-waffles",
      name: "Chicken & Waffles",
      description: "Served with a side of honey",
      prices: [{ label: "", price: 10.99 }],
    },
    {
      id: "popcorn-chicken",
      name: "Popcorn Chicken",
      description: "Served with fries or tots",
      prices: [
        { label: "Small", price: 9.99 },
        { label: "Large", price: 13.99 },
      ],
    },
  ],

  desserts: [
    { id: "cheesecake-sampler", name: "Cheesecake Sampler", price: 5.99 },
    { id: "vanilla-ice-cream", name: "Vanilla Ice Cream", price: 1.99 },
  ],

  kidsMenu: [
    {
      id: "kids-popcorn-chicken",
      name: "Popcorn Chicken",
      description: "With Fries or Tots (includes drink)",
      price: 6.99,
    },
    {
      id: "kids-mini-corn-dogs",
      name: "Mini Corn Dogs",
      description: "5 pc with Fries or Tots (includes drink)",
      price: 6.99,
    },
    {
      id: "kids-pizza",
      name: "8 Inch Pizza",
      description: "Cheese or Pepperoni (includes drink)",
      price: 6.99,
    },
  ],

  drinks: [
    {
      id: "fountain-drinks",
      name: "Fountain Drinks",
      description: "Dr Pepper, Coke, Diet Coke, Root Beer, Orange Fanta, Sprite, Lemonade, Sweet Tea, Unsweetened Tea or Raspberry Tea",
      price: 2.49,
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

}
