import { Six_Caps } from 'next/font/google'
import footerStyles from './footer.module.scss'
const Six_Cap = Six_Caps({
    weight: '400',
    subsets: ['latin'],
    fallback: ['sans-sarif'],
  })
const Footer = () =>{

    return(
    <footer className={`${footerStyles.footer}`}>
        <div className='container'>

        <div className='row'>
            <div className='col-lg-6'>
                <h5 className={Six_Cap.className}>
                Get in Touch
                </h5>
            </div>
            <div className='col-lg-6'>
            <div className='row'>
                    <div className='col-lg-6'></div>
                    <div className='col-lg-6'></div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        ashishmangla1991@gmail.com
                    </div>
                    <div className='col-lg-6'>
                        &copy;
                    </div>
                </div>
            </div>
        </div>
        </div>

    </footer>
)
}

export default Footer