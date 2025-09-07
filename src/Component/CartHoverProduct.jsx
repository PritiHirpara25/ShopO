import { IoClose } from 'react-icons/io5';

function CartHoverProduct({ product }) {

  return (
    <div className="flex gap-1 m-2">

      <div className="flex gap-4 py-2 ">
        <div className="w-1/2">
          <img src={product.image} alt="remote_image" className="size-16" />
        </div>
        <div className="flex flex-col gap-2">
          <p className="hover:text-blue-500 text-sm font-medium line-clamp-2 w-36">{product.title}</p>
          <p className="text-red-500 font-semibold">₹{product.price * product.quantity}</p>
        </div>
      </div>

      <div className="text-gray-400 my-2">
        <IoClose />
      </div>

    </div>
  )
}

export default CartHoverProduct
