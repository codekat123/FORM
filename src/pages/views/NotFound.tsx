import { Link } from 'react-router-dom'                                                                                                                                                                
import '../css/NotFound.css'                                                                                                                                                                                
                                                                                                                                                                                                       
function NotFound() {                                                                                                                                                                                  
  return (                                                                                                                                                                                             
    <div className="not-found">                                                                                                                                                                        
      <div className="container not-found__inner">                                                                                                                                                     
        <p className="not-found__code">404</p>                                                                                                                                                         
        <h1 className="not-found__title">Page not found</h1>                                                                                                                                           
        <p className="not-found__description">                                                                                                                                                         
          The page you are looking for doesn't exist or has been moved.                                                                                                                                
        </p>                                                                                                                                                                                           
        <Link to="/" className="not-found__cta">                                                                                                                                                       
          Back to Home                                                                                                                                                                                 
        </Link>                                                                                                                                                                                        
      </div>                                                                                                                                                                                           
    </div>                                                                                                                                                                                             
  )                                                                                                                                                                                                    
}                                                                                                                                                                                                      
                                                                                                                                                                                                       
export default NotFound 
