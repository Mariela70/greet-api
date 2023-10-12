import './card.css'
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const Card = ({ images, name, short_description, category, productId }) => {
  const firstImage = images && images.length > 0 ? images[0].src : '';
  return (
    <section className='cards'>
    <div className="card">
      <div className='picture'>
      <img src={firstImage} alt={name} />
      <div className="card-content">
        <h3 className='name'>{name}</h3>
        <p className='desc'>{short_description}</p>
        <p className='category'><strong>Category:</strong> {category}</p>
      </div>
      <div className='btn'>
        <AddToCartButton productId={productId} />
        </div>
      </div>
    </div>
    </section>
  );
};

export default Card;