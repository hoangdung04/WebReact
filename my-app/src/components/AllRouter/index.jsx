import { useRoutes } from "react-router-dom";
import { Router } from "../../routers";

function AllRouter() {

    const elements = useRoutes(Router);
    return (
        <>
            {elements}

        </>
    )
}
export default AllRouter;