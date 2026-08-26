import { useState } from 'react'                                                                                                                                                                       
import { useParams, Link } from 'react-router-dom'                                                                                                                                                     
import { products } from '../data/product'                                                                                                                                                             
import './ProductDetails.css'                                                                                                                                                                          
                                                                                                                                                                                                       
function ProductDetails() {                                                                                                                                                                            
  const { productId } = useParams<{ productId: string }>()                                                                                                                                             
  const product = products.find((p) => p.id === productId)                                                                                                                                             
                                                                                                                                                                                                       
  const [selectedVariantId, setSelectedVariantId] = useState<string | null>(                                                                                                                           
    product && product.variants.length > 0 ? product.variants[0].id : null                                                                                                                             
  )                                                                                                                                                                                                    
                                                                                                                                                                                                       
  if (!product) {                                                                                                                                                                                      
    return (                                                                                                                                                                                           
      <main className="product-details product-details--not-found">                                                                                                                                    
        <div className="container">                                                                                                                                                                    
          <h2>Product Not Found</h2>                                                                                                                                                                   
          <p>The product you are looking for does not exist.</p>                                                                                                                                       
          <Link to="/shop" className="product-details__back-link">                                                                                                                                     
            ← Back to Shop                                                                                                                                                                             
          </Link>                                                                                                                                                                                      
        </div>                                                                                                                                                                                         
      </main>                                                                                                                                                                                          
    )                                                                                                                                                                                                  
  }                                                                                                                                                                                                    
                                                                                                                                                                                                       
  return (                                                                                                                                                                                             
    <main className="product-details">                                                                                                                                                                 
      <div className="container product-details__grid">                                                                                                                                                
        <div className="product-details__gallery">                                                                                                                                                     
          <img                                                                                                                                                                                         
            src={product.images[0]}                                                                                                                                                                    
            alt={product.name}                                                                                                                                                                         
            className="product-details__image"                                                                                                                                                         
          />                                                                                                                                                                                           
        </div>                                                                                                                                                                                         
                                                                                                                                                                                                       
        <div className="product-details__info">                                                                                                                                                        
          <p className="product-details__category">{product.category}</p>                                                                                                                              
          <h1 className="product-details__title">{product.name}</h1>                                                                                                                                   
          <p className="product-details__price">${product.price}</p>                                                                                                                                   
          <p className="product-details__description">{product.description}</p>                                                                                                                        
          {product.variants.length > 0 && (                                                                                                                                                            
            <div className="product-details__variants">                                                                                                                                                
              <label className="product-details__variants-label">Options</label>                                                                                                                       
              <div className="product-details__variants-list">                                                                                                                                         
                {product.variants.map((variant) => {                                                                                                                                                   
                  const isSelected = variant.id === selectedVariantId                                                                                                                                  
                                                                                                                                                                                                       
                  return (                                                                                                                                                                             
                    <button                                                                                                                                                                            
                      key={variant.id}                                                                                                                                                                 
                      type="button"                                                                                                                                                                    
                      className={`variant-btn ${isSelected ? 'variant-btn--active' : ''}`}                                                                                                             
                      onClick={() => setSelectedVariantId(variant.id)}                                                                                                                                 
                    >                                                                                                                                                                                  
                      {variant.value}                                                                                                                                                                  
                    </button>                                                                                                                                                                          
                  )                                                                                                                                                                                    
                })}                                                                                                                                                                                    
              </div>                                                                                                                                                                                   
            </div>                                                                                                                                                                                     
          )}                                                                                                                                                                                           
          <button type="button" className="product-details__add-btn">                                                                                                                                  
            Add to Bag — ${product.price}                                                                                                                                                              
          </button>                                                                                                                                                                                    
        </div>                                                                                                                                                                                         
      </div>                                                                                                                                                                                           
    </main>                                                                                                                                                                                            
  )                                                                                                                                                                                                    
}                                                                                                                                                                                                      
                                                                                                                                                                                                       
export default ProductDetails                   
