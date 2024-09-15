import { useQuery } from "@tanstack/react-query";
import AllSurveyCard from "./AllSurveyCard";
import { useEffect, useState } from "react";

const AllSurvey = () => {

    const [survey, setSurvey] = useState();
    const [displaySurvey, setDisplaySurvey] = useState();
    // const [sortSurvey, setSortSu/rvey] = useState();

    const { isPending, refetch, data } = useQuery({
        queryKey: ['survey'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-lemon-delta.vercel.app/survey');
            return res.json();
        }
    })

    useEffect(() => {
        setSurvey(data)
        setDisplaySurvey(data)
        console.log(data)
    }, [data])


    if (isPending) {
        return <div className="h-full flex justify-center items-center">
            <span className="loading loading-bars loading-sm"></span>
            <span className="loading loading-bars loading-md"></span>
            <span className="loading loading-bars loading-lg"></span>
        </div>
    }


    // sorting by vote

    const handelLowToHighSort = () => {
        const sort = [...displaySurvey].sort((a, b) => a.totalVote - b.totalVote);
        // setSortSurvey(sort);
        setDisplaySurvey(sort)
    }
    const handelHighToLowSort = () => {
        const sort = [...displaySurvey].sort((a, b) => b.totalVote - a.totalVote);
        // setSortSurvey(sort);
        setDisplaySurvey(sort)
    }


    // console.log(displaySurvey);


    // filter by category

    const handelAllCategory = () => {
        // console.log(category);
        setDisplaySurvey(survey)
    }
    const handelEducation = () => {
        const category = survey?.filter(item => item.category === 'Education')
        // console.log(category);
        setDisplaySurvey(category)
    }
    const handelTravelling = () => {
        const category = survey?.filter(item => item.category === 'Travelling')
        // console.log(category);
        setDisplaySurvey(category)
    }
    const handelScience = () => {
        const category = survey?.filter(item => item.category === 'Science')
        // console.log(category);
        setDisplaySurvey(category)
    }
    const handelAgricultur = () => {
        const category = survey?.filter(item => item.category === 'Agriculture')
        // console.log(category);
        setDisplaySurvey(category)
    }


    return (
        <div>
            <h2 className="text-2xl">Survey: {displaySurvey?.length}</h2>

            <div className="flex items-center gap-20 m-6">
                <div className="flex items-center gap-3">
                    <p className="font-medium">Filter By Category :</p>
                    <div className="dropdown dropdown-hover z-10">
                        <div tabIndex={0} role="button" className="btn m-1">Filter </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                            <li><a onClick={handelAllCategory}>All</a></li>
                            <li><a onClick={handelEducation}>Education</a></li>
                            <li><a onClick={handelTravelling}>Travelling</a></li>
                            <li><a onClick={handelScience}>Science</a></li>
                            <li><a onClick={handelAgricultur}>Agriculture</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <p className="font-medium">Sort by vote :</p>
                    <div className="dropdown dropdown-hover z-10">
                        <div tabIndex={0} role="button" className="btn m-1">Sort </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-10 w-52 p-2 shadow">
                            <li><a onClick={handelLowToHighSort}>Low-High</a></li>
                            <li><a onClick={handelHighToLowSort}>High-Low</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="md:grid grid-cols-3 gap-5">
                {
                    displaySurvey?.map(item => <AllSurveyCard
                        key={item._id}
                        item={item}
                    ></AllSurveyCard>)
                }
            </div>
        </div>
    );
};

export default AllSurvey;