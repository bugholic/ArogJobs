import { CircleLoader } from "react-spinners"
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
};

const Spinner = ({ loading }) => {
    return (
        <CircleLoader
            color='#44bb53'
            loading={loading}
            cssOverride={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}

export default Spinner