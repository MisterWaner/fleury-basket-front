import Image from "next/image";
import Link from "next/link";
import { FaInstagram, FaTiktok } from "react-icons/fa6";

export function Footer() {
    return (
        <footer className="bg-slate-950 text-slate-50 p-4 mt-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <section className="flex flex-col lg:flex-row align-center items-center md:space-x-6">
                    <Image
                        src="/images/logo-fleury.jpg"
                        alt="Logo Fleury"
                        width={150}
                        height={50}
                        className="mb-4"
                    />
                    <Link
                        href="/confidentialite"
                        className="underline underline-offset-4 hover:text-pink-500"
                    >
                        Politique de confidentialité
                    </Link>
                </section>
                <section className="flex flex-col md:flex-row md:justify-around align-center items-center md:space-x-6 md:col-span-2">
                    <div className="flex flex-row items-center align-center space-x-4 mt-4">
                        <h3 className="uppercase text-2xl font-semibold">
                            Suivez-nous
                        </h3>
                        <a
                            href="https://www.instagram.com/fleurysurornebasket/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-50 hover:text-pink-500"
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href="https://www.tiktok.com/@fsobasket"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-50 hover:text-pink-500"
                        >
                            <FaTiktok size={24} />
                        </a>
                    </div>
                    <div className="text-sm text-center flex flex-col md:flex-row items-center align-center space-x-4 mt-4">
                        <p>
                            &copy; 2025 - Club de basket-ball de Fleury sur Orne
                            - Tous droits réservés.
                        </p>
                        <p>Réalisé par Erwan</p>
                    </div>
                </section>
            </div>
        </footer>
    );
}




