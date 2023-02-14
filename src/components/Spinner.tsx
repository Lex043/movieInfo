import loader from "../assets/Loader.gif"

const Spinner = () => {
    return (
        <figure className="w-100 mt-20">
           <img src={loader} alt="loader" className="text-center mx-auto"/>
        </figure>
    );
};

export default Spinner;