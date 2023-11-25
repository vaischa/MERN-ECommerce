import { Link } from "react-router-dom"
import Button from "../../Button"
function ProductInfoError({error}) {
    return (
        <>
            <h1 className="mx-auto text-center my-10 px-6 py-4 rounded bg-red-400">{`Something Went Wrong!`}</h1>
            <Link className="flex justify-center my-14 py-14" to={'/'}>
                <Button dark>
                    Go to Homepage
                </Button>
            </Link>
        </>
    )
}

export default ProductInfoError