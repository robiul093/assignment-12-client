import { useQuery } from '@tanstack/react-query';

const useUser = () => {
    return useQuery({
        queryKey: ['user'],
        queryFn: async () =>{
            const res = await fetch('https://assignment-12-server-lemon-delta.vercel.app/allUsers');
            return res.json();
        }
    })
};

export default useUser;