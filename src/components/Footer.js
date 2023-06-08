import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer =()=>{
   return (
    <div>
      <section id="footer" className="row justify-content-center align-items-center text-white ">

         <div className="col-12 mb-5 text-center col-lg-4 mb-lg-0 text-lg-start">
            <h3>GET IN TOUCH</h3>
            <a href='mailto:safaa.mahmoud.mohamed.mahmoud@gmail.com'>
               <p><FontAwesomeIcon icon={faEnvelope} /> safaa.mahmoud.mohamed.mahmoud@gmail.com</p>
            </a>
            <p><FontAwesomeIcon icon={faPhone} /> (+2) 01146164299</p>
         </div>

         <div className="col-12 mb-5 col-lg-3 d-flex justify-content-center align-items-center  mb-lg-0">
         <a href="https://wa.me/01146164299"> <button className="btn bg-white text-primary">CONTACT ME</button></a>
         </div>

         <div className="col-12 col-lg-4 text-center text-lg-end">
            <p>
               <a href='https://www.linkedin.com/in/safaa-mahmoud-ebrahim/'><i className="fab fa-linkedin" style={{ fontSize: '2rem' }}></i></a>
               <a href='https://www.facebook.com/safaa.ebrahim.3990/'><i className="fab fa-facebook mx-4" style={{ fontSize: '2rem' }}></i></a>
               <a href='https://github.com/Safaa-Ebrahim?tab=repositories'><i className="fab fa-github " style={{ fontSize: '2rem' }}></i></a>
            </p>

            <p style={{marginTop: "25px"}}>Created with ❤️ by SAFAA</p>
         </div>

      </section>
    </div>
   );
}
export default Footer;
