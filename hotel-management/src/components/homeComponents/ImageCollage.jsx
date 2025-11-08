import React from 'react'

const ImageCollage = () => {
  return (
    <div className='h-[500px] flex mt-2 gap-2 rounded-xl overflow-hidden'>
      <div className='h-full w-[50%]'>
        <img className='h-full object-cover' src="https://www.orchidhotel.com/static/website/img/hotels/panchgani/homepage_slider/homepage_slider.webp" alt="img-1" />
      </div>

      <div className='h-full w-[25%] flex flex-col gap-2'>
        <div className='h-1/2 w-full'  >
          <img className='object-fill w-full h-full' src="https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aG90ZWx8ZW58MHx8MHx8fDA%3D&fm=jpg&q=60&w=3000" alt="img-2" />
        </div>
        <div className='h-1/2 w-full'>
          <img className='object-cover w-full h-full' src="https://img.freepik.com/premium-photo/3d-rendering-luxury-bedroom-suite-resort-hotel-with-twin-bed-bathroom_105762-1965.jpg?semt=ais_hybrid&w=740&q=80" alt="img-3" />
        </div>
      </div>

      <div className='h-full w-[25%] flex flex-col gap-2'>
         <div className='h-1/2 w-full'>
          <img className='object-cover h-full w-full' src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg" alt="map" />
        </div>
        <div className='h-1/2 w-full'>
          <img className='object-cover h-full w-full' src="https://content.jdmagicbox.com/v2/comp/hyderabad/42/040p9100342/catalogue/food-exchange-novotel-hyderabad--madhapur-hyderabad-restaurants-518wi-250.jpg" alt="img-4" />
        </div>
       
      </div>

    </div>
  )
}

export default ImageCollage
