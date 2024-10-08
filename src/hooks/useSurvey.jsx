import { useQuery } from "@tanstack/react-query";

const useSurvey = () => {
    return useQuery({
        queryKey: ['survey'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/survey');
            return res.json();
        }
    })
};

export default useSurvey;