import CountryCard from "./CountryCard";

const CountryList = ({ data }) => {
    // console.log(data);
    return (
        <div className="py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
            {data.map((elm, i) => <CountryCard key={i} country={elm} />)}
        </div>
    )
}

export default CountryList;