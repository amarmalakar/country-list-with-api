import { ArrowLeftIcon } from "@heroicons/react/outline";
import Link from "next/link";

const CountyName = ({ country }) => {
    return (
        <div>
            <Link href="/">
                <div className="shadow-lg py-2 px-6 mb-4 inline-flex cursor-pointer items-center rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                    <ArrowLeftIcon className="h-4 mr-2" />
                    <span>Back</span>
                </div>
            </Link>

            <img src={country[0]?.flags.png} alt="" />

            <h1 className="text-xl py-4 font-bold">{country[0]?.name}</h1>

            <p className="py-1"><span className="font-semibold">Native Name: </span>{country[0]?.nativeName}</p>
            <p className="py-1"><span className="font-semibold">Population: </span>{country[0]?.population}</p>
            <p className="py-1"><span className="font-semibold">Region: </span>{country[0]?.region}</p>
            <p className="py-1"><span className="font-semibold">Sub Region: </span>{country[0]?.subregion}</p>
            <p className="py-1"><span className="font-semibold">Capital: </span>{
                Array.isArray(country[0]?.capital)
                ? country[0]?.capital[0]
                : country[0]?.capital
            }</p>

            <br />
            <p className="py-1"><span className="font-semibold">Top Level Domain: </span>{country[0]?.topLevelDomain[0]}</p>
            <p className="py-1"><span className="font-semibold">Currencies: </span>{country[0]?.currencies[0].code}</p>
            <p className="py-1">
                <span className="font-semibold">Languages: </span>
                {country[0]?.languages?.map((lan, i) => <span key={i}>{lan.name}, </span>)}
            </p>

            <br />
            <p className="py-1 mb-2"><span className="font-semibold">Border Countries: </span></p>

            <div className="flex flex-wrap">
                {country[0]?.borders?.map((border, i) => (
                    <div
                        key={i}
                        className="shadow-lg py-2 px-6 inline mx-1 my-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                        <span>{border}</span>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default CountyName;

export async function getServerSideProps(context) {
    const res = await fetch(`https://restcountries.com/v2/name/${context.params.name}`);
    const data = await res.json();

    return {
        props: {
            country: data
        }
    }
}