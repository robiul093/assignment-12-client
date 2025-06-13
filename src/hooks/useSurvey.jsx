import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useSurvey = () => {
    const axiosPublic = useAxiosPublic();
    return useQuery({
        queryKey: ['survey'],
        queryFn: async () =>{
            const res = await axiosPublic.get('/survey')
            return res.data
            // const res = await fetch('http://localhost:5000/survey');
            // return res.json();

        }
    })
};

export default useSurvey;