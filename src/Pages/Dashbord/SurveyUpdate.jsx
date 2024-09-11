import { useQuery } from "@tanstack/react-query";
import UpdateCard from "./UpdateCard";

const SurveyUpdate = () => {

    const { isPending, data: survey } = useQuery({
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
            survey: {survey.length}

            <div className="md:grid grid-cols-2 gap-5">
                {
                    survey.map(item => <UpdateCard
                    key={item._id}
                    item={item}
                    ></UpdateCard>)
                }
            </div>
        </div>
    );
};

export default SurveyUpdate;