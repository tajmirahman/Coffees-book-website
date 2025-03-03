

const Heading = ({title, subTitle}) => {
    return (
        <div className="text-center mt-4">
            <h1 className="text-2xl">{title}</h1>
            <p>{subTitle}</p>
        </div>
    );
};

export default Heading;