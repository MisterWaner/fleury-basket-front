import Map from "@/components/HomePage/MapWrapper";
import SectionTitle from "@/components/Headings/SectionTitle";
import AddressAndContact from "./AddressAndContact";

export default function WhereAndHow() {
    return (
        <div className="w-full my-10">
            <SectionTitle>Où nous trouver et comment nous joindre</SectionTitle>
            <div className="flex flex-col md:flex-row gap-8">
                <Map latitude={49.151878} longitude={-0.37203} />
                <AddressAndContact />
            </div>
        </div>
    );
}




