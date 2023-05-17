import { Header } from "../../components/Header";
import { JobForm } from "../../components/ApplyForm";

export const Apply = () => {
    return (
        <>
            <Header activePage="apply" />
            <div className="apply-container">
                <h1>Apply for a Job</h1>
                <p>Please fill out the form below to apply for a job.</p>
                <JobForm />
            </div>
        </>
    );
};
