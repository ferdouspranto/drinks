import React from 'react'
import {  useNavigate } from 'react-router-dom';
function AboutUs() {
  const navigate = useNavigate();
  const navigateToAbout = ()=>{
    navigate('/about')
  }
  return (
    <div className="px-6 md:px-20 lg:px-56 mt-10">
                <h1 className="text-3xl font-bold mb-4">About Drink</h1>
                <p className="text-lg">
                A drink or beverage is a liquid intended for human consumption. In addition to their basic function of satisfying thirst, drinks play important roles in human culture. Common types of drinks include plain drinking water, milk, juice, smoothies and soft drinks. Traditionally warm beverages include coffee, tea, and hot chocolate. Caffeinated drinks that contain the stimulant caffeine have a long history.
                </p>
                <p className="text-lg">
                In addition, alcoholic drinks such as wine, beer, and liquor, which contain the drug ethanol, have been part of human culture for more than 8,000 years. Non-alcoholic drinks often signify drinks that would normally contain alcohol, such as beer, wine and cocktails, but are made with a sufficiently low concentration of alcohol by volume. The category includes drinks that have undergone an alcohol removal process such as non-alcoholic beers and de-alcoholized wines.
                </p>
                <p className="text-lg">
                Drinking has been a large part of socialising throughout the centuries. In Ancient Greece, a social gathering for the purpose of drinking was known as a symposium, where watered down wine would be drunk. The purpose of these gatherings could be anything from serious discussions to direct indulgence. In Ancient Rome, a similar concept of a convivium took place regularly.
                </p>
                <p className="text-lg">
                Many early societies considered alcohol a gift from the gods, leading to the creation of gods such as Dionysus. Other religions forbid, discourage, or restrict the drinking of alcoholic drinks for various reasons. In some regions with a dominant religion the production, sale, and consumption of alcoholic drinks is forbidden to everybody, regardless of religion.
                </p>
                <p className="text-lg">
                Toasting is a method of honouring a person or wishing good will by taking a drink.[13] Another tradition is that of the loving cup, at weddings or other celebrations such as sports victories a group will share a drink in a large receptacle, shared by everyone until empty. 
                </p>
                <p className="text-lg">
                In East Africa and Yemen, coffee was used in native religious ceremonies. As these ceremonies conflicted with the beliefs of the Christian church, the Ethiopian Church banned the secular consumption of coffee until the reign of Emperor Menelik II. The drink was also banned in Ottoman Turkey during the 17th century for political reasons and was associated with rebellious political activities in Europe.
                </p>
            </div>
  )
}

export default AboutUs