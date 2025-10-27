import { GiBasketballBasket, GiBasketballJersey } from "react-icons/gi";
import { PiStrategy } from "react-icons/pi";

export default function ValorSection() {
    return (
        <div className="w-full">
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl mb-8">
                Nos <span className="uppercase font-extrabold">Principes</span>
            </h2>
            <div className="w-full flex-col justify-center items-center">
                <article>
                    <GiBasketballBasket size={48} />
                </article>
                <article>
                    <PiStrategy size={48} />
                </article>
                <article>
                    <GiBasketballJersey size={48} />
                </article>
            </div>
        </div>
    );
}

