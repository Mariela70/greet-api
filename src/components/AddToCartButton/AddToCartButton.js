import './addToCartButton.css';
const AddToCartButton = ({ productId }) => {
  const handleAddToCart = () => {
    window.location.href = `https://greet.bg/?add-to-cart=${productId}`;
  };

  return (
    <div className='btn'>
    <button onClick={handleAddToCart}>
      Add To Cart
    </button>
    </div>
  );
};
  
  export default AddToCartButton;