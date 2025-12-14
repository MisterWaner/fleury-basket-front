import { FaBasketball } from "react-icons/fa6";

export default function Basketball_Loader() {
    return (
        <div className="flex items-center justify-center space-x-2 p-10">
            <div
                className="w-8 h-8 animate-bounce text-orange-500"
                style={{ animationDelay: "0s" }}
            >
                <FaBasketball size={24}/>
            </div>
            <div
                className="w-8 h-8 animate-bounce text-orange-500"
                style={{ animationDelay: "0.2s" }}
            >
                <FaBasketball size={24}/>
            </div>
            <div
                className="w-8 h-8 animate-bounce text-orange-500"
                style={{ animationDelay: "0.4s" }}
            >
                <FaBasketball size={24}/>
            </div>
        </div>
    );
}

