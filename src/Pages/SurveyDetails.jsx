import { useQuery } from "@tanstack/react-query";
import DetailsCard from "./DetailsCard";

const SurveyDetails = () => {

    const { isPending, refetch, data } = useQuery({
        queryKey: ['survey'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/survey');
            return res.json();
        }
    })
    
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