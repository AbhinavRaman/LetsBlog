import HPB from './HPB'
import IHP from './IHP'
import Image from '../Media/Image4.png'

const Content2 = () => {
  return (
    <section className='p-12'>
        <div>
            <HPB />
            <IHP />
            <IHP />
            <IHP />
            <IHP />
            <img src={Image} alt="Article Image" />
        </div>
    </section>
  )
}

export default Content2