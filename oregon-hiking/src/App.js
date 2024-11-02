import React from 'react';
import HikeCard from './HikeCard';
import HikingMap from './HikingMap';
import './style.css'

function App() {
  const hikes = [
    {
      name: 'Bright Cove Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/3/37/Bright_Cove_South_View_1000px.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Bright_Cove_Hike',
    },
    {
      name: 'Cape Meares Lighthouse Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/c/c9/CapeMeares3.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Cape_Meares_Lighthouse_Hike',
    },
    {
      name: 'Arch Cape to Short Sand Beach',
      imageUrl: 'https://www.oregonhikers.org/w/images/f/fa/ArchCapeShortSand3.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Arch_Cape_to_Short_Sand_Beach_Hike',
    },
    {
      name: 'Butte Camp Dome Loop Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/6/6c/Mt._St._Helens_from_Sheep_Canyon.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Butte_Camp_Dome_Loop_Hike',
    },
    {
      name: ' Council Crest Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/thumb/a/a6/Council_Crest_Eastern_View.jpg/800px-Council_Crest_Eastern_View.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Council_Crest_Hike',
    },
    {
      name: 'Da-Ku-Be-Te-De Trail Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/thumb/1/15/Cook_and_Green%2C_Red_Buttes%2C_Kangaroo_from_Da-Ku-Be-Te-De_Trail%2C_Applegate_Lake.jpg/800px-Cook_and_Green%2C_Red_Buttes%2C_Kangaroo_from_Da-Ku-Be-Te-De_Trail%2C_Applegate_Lake.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Da-Ku-Be-Te-De_Trail_Hike',
    },
    {
      name: 'Coldwater Peak Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/a/a9/Mt._Rainier_from_Coldwater_Peak.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Coldwater_Peak_Hike',
    },
    {
      name: 'Cape Lookout North Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/thumb/e/ee/3archview.jpg/800px-3archview.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Cape_Lookout_North_Hike',
    },
    {
      name: 'Cape Lookout Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/7/7e/Capelookoutview.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Cape_Lookout_Hike',
    },
    {
      name: 'Elk Cove from Cloud Cap Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/f/f0/ElkCoveView.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Elk_Cove_from_Cloud_Cap_Hike',
    },
    {
      name: 'Eagle Lake Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/thumb/3/3f/View_over_Eagle_Lake%2C_Wallowas.jpg/800px-View_over_Eagle_Lake%2C_Wallowas.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Eagle_Lake_Hike',
    },
    {
      name: 'Fort Rock Loop Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/0/0a/Fort_Rock_from_the_highway.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Fort_Rock_Loop_Hike',
    },
    {
      name: 'Harrys Ridge Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/4/44/View_to_Mt._Adams_over_Spirit_Lake%2C_Harrys_Ridge.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Harrys_Ridge_Hike',
    },
    {
      name: 'Sunrise Cove Hike',
      imageUrl: 'https://www.oregonhikers.org/w/images/a/af/Sunrise_Cove_01_1000px.jpg',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Sunrise_Cove_Hike',
    },
    {
      name: 'Paradise Park via the Sandy River',
      imageUrl: 'https://www.oregonhikers.org/w/images/thumb/c/cc/Timberlinenofparadise.JPG/800px-Timberlinenofparadise.JPG',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Paradise_Park_via_the_Sandy_River_Hike',
    }
  ];

  return (
    <div className="App">
      <header className="navbar-minimalist">
        <h1>Oregon Viewpoint Hikes</h1>
      </header>
      <div className="container">
        <div className="cards">
          {hikes.map((hike, index) => (
            <HikeCard key={index} {...hike} />
          ))}
        </div>
        <HikingMap />
      </div>
    </div>
  );
}

export default App;
