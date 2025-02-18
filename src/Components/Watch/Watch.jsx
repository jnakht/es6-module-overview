

const Watch = ({watch}) => {
    const {name, price} = watch;
    return (
        <div>
            <h3>Watch: {name}, Price: {price} </h3>
        </div>
    );
};

export default Watch;