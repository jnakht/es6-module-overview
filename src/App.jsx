
import { useEffect, useState } from 'react'
import './App.css'
import ComponentA from './Components/ComponentA/ComponentA'
import Watch from './Components/Watch/Watch'

function App() {

  // Fake data option : 1
  // const watches = [
  //     {id: 1, name: 'apple watch', price: 50000},
  //     {id: 2, name: 'casio watch', price: 40000},
  //     {id: 3, name: 'copied watch', price: 500},
  // ]

  // Fake data Option : 2
  // use chatGPT made data here
  // const watches = [
  //   {
  //     name: "Rolex Submariner",
  //     brand: "Rolex",
  //     model: "Submariner",
  //     price: 10000,
  //     material: "Stainless Steel",
  //     waterResistance: "300m",
  //     movement: "Automatic",
  //     inStock: true
  //   },
  //   {
  //     name: "Omega Speedmaster",
  //     brand: "Omega",
  //     model: "Speedmaster",
  //     price: 6500,
  //     material: "Stainless Steel",
  //     waterResistance: "50m",
  //     movement: "Manual Wind",
  //     inStock: false
  //   },
  //   {
  //     name: "Tag Heuer Carrera",
  //     brand: "Tag Heuer",
  //     model: "Carrera",
  //     price: 4500,
  //     material: "Titanium",
  //     waterResistance: "100m",
  //     movement: "Automatic",
  //     inStock: true
  //   },
  //   {
  //     name: "Casio G-Shock",
  //     brand: "Casio",
  //     model: "G-Shock",
  //     price: 150,
  //     material: "Resin",
  //     waterResistance: "200m",
  //     movement: "Quartz",
  //     inStock: true
  //   },
  //   {
  //     name: "Seiko Prospex",
  //     brand: "Seiko",
  //     model: "Prospex",
  //     price: 800,
  //     material: "Stainless Steel",
  //     waterResistance: "200m",
  //     movement: "Automatic",
  //     inStock: false
  //   },
  //   {
  //     name: "Patek Philippe Nautilus",
  //     brand: "Patek Philippe",
  //     model: "Nautilus",
  //     price: 35000,
  //     material: "White Gold",
  //     waterResistance: "120m",
  //     movement: "Automatic",
  //     inStock: true
  //   }
  // ];


  // Option : 3
  // use a separate file on local public folder and with .json
  // in this case, you have to fetch data fetch('Watches.json')
  // make sure all data are in JSON format, not the regular object form
  // const [watches, setWatches] = useState([]);
  // useEffect(() => {
  //   fetch('Watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))
  // } ,[])



  // option: 4, create a repo on github, push the data, and use the
  // githubs raw data URL to load data
  // this is not good practice, because it is not efficient
  // you must not do this for real production
  // const [watches, setWatches] = useState([]);
  // useEffect(() => {
  //   fetch('https://raw.githubusercontent.com/jnakht/watches-fake-data/refs/heads/main/watches.json')
  //   .then(res => res.json())
  //   .then(data => setWatches(data))
  // } ,[])


  // option: 5
  // there are many free open api available online
  // use them, this ones legit: https://github.com/public-apis/public-apis.git


  // option: 6
  // you can also use this site for creating json data: https://beeceptor.com/

  return (
    <>
      
      <h1>Vite + React</h1>
      {/* circular dependency example */}
      {/* <ComponentA></ComponentA> */}

      {
        watches.map(watch => <Watch key={watch.id} watch={watch}></Watch>)
      }
      
        
    </>
  )
}

export default App
