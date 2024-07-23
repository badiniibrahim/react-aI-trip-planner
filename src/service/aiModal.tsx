/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

/*import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: `Generate a travel plan for the following location: Las Vegas, for 3 days for a couple on a budget. Provide a list of hotel options including the hotel name, hotel address, price, hotel image URL, geo coordinates, rating, and description. Additionally, suggest an itinerary with details including place name, place details, place image URL, geo coordinates, ticket pricing, opening hours, rating, travel time between locations for each day of the trip, and the best time to visit in JSON format.`,
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: JSON.stringify(
            {
              travel_plan: {
                destination: "Las Vegas",
                duration: 3,
                budget: "budget",
                travelers: "couple",
                hotels: [
                  {
                    name: "The D Las Vegas",
                    address: "301 Fremont Street, Las Vegas, NV 89101",
                    price: "$50-$100 per night",
                    image_url:
                      "https://www.theD.com/images/hero-images/the-d-hero.jpg",
                    geo_coordinates: "36.1699, -115.1423",
                    rating: 4.0,
                    description:
                      "A retro-themed hotel on Fremont Street, known for its affordable rates, lively casino, and proximity to the Fremont Street Experience.",
                  },
                  {
                    name: "Golden Nugget Las Vegas",
                    address: "129 E Fremont Street, Las Vegas, NV 89101",
                    price: "$75-$150 per night",
                    image_url:
                      "https://www.goldennugget.com/las-vegas/media/images/hero/hero-banner-hotel.jpg",
                    geo_coordinates: "36.1697, -115.1418",
                    rating: 4.5,
                    description:
                      "A historic hotel with a vibrant casino, impressive pool complex, and a world-famous shark tank.",
                  },
                  {
                    name: "Circus Circus Hotel & Casino",
                    address: "2880 S Las Vegas Blvd, Las Vegas, NV 89109",
                    price: "$40-$80 per night",
                    image_url:
                      "https://www.circuscircus.com/media/images/hotels/circus-circus-hotel-las-vegas/circus-circus-hotel-las-vegas-hero-mobile.jpg",
                    geo_coordinates: "36.1120, -115.1720",
                    rating: 3.5,
                    description:
                      "A family-friendly hotel with a circus theme, featuring a midway, amusement park, and a variety of dining options.",
                  },
                ],
                itinerary: [
                  {
                    day: 1,
                    title: "Fremont Street Experience & Downtown",
                    description:
                      "Explore the vibrant Fremont Street Experience, a pedestrian mall with live entertainment, street performers, and dazzling light shows.",
                    places: [
                      {
                        name: "Fremont Street Experience",
                        details:
                          "A pedestrian mall with live entertainment, street performers, and dazzling light shows.",
                        image_url:
                          "https://www.vegasexperience.com/images/freemont-street-experience.jpg",
                        geo_coordinates: "36.1697, -115.1417",
                        ticket_pricing: "Free",
                        opening_hours: "24/7",
                        rating: 4.5,
                      },
                      {
                        name: "Four Queens Hotel & Casino",
                        details:
                          "A classic casino with a vintage charm, offering gaming, dining, and entertainment.",
                        image_url:
                          "https://www.fourqueens.com/media/images/hero/hero-banner-hotel.jpg",
                        geo_coordinates: "36.1698, -115.1419",
                        ticket_pricing: "N/A",
                        opening_hours: "24/7",
                        rating: 4.0,
                      },
                      {
                        name: "Binion's Gambling Hall & Hotel",
                        details:
                          "A historic casino known for its poker tournaments and the world-famous Binion's Horseshoe.",
                        image_url:
                          "https://www.binions.com/media/images/hero/hero-banner-hotel.jpg",
                        geo_coordinates: "36.1699, -115.1421",
                        ticket_pricing: "N/A",
                        opening_hours: "24/7",
                        rating: 4.0,
                      },
                    ],
                    travel_time: "Walking distance between locations",
                    best_time_to_visit:
                      "Evening for the light shows and entertainment",
                  },
                  {
                    day: 2,
                    title: "The Strip & Bellagio Fountains",
                    description:
                      "Experience the iconic Las Vegas Strip, with its dazzling casinos, luxury hotels, and world-class entertainment.",
                    places: [
                      {
                        name: "Bellagio Fountains",
                        details:
                          "A spectacular water and light show synchronized to music, a must-see attraction on the Strip.",
                        image_url:
                          "https://www.bellagio.com/content/dam/bellagio/images/hero/bellagio-fountain-show-1.jpg",
                        geo_coordinates: "36.1109, -115.1731",
                        ticket_pricing: "Free",
                        opening_hours:
                          "Every 30 minutes from 3:00 PM to 8:00 PM, and every 15 minutes from 8:00 PM to midnight.",
                        rating: 4.8,
                      },
                      {
                        name: "The Venetian and The Palazzo",
                        details:
                          "A luxury resort complex with a Venetian theme, featuring a replica of the Grand Canal, gondola rides, and upscale shopping.",
                        image_url:
                          "https://www.venetian.com/media/images/hero/hero-banner-hotel.jpg",
                        geo_coordinates: "36.1092, -115.1750",
                        ticket_pricing: "N/A",
                        opening_hours: "24/7",
                        rating: 4.5,
                      },
                      {
                        name: "The LINQ Promenade",
                        details:
                          "An outdoor shopping and dining district on the Strip, with a high roller observation wheel and other attractions.",
                        image_url:
                          "https://www.caesars.com/content/dam/caesars/linq/images/hero/linq-promenade-hero.jpg",
                        geo_coordinates: "36.1075, -115.1723",
                        ticket_pricing: "N/A",
                        opening_hours: "24/7",
                        rating: 4.0,
                      },
                    ],
                    travel_time:
                      "Walking distance between locations on the Strip",
                    best_time_to_visit:
                      "Evening for the fountain shows and nightlife",
                  },
                  {
                    day: 3,
                    title:
                      "Red Rock Canyon National Conservation Area & Hoover Dam",
                    description:
                      "Escape the city and enjoy the natural beauty of the Red Rock Canyon and the historic Hoover Dam.",
                    places: [
                      {
                        name: "Red Rock Canyon National Conservation Area",
                        details:
                          "A stunning desert landscape with red sandstone cliffs, scenic drives, and hiking trails.",
                        image_url:
                          "https://www.nps.gov/redr/planyourvisit/images/red-rock-canyon-national-conservation-area-landscape.jpg",
                        geo_coordinates: "36.1094, -115.2343",
                        ticket_pricing: "$15 per vehicle",
                        opening_hours: "7:00 AM to 5:00 PM",
                        rating: 4.8,
                      },
                      {
                        name: "Hoover Dam",
                        details:
                          "An iconic engineering marvel, offering tours and breathtaking views of the Black Canyon.",
                        image_url:
                          "https://www.usbr.gov/lc/hooverdam/images/hd-banner.jpg",
                        geo_coordinates: "36.0112, -114.8493",
                        ticket_pricing:
                          "Free to walk around the dam, tours available at additional cost",
                        opening_hours: "8:00 AM to 5:00 PM",
                        rating: 4.5,
                      },
                    ],
                    travel_time:
                      "Approx. 1 hour drive between Red Rock Canyon and Hoover Dam",
                    best_time_to_visit:
                      "Early morning for cooler temperatures and less crowds",
                  },
                ],
              },
            },
            null,
            2
          ), // Pretty-print JSON with 2-space indentation
        },
      ],
    },
  ],
});*/

/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  // safetySettings: Adjust safety settings
  // See https://ai.google.dev/gemini-api/docs/safety-settings
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate a travel plan for the following location: Las Vegas, for 3 days for a couple on a budget. Provide a list of hotel options including the hotel name, hotel address, price, hotel image URL, geo coordinates, rating, and description. Additionally, suggest an itinerary with details including place name, place details, place image URL, geo coordinates, ticket pricing, opening hours, rating, travel time between locations for each day of the trip, and the best time to visit. Respond only in JSON format, without any Markdown tags or other delimiters",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '{\n  "trip_details": {\n    "destination": "Las Vegas",\n    "duration": 3,\n    "travelers": "Couple",\n    "budget": "Budget"\n  },\n  "hotels": [\n    {\n      "name": "The D Las Vegas",\n      "address": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$$",\n      "image_url": "https://images.trvl-media.com/hotels/3000000/2970000/2969600/2969682/2969682_112_c.jpg",\n      "geo_coordinates": {\n        "latitude": 36.1699,\n        "longitude": -115.1422\n      },\n      "rating": 4,\n      "description": "A retro-themed hotel located in the heart of downtown Las Vegas, offering affordable rates and a lively atmosphere."\n    },\n    {\n      "name": "Golden Nugget Las Vegas",\n      "address": "129 E Fremont Street, Las Vegas, NV 89101",\n      "price": "$$$",\n      "image_url": "https://images.trvl-media.com/hotels/3000000/2970000/2969600/2969602/2969602_112_c.jpg",\n      "geo_coordinates": {\n        "latitude": 36.1695,\n        "longitude": -115.1407\n      },\n      "rating": 4.5,\n      "description": "A luxurious hotel with a famous shark tank, offering a variety of dining options, entertainment, and a casino."\n    },\n    {\n      "name": "The Orleans Hotel & Casino",\n      "address": "4500 W Tropicana Ave, Las Vegas, NV 89103",\n      "price": "$$",\n      "image_url": "https://images.trvl-media.com/hotels/3000000/2980000/2977800/2977882/2977882_112_c.jpg",\n      "geo_coordinates": {\n        "latitude": 36.0992,\n        "longitude": -115.2084\n      },\n      "rating": 4,\n      "description": "A spacious hotel with a golf course, multiple pools, and a variety of dining options, located off the Strip."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": 1,\n      "activities": [\n        {\n          "name": "Fremont Street Experience",\n          "details": "A pedestrian-friendly street with live entertainment, shops, and restaurants.",\n          "image_url": "https://www.vegasexperience.com/media/images/hero/fremont-street-experience.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1692,\n            "longitude": -115.1432\n          },\n          "ticket_pricing": "Free",\n          "opening_hours": "Open 24/7",\n          "rating": 4.5\n        },\n        {\n          "name": "The Mob Museum",\n          "details": "A museum dedicated to the history of organized crime in the United States.",\n          "image_url": "https://www.themobmuseum.org/sites/default/files/styles/hero_image/public/2020-08/mob-museum-las-vegas-exterior-shot.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1689,\n            "longitude": -115.1415\n          },\n          "ticket_pricing": "$29.95 per adult",\n          "opening_hours": "10:00 AM - 8:00 PM",\n          "rating": 4.5\n        }\n      ],\n      "travel_time": {\n        "between_locations": "5 minutes walk"\n      },\n      "best_time_to_visit": "Evening for the Fremont Street Experience light show"\n    },\n    {\n      "day": 2,\n      "activities": [\n        {\n          "name": "Las Vegas Strip",\n          "details": "A famous street lined with casinos, hotels, and entertainment venues.",\n          "image_url": "https://www.visitlasvegas.com/sites/default/files/styles/hero_large/public/2022-10/las-vegas-strip-at-night-gettyimages-1312105632.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1110,\n            "longitude": -115.1740\n          },\n          "ticket_pricing": "Free",\n          "opening_hours": "Open 24/7",\n          "rating": 5\n        },\n        {\n          "name": "Bellagio Fountains",\n          "details": "A spectacular water and light show in front of the Bellagio hotel.",\n          "image_url": "https://www.bellagio.com/content/dam/MGMResorts/Bellagio/Images/Bellagio-Fountains/Bellagio-Fountains-001.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1107,\n            "longitude": -115.1741\n          },\n          "ticket_pricing": "Free",\n          "opening_hours": "Every 15 minutes from 3:00 PM to 8:00 PM",\n          "rating": 5\n        }\n      ],\n      "travel_time": {\n        "between_locations": "5 minutes walk"\n      },\n      "best_time_to_visit": "Evening for the Bellagio Fountains show"\n    },\n    {\n      "day": 3,\n      "activities": [\n        {\n          "name": "Red Rock Canyon National Conservation Area",\n          "details": "A beautiful area with red sandstone cliffs, hiking trails, and scenic overlooks.",\n          "image_url": "https://www.nps.gov/redr/learn/photosmultimedia/web-media/red-rock-canyon-national-conservation-area-2023-02-04.jpg",\n          "geo_coordinates": {\n            "latitude": 36.1592,\n            "longitude": -115.2940\n          },\n          "ticket_pricing": "$15 per vehicle",\n          "opening_hours": "6:00 AM - 4:30 PM",\n          "rating": 4.5\n        },\n        {\n          "name": "Hoover Dam",\n          "details": "A historic dam on the Colorado River, offering guided tours and scenic views.",\n          "image_url": "https://www.nps.gov/hdam/learn/photosmultimedia/web-media/hoover-dam-12-2022.jpg",\n          "geo_coordinates": {\n            "latitude": 36.0340,\n            "longitude": -114.9960\n          },\n          "ticket_pricing": "Free",\n          "opening_hours": "Open 24/7",\n          "rating": 4.5\n        }\n      ],\n      "travel_time": {\n        "between_locations": "45 minutes drive"\n      },\n      "best_time_to_visit": "Morning for the Red Rock Canyon National Conservation Area and afternoon for Hoover Dam"\n    }\n  ]\n}',
        },
      ],
    },
  ],
});
