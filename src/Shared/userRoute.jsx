import useUser from "../hooks/useUser";


const userRoute = () => {

    const { isPending, data: allUsers } = useUser();

    if (isPending) {
        return <div className="h-full flex justify-center items-center">
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }
};

export default userRoute;