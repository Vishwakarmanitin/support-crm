import { useParams } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function TicketDetails() {

    const { id } = useParams();

    return (
        <MainLayout>

            <h1 className="text-4xl font-bold">
                Ticket #{id}
            </h1>

        </MainLayout>
    );

}

export default TicketDetails;