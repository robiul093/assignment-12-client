import { useQuery } from "@tanstack/react-query";
import UpdateCard from "./UpdateCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const SurveyUpdate = () => {

    const {user} = useContext(AuthContext);
    const { isPending, data } = useQuery({
        queryKey: ['survey'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-lemon-delta.vercel.app/survey');
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
    
    
    const survey = data?.filter(item => item?.userEmail === user?.email)
    console.log(survey);
    

   

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