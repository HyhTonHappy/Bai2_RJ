export default function Phone(props) {
  const { data, getPhoneDetail, getPhoneAddToCart } = props;

  const handleDetail = () => {
    getPhoneDetail(data);
  };

  const handleAddToCart = () => {
    getPhoneAddToCart(data);
  };

  return (    
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <img className="rounded-t-lg" src={data.image} alt="Phone" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {data.name}
          </h5>
        </a>
        <div>
          <button 
            onClick={handleDetail} 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Xem chi tiết
          </button>
          <button 
            onClick={handleAddToCart} 
            type="button" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Thêm vào giỏ hàng
          </button>
        </div>  
      </div>
    </div>
  );
}
