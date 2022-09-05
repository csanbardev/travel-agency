import '../css/components/banner.css'
import { hideBanner } from '../utils/hideBanner'

export function Banner() {



  return (
    <>
      <section id='banner' className='margin'>
        <section>
          <h1>Take off with us!</h1>
          <img id="banner-img" src="/img/pixeltrue-vision-1.svg"></img>
        </section>
        <section>
          <form id='banner-form'>
            <span>Where do we go?</span>
            <input placeholder='Write a place' type="text" />
            <button className='btn primary-button' type="submit" >Search</button>
          </form>
          <span>OR</span>
          <button onClick={hideBanner} className='btn-nav'>BEST TRIPS &#8594;</button>
        </section>
      </section>


    </>
  )
}