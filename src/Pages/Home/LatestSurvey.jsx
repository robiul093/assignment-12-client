import { useEffect, useState } from "react";
import useSurvey from "../../hooks/useSurvey";
import FeaturedCard from "./FeaturedCard";

const LatestSurvey = () => {

    const { data, isPending } = useSurvey();
    const [recentData, setRecentData] = useState();

    useEffect(() => {
        // const filteredData = data.filter(i => i.fullDate === true);
        const recent = data?.sort((a, b) => new Date(b.fullDate) - new Date(a.fullDate))
        setRecentData(recent)
        // console.log(recent);
    }, [data])

    return (
        <div className="my-16">
            <div className="w-[600px] mx-auto text-center space-y-3">

                <h2 className="text-3xl font-bold">Latest Survey Section</h2>

                <p className="text-xl text-gray-500">Explore the latest survey!Share feedback on new topics and help shape future improvements with your valuable input.</p>
            </div>

            {
                isPending ? (
                    <div className="h-full flex justify-center items-center">
                        <span className="loading loading-bars loading-sm"></span>
                        <span className="loading loading-bars loading-md"></span>
                        <span className="loading loading-bars loading-lg"></span>
                    </div>
                ) : (
                    <div className="grid grid-cols-2 gap-4 px-10 my-10">
                        {recentData?.slice(0, 6).map((item, index) => (
                            <FeaturedCard key={index} item={item}></FeaturedCard>
                        ))}
                    </div>
                )
            }

        </div>
    );
};

export default LatestSurvey;