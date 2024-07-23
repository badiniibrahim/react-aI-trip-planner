# AI TRIP PLANNER

AI Trip Planner is a smart app that helps you plan your trips based on your preferences and needs. Whether you’re a seasoned traveler or planning your first big adventure, our tool is here to make your life easier. 🌟
Currently, two official plugins are available:

# 💡 Key Features:

    Personalized Suggestions: Answer a few simple questions and let our AI generate a customized itinerary just for you.
    Google Places Integration: Easily find and select your ideal destination with Google Places autocomplete.
    Flexible Planning: Set your travel duration, budget, and travel companions, and the app takes care of the rest!
    Itinerary Generation: Receive a detailed itinerary with just one click, tailored to your preferences and constraints.
    Save and Share: Keep your itineraries organized and share them with your travel companions.

# 🔧 How It Works:

    Select Your Destination: Use Google Places integration to choose your travel location.
    Specify Your Trip Duration: Use our intuitive date picker to set your travel dates.
    Define Your Budget and Travel Companions: Choose from various budget options and specify who you’ll be traveling with.
    Generate Your Itinerary: Click a button and let the AI do the rest, providing you with a personalized travel plan.

# Set Up Environment Variables

Create a new file named .env.local in the root of your project and add the following content:

VITE_GOOGLE_PLACE_API_KEY
VITE_GOOGLE_GEMINI_API_KEY
VITE_GOOGLE_CLIENT_ID_KEY

VITE_FIREBASE_API_KEY
VITE_AUTH_DOMAIN
VITE_PROJECT_ID
VITE_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID
VITE_APP_ID
VITE_MESUREMENT_ID

VITE_SENTRY_DSN

# Screenshot

![alt text](1.png)

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
