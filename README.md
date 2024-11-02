# Oregon Viewpoint Hikes

A simple React application that showcases viewpoint hikes in Oregon. This app displays a grid of hiking cards with images and links to detailed information. It also includes a static Mapbox map showing the hike locations with markers.

This is a add on page for my my Oregon Hikes Project:
https://github.com/rbrown29/Oregon-Hikes
https://oregon-hikes.onrender.com/

## Features
- **Responsive Hike Cards**: Displays hike images with clickable links to detailed descriptions.
- **Mapbox Integration**: Shows a static map with markers at each hiking location using Mapbox's Night Navigation style.
- **Dynamic Layout**: Uses CSS Grid to create a responsive layout for the hike cards.


## Getting Started

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- A **Mapbox account** to generate an access token. [Sign up here](https://www.mapbox.com/) if you don't have one.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/oregon-hiking-react.git
   cd oregon-hiking-react
2. Install the dependencies:
   ```bash
   npm install
3. Create a `.env` file in the root directory and add your Mapbox access token:
   ```bash
    REACT_APP_MAPBOX_ACCESS_TOKEN=your_access_token_here
4. Start the development server:
    ```bash
    npm start
5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Project Structure
/src
- ├── App.js            # Main application component
- ├── HikeCard.js       # Component for individual hike cards
- ├── HikingMap.js      # Component for rendering the static Mapbox map
- ├── App.css           # Global styles
- ├── style.css      # Styles for the hike cards
- └── index.js          # Entry point for the React app

## Deployment
```bash
npm run build
```
This will create a production build of the app in the `build` directory. You can then deploy this build to a hosting service of your choice.

## Built With
- [React](https://reactjs.org/) - JavaScript library for building user interfaces
- [Mapbox](https://www.mapbox.com/) - Mapping platform for custom designed maps
- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout) - Layout system for creating grid-based designs
- [Font Awesome](https://fontawesome.com/) - Icon library for adding icons to the app

## Acknowledgements
- Hike data and images [Oregon Hikers](https://www.oregonhikers.org/)

## Live Demo
[Viewpoint Hikes Preview](https://stirring-empanada-d536de.netlify.app/)
