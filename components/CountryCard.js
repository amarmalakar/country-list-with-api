import Link from "next/link"

const CountryCard = ({ country }) => {
    return (
        <div className="w-full rounded-md overflow-hidden shadow-md cursor-pointer hover:scale-105">
            <Link href={`/country/${country.name.common}`}>
                <div>
                    <img src={country.flags.png} className="w-full" />
                    <div className="p-4">
                        <h3 className="text-lg font-semibold my-3">{country.name.official}</h3>
                        <p><span className="font-semibold">Population:</span> {country.population}</p>
                        <p><span className="font-semibold">Region:</span> {country.region}</p>
                        <p><span className="font-semibold">Capital:</span> {
                            Array.isArray(country.capital)
                            ? country.capital[0]
                            : country.capital
                        }</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default CountryCard;