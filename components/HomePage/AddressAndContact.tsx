import { MapPin, Phone, AtSign } from "lucide-react";

export default function AddressAndContact() {
    return (
        <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex flex-row items-center gap-4">
                <MapPin className="" />
                <address className="font-semibold">
                    Gymnase Auguste Delaune
                    <br />
                    19 Rue François Mitterand <br />
                    14123 Fleury-sur-Orne
                </address>
            </div>
            <div className="flex flex-row items-center gap-4 mt-4">
                <Phone className="" />
                <a href="tel:+33651699722" className="italic font-semibold">
                    0651699722
                </a>
            </div>
            <div className="flex flex-row items-center gap-4 mt-4">
                <AtSign className="" />
                <a href="mailto:fso.basket@gmail.com" className="underline underline-offset-2 italic font-semibold text-blue-600">
                    fso.basket@gmail.com
                </a>
            </div>
        </div>
    );
}

