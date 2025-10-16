import'./Footer.css';
const Footer =()=>{
    const currentYear = new Date().getFullYear();
return(
     <footer className='footer'>
    <div className='container'>
        <div className='footer-content'>
         <div className='footer-section'>
             <h4 className='footer-title'>Developed with</h4>
             <div className='tech-stack'>
                <span className='tech-item'>React</span>
                  <span className='tech-item'>CSS</span>
                    <span className='tech-item'>HTML</span>
                      <span className='tech-item'>Vite</span>
             </div>
         </div>
         <div className='footer-section'>
            <h4 className='footer-title'>Disclaimer</h4>
            <p className='footer-text'>
                ALl advicess generate by AI. Please make responsible life decision
            </p>
         </div>
         
        </div>
        <div className='footer-bottom'>
            <p className='copyright'>
              ©{currentYear} Terrible Life Advisor
            </p>
         </div>
    </div>
  </footer>
        
)
 
}
export default Footer;
