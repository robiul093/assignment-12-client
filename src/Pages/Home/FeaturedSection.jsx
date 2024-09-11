import { useEffect, useState } from "react";
import useSurvey from "../../hooks/useSurvey";
import FeaturedCard from "./FeaturedCard";

const FeaturedSection = () => {

    const { isPending, data } = useSurvey();
    const [sortData, setSortData] = useState();

    // const surveys = [
    //     { id: 1, title: 'Survey A', createdAt: 'Wed Sep 04 2024 23:20:13 GMT+0600 (Bangladesh Standard Time)' },
    //     { id: 2, title: 'Survey B', createdAt: 'Wed Sep 04 2024 23:21:13 GMT+0600 (Bangladesh Standard Time)' },
    //     { id: 3, title: 'Survey C', createdAt: 'Wed Sep 04 2024 23:20:1 GMT+0600 (Bangladesh Standard Time)' },
    // ];

    // const resent = surveys?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    // console.log(resent);

    useEffect(() => {
        const mostVoted = data?.sort((a, b) => b.totalVote - a.totalVote)
        setSortData(mostVoted);
    }, [data])



    // console.log(data);



    return (
        <div className="my-16">
            <div className="w-[700px] mx-auto text-center space-y-2">

                <h3 className="text-3xl font-bold">Top-Rated Survey</h3>

                <p className="text-xl text-gray-500">See what`s trending! This survey has earned the highest votes from our users this week. Dive in, cast your vote, and compare your opinions with the community.</p>
            </div>

            {isPending ? (
                <div className="h-full flex justify-center items-center">
                    <span className="loading loading-bars loading-sm"></span>
                    <span className="loading loading-bars loading-md"></span>
                    <span className="loading loading-bars loading-lg"></span>
                </div>
            ) : (
                <div className="grid grid-cols-2 gap-4 px-10 my-10">
                    {sortData?.slice(0, 6).map((item, index) => (
                        <FeaturedCard key={index} item={item}></FeaturedCard>
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedSection;