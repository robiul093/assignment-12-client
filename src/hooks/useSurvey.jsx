import { useQuery } from "@tanstack/react-query";

const useSurvey = () => {
    return useQuery({
        queryKey: ['survey'],
        queryFn: async () =>{
            const res = await fetch('https://assignment-12-server-lemon-delta.vercel.app/survey');
            return res.json();
        }
    })
};

export default useSurvey;