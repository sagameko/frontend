import { useParams } from "react-router-dom";
import { Header } from "../../components/Header";

export function JobsDetails() {
    return (
        <>
            <Header activePage="jobs" />
            <div>
                <h1>Job Details</h1>
            </div>
        </>
    );
}
