import { Link } from 'react-router-dom'                                                                                                                                                                
import './Footer.css'                                                                                                                                                                                  
                                                                                                                                                                                                       
function Footer() {                                                                                                                                                                                    
  return (                                                                                                                                                                                             
    <footer className="footer">                                                                                                                                                                        
      <div className="container footer__inner">                                                                                                                                                        
        <div className="footer__brand">                                                                                                                                                                
          <Link to="/" className="footer__logo">                                                                                                                                                       
            FORM                                                                                                                                                                                       
          </Link>                                                                                                                                                                                      
          <p className="footer__tagline">                                                                                                                                                              
            Technology accessories designed with function and intention.                                                                                                                               
          </p>                                                                                                                                                                                         
        </div>                                                                                                                                                                                         
                                                                                                                                                                                                       
        <nav className="footer__nav" aria-label="Footer navigation">                                                                                                                                   
          <div className="footer__nav-group">                                                                                                                                                          
            <h3 className="footer__nav-title">Explore</h3>                                                                                                                                             
            <Link to="/shop">Shop Collection</Link>                                                                                                                                                    
            <Link to="/">Featured</Link>                                                                                                                                                               
          </div>                                                                                                                                                                                       
                                                                                                                                                                                                       
          <div className="footer__nav-group">                                                                                                                                                          
            <h3 className="footer__nav-title">Company</h3>                                                                                                                                             
            <Link to="/">About</Link>                                                                                                                                                                  
            <Link to="/">Contact</Link>                                                                                                                                                                
          </div>                                                                                                                                                                                       
        </nav>                                                                                                                                                                                         
      </div>                                                                                                                                                                                           
                                                                                                                                                                                                       
      <div className="container footer__bottom">                                                                                                                                                       
        <p className="footer__copyright">                                                                                                                                                              
          © {new Date().getFullYear()} FORM. All rights reserved.                                                                                                                                      
        </p>                                                                                                                                                                                           
      </div>                                                                                                                                                                                           
    </footer>                                                                                                                                                                                          
  )                                                                                                                                                                                                    
}                                                                                                                                                                                                      
                                                                                                                                                                                                       
export default Footer 
