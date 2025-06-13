import DetailsCard from "./DetailsCard";
import useSurvey from "../hooks/useSurvey";

const SurveyDetails = () => {


    const {isPending, data} = useSurvey();
    
    
    if (isPending) {
        return <div className="h-full flex justify-center items-center">
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
    
    return (
        <div>
            <h2>Survey Details : {data?.length} </h2>            

            <div className="md:grid grid-cols md:p-12 gap-5">
            
                {
                    data?.map(item => <DetailsCard
                        key={item._id}
                        item={item}
                    ></DetailsCard>)
                }
            </div>
        </div>
    );
};

export default SurveyDetails;