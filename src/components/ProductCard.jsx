import { useNavigate } from "react-router";

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    return (
        <div className="w-60 h-80 bg-green-100 p-3 flex flex-col gap-1 rounded-2xl">
            <div className="h-48 bg-gray-700 rounded-xl" >
                {/* <img
                    alt={product.name}
                    src={product.image}
                /> */}
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex flex-row justify-between">
                    <div className="flex flex-col">
                        <span className="text-xl font-bold" onClick={()=> navigate('/product/')} >{product.name}</span>
                        <p className="text-xs text-gray-700">ID: {product.id}</p>
                    </div>
                    <span className="font-bold text-green-600 text-2xl">${product.price}</span>
                </div>
                <button className="hover:bg-green-700 text-gray-50 bg-green-800 py-2 rounded-md">Add to cart</button>
            </div>
        </div>
    );
}

export default ProductCard;
