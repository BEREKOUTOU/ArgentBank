import React from 'react'
import Banner from '../components/Banner'
import  Chat  from '../assets/Icons/icon-chat.webp' 
import  Money  from '../assets/Icons/icon-money.webp'
import  Security  from '../assets/Icons/icon-security.webp'
import Item from '../components/Item'
import  FeaturesItemData  from '../Database/FeaturesItemData.json'
import '../styles/Pages/home.css'
export default function Home() {
  const imageData = {
    "icon-chat.webp": Chat,
    "icon-money.webp": Money,
    "icon-security.webp": Security
}
    return (
     <div className="home">
        <main className="home-content">
          <Banner />
          <section className="features">
                    <h2 className='sr-only'>Features</h2>
                    {/* Return items from json file with map */}
                    {FeaturesItemData.map((data) => (
                        /* Return item component */
                        < Item 
                            key={data.id}
                            image={imageData[data.image]}
                            descriptionImage={data.descriptionImage}
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </section>
        </main>
      </div>
    )
  }
