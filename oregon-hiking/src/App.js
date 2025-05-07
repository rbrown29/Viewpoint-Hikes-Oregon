import React from 'react';
import HikeCard from './HikeCard';
import HikingMap from './HikingMap';
import './style.css'

function App() {
  const hikes = [
    {
      name: 'Bright Cove Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.5rF5X447j-RIvZg3yqDXEQHaE8%26cb%3Diwp1%26pid%3DApi&f=1&ipt=c8ba8ed5a7dee4ef5a58bb0697ff6c21bf54325cb2f2aa19ef3e628227fdb506&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Bright_Cove_Hike',
    },
    {
      name: 'Cape Meares Lighthouse Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.BQWxA2UYYhxmfe7QvZBXrQHaE8%26pid%3DApi&f=1&ipt=6870a8330adb7a50c5585c1ebd6fe56da5c70e6cb758dded0ff9c5217d44a4b4&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Cape_Meares_Lighthouse_Hike',
    },
    {
      name: 'Arch Cape to Short Sand Beach',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.JZlCTg3-kxUR3krL0JNGAwHaFj%26pid%3DApi&f=1&ipt=ccab1261c9a081baf95470bb852622f0bf784a249595a843430fff9dbe7f526b&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Arch_Cape_to_Short_Sand_Beach_Hike',
    },
    {
      name: 'Butte Camp Dome Loop Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%2Fid%2FOIP.AlepgtIlPNZbl01FHBbyHwAAAA%3Fcb%3Diwc1%26pid%3DApi&f=1&ipt=bafab8e705d55dc47855b1628f618d3ec77d7179a286da540c985024372f44fd&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Butte_Camp_Dome_Loop_Hike',
    },
    {
      name: 'Council Crest Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.explicit.bing.net%2Fth%3Fid%3DOIP.MqQP__I6hRrNNoz-krt5fAHaFj%26pid%3DApi&f=1&ipt=a6740196527afd7d117da74876ae861c8bd5594e592c5c6cb8b371251c6f0971&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Council_Crest_Hike',
    },
    {
      name: 'Da-Ku-Be-Te-De Trail Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.P8ObOrip0mfwn1kpSzb3PAHaD4%26cb%3Diwp1%26pid%3DApi&f=1&ipt=33a56fd095ece1ddaddbe8d858a74a39094bc5a642cc5e5a0d9325d2ba454c59&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Da-Ku-Be-Te-De_Trail_Hike',
    },
    {
      name: 'Coldwater Peak Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.emiBcFaM2CHRvvfQue9kdAHaFj%26cb%3Diwp1%26pid%3DApi&f=1&ipt=ad209492261335fdb3a81898a25cee26b5bcedb03b9211d91f4fbe74ef6ce24b&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Coldwater_Peak_Hike',
    },
    {
      name: 'Cape Lookout North Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Foregonisforadventure.com%2Fwp-content%2Fuploads%2F2021%2F02%2Fcape-lookout-trail-view.jpg&f=1&nofb=1&ipt=37d9f4e9582543251d44418fb7446c982a4bd942302811212ac4d20c264048f6',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Cape_Lookout_North_Hike',
    },
    {
      name: 'Cape Lookout Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Afe1gDp1xRk1RaH7LfQ3VQHaE8%26pid%3DApi&f=1&ipt=769f07ae7183525907ff46fd9f1ef954e7f350a92637a13dd4dae5bf0d492e08&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Cape_Lookout_Hike',
    },
    {
      name: 'Elk Cove from Cloud Cap Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.mxW3B7QcLAEO5VCDvj-qmgHaFj%26pid%3DApi&f=1&ipt=18bfd99995d8a929bad6d431b13c3e7e7480c200e8655a912952810909a32dbb&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Elk_Cove_from_Cloud_Cap_Hike',
    },
    {
      name: 'Eagle Lake Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.9tU-u-QjsBejq5sHcl6BegHaFM%26pid%3DApi&f=1&ipt=3ac68f5ab8bb1056405e3601e9bf08cc80dca1f032f70307bf280f5dcb65d974&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Eagle_Lake_Hike',
    },
    {
      name: 'Fort Rock Loop Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.cZ_rf1vg2dtVoQsabj2eLAHaE6%26pid%3DApi&f=1&ipt=c8680ff9b3ef4205450b236738b7f1dbf3c2a0626303228360eefdad770812e7&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Fort_Rock_Loop_Hike',
    },
    {
      name: 'Harrys Ridge Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.q3BYLulSSv7WUTAwZ8aNCwHaE7%26cb%3Diwc1%26pid%3DApi&f=1&ipt=9309935e41a503a8a21c2f198bde59df326ed41afb5b4c3892c1fa4bc08dfd91&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Harrys_Ridge_Hike',
    },
    {
      name: 'Sunrise Cove Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.iVBfcqkqcqUeGoEFseGc4QHaFj%26cb%3Diwc1%26pid%3DApi&f=1&ipt=48168dcb7fd76ca9a554a77d93cfcdf9f927f164ccd075b522a46ba87b4e218a&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Sunrise_Cove_Hike',
    },
    {
      name: 'Paradise Park via the Sandy River',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.WlS_f-2bjKY7H__404kMuwHaE7%26pid%3DApi&f=1&ipt=0e5e35245a98fc5b475e34b2f72eccb9b9739e40de54eaa13a41a043340e3630&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Paradise_Park_via_the_Sandy_River_Hike',
    },
    {
      name: 'Chalk Basin Loop Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.2brn5ZGpcTk04AfxN8eA1gAAAA%26cb%3Diwc1%26pid%3DApi&f=1&ipt=5096cbd76d96539da0f453f6e8a5737d82c4f2e67b24f33137226f22958bbab2&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Chalk_Basin_Loop_Hike',
    },
    {
      name: 'Cape Foulweather Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fvvWIRskN02L_TWNGFH13AAAAA%26cb%3Diwc1%26pid%3DApi&f=1&ipt=f3e0d6b4be7c21ac72ce48bbafeec98e160ff652b85e53d6e3786b52d4ffe2b4&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Cape_Foulweather_Hike',
    },
    {
      name: 'Devils Peak Loop Hike',
      imageUrl: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.gdLDHatyzu_ySvcKMv9aEwHaFj%26cb%3Diwp1%26pid%3DApi&f=1&ipt=2603880572f95731f968a8b9e9c6d7b45a0b2b4ce850dc75c60e06da12cc98f3&ipo=images',
      linkUrl: 'https://www.oregonhikers.org/field_guide/Devils_Peak_Loop_Hike',
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
