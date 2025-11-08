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
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d873.4609914000938!2d78.73303116582741!3d28.873258801765463!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390afeb6dcb21905%3A0xdf243e4754e6dfc!2sEsy%20Bazaar!5e0!3m2!1sen!2sin!4v1762576172513!5m2!1sen!2sin" className='w-full h-full' style={{border:0}} allowfullscreen loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className='h-1/2 w-full'>
          <img className='object-cover h-full w-full' src="https://content.jdmagicbox.com/v2/comp/hyderabad/42/040p9100342/catalogue/food-exchange-novotel-hyderabad--madhapur-hyderabad-restaurants-518wi-250.jpg" alt="img-4" />
        </div>
       
      </div>

    </div>
  )
}

export default ImageCollage
