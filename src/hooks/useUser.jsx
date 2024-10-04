import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () =>{
            const res = await fetch('http://localhost:5000/allUsers');
            return res.json();
        }
    })
};

export default useUser;