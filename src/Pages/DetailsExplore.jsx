import { useParams } from "react-router-dom";
import surrveybg from "../assets/surveyBg.png";
import { useContext, useEffect, useState } from "react";
import useSurvey from "../hooks/useSurvey";
import Swal from "sweetalert2";
import useUser from "../hooks/useUser";
import { AuthContext } from "../Provider/AuthProvider";

const DetailsExplore = () => {

    const [comment, setComment] = useState('');
    const [activeItemId, setActiveItemId] = useState(null);
    const [commentField, setCommentField] = useState(false);
    const { isPending, refetch, data } = useSurvey();
    const { data: dbUser } = useUser();
    const { user } = useContext(AuthContext)
    const { id } = useParams();

    const survey = data?.find(i => i._id === id)

    const logedUserEmail = user?.email;
    const isExistDb = dbUser?.find(item => item.email === logedUserEmail);
    const dbUserRole = isExistDb?.role


    useEffect(() => {
        if(dbUserRole === 'proUser'){
            setCommentField(true)
            console.log('truee');
            
        }
        else{
            setCommentField(false)
            console.log('faalsse');
        }
    }, [dbUserRole])

    console.log(dbUserRole, commentField)
    // console.log(user, logedUserEmail, dbUser, isExistDb, dbUserRole);
    if (isPending) {
        return (
            <div className="h-full flex justify-center items-center">
                <span className="loading loading-bars loading-sm"></span>
                <span className="loading loading-bars loading-md"></span>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }


    const { description, title, category, creationDate, deadline, status, _id, question, totalVote } = survey;

    const totalYesVote = question?.question_1?.question1Ans?.yes + question?.question_2?.question2Ans?.yes + question?.question_3?.question3Ans?.yes;


    const totalNoVote = question?.question_1?.question1Ans?.no + question?.question_2?.question2Ans?.no + question?.question_3?.question3Ans?.no;


    const handelOpenModal = (id) => {
        setActiveItemId(id);
    }

    const handelCloseModal = () => {
        setActiveItemId(null)
    }


    const handelSubmit = (e) => {
        e.preventDefault();
        const form = e.target;


        const formData = new FormData(form);

        let answers = {};
        let total = 0;

        // Loop through the form data
        formData.forEach((value, key) => {
            // Store each answer in the `answers` object
            answers[key] = value;
            total++;
        });

        const result = { ...answers, total };
        console.log(result);



        fetch(`https://assignment-12-server-lemon-delta.vercel.app/surveyAnswer/${_id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(result)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Survey Add Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
            .catch(error => {
                console.log(error);
            })
    }

    // report survey
    const userData = {
        name: user?.displayName,
        email: user?.email,
    }

    const handelReport = () => {
        Swal.fire({
            title: "you want to report this survey?",
            text: "If you report this survey , it can be unpublished on your opinion . be carefull before reporting",
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Continue"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assignment-12-server-lemon-delta.vercel.app/report/${_id}`, {
                    method: "PUT",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(userData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.modifiedCount) {
                            Swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: "Reported Successfully",
                                showConfirmButton: false,
                                timer: 1500
                            });
                            // refetch();
                        }

                        if (data.message === 'You have already reported this survey.') {
                            Swal.fire({
                                icon: "error",
                                title: "Oops...",
                                text: "You have already reported this survey!!",
                                // footer: '<a href="#">Why do I have this issue?</a>'
                            });
                        }

                    })
                    .catch(error => {
                        console.log(error)
                    })

            }
        });
    }


    // comment on survey


    const handelTextChange = (e) => {
        setComment(e.target.value)
    }

    const handelComment = () => {
        const userComment = comment;
        const data = { ...userData, userComment }
        console.log(userComment, data);

        fetch(`https://assignment-12-server-lemon-delta.vercel.app/comment/${_id}`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Comment Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    refetch();
                }
            })
            .catch(error => console.log(error))

    }




    return (
        <div className="w-[60%] mx-auto flex flex-col card card-side bg-base-100 shadow-xl p-6 gap-5">
            <figure className="rounded-xl">
                <img className="w-[500px]"
                    src={surrveybg || "https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"}
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <div className="mx-auto text-center space-y-2 my-2">
                    <h2 className="card-title text-4xl font-bold"> {title} </h2>
                    <p className="text-xl font-medium my-3"> {description} </p>
                </div>

                <div className="flex justify-between border-t-2 border-t-gray-500 border-dashed py-5">
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Total Voat : {totalVote ? totalVote : 0} </h3>
                    <h3 className="text-lg font-medium bg-[#859770] px-5 w-[200px] py-4 rounded-xl "> Status : {status} </h3>
                </div>

                <div className="flex justify-between border-t-2 border-t-gray-500 border-dashed py-5">
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Total Yes Vote : {totalYesVote ? totalYesVote : 0} </h3>
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Total No Vote : {totalNoVote ? totalNoVote : 0} </h3>
                </div>

                <div className="flex justify-between border-t-2 border-t-gray-500 border-dashed py-5">
                    <h3 className="text-lg font-medium bg-[#859770] px-5  py-4 rounded-xl "> Create : {creationDate} </h3>
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Deadline : {deadline} </h3>
                </div>

                <div className="flex justify-between border-t-2 border-t-gray-500 border-dashed py-5">
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Category : {category} </h3>
                    {/* <h3 className="text-lg font-medium bg-[#859770] px-5 w-[200px] py-4 rounded-xl ">  :  </h3> */}
                </div>

                <div className="space-y-5">
                    <div className="bg-slate-500 w-full h-[150px] rounded-s-full rounded-se-full">
                        <div className="px-10">
                            <div className="flex gap-8 justify-evenly font-medium pt-5">
                                <div className="bg-yellow-200 p-2 rounded-xl">
                                    <p>Question no : <span className="text-lg bg-yellow-500 p-1 rounded-full">{1}</span> </p>
                                </div>

                                <div className="bg-green-200 p-2 rounded-xl">
                                    <p>Positive Vote : <span className="text-lg bg-green-500 p-1 rounded-full">{question?.question_1?.question1Ans?.yes}</span> </p>
                                </div>

                                <div className="bg-red-200 p-2 rounded-xl">
                                    <p>Negative Vote : <span className="text-lg bg-red-500 p-1 rounded-full">{question?.question_1?.question1Ans?.no}</span> </p>
                                </div>

                            </div>

                            <div className="mt-8">
                                <p className="text-xl font-semibold">Question: {question?.question_1?.question1} </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-500 w-full h-[150px] rounded-s-full rounded-se-full">
                        <div className="px-10">
                            <div className="flex gap-8 justify-evenly font-medium pt-5">
                                <div className="bg-yellow-200 p-2 rounded-xl">
                                    <p>Question no : <span className="text-lg bg-yellow-500 p-1 rounded-full">{2}</span> </p>
                                </div>

                                <div className="bg-green-200 p-2 rounded-xl">
                                    <p>Positive Vote : <span className="text-lg bg-green-500 p-1 rounded-full">{question?.question_2?.question2Ans?.yes}</span> </p>
                                </div>

                                <div className="bg-red-200 p-2 rounded-xl">
                                    <p>Negative Vote : <span className="text-lg bg-red-500 p-1 rounded-full">{question?.question_2?.question2Ans?.no}</span> </p>
                                </div>

                            </div>

                            <div className="mt-8">
                                <p className="text-xl font-semibold">Question: {question?.question_2?.question2} </p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-500 w-full h-[150px] rounded-s-full rounded-se-full">
                        <div className="px-10">
                            <div className="flex gap-8 justify-evenly font-medium pt-5">
                                <div className="bg-yellow-200 p-2 rounded-xl">
                                    <p>Question no : <span className="text-lg bg-yellow-500 p-1 rounded-full">{3}</span> </p>
                                </div>

                                <div className="bg-green-200 p-2 rounded-xl">
                                    <p>Positive Vote : <span className="text-lg bg-green-500 p-1 rounded-full">{question?.question_3?.question3Ans?.yes}</span> </p>
                                </div>

                                <div className="bg-red-200 p-2 rounded-xl">
                                    <p>Negative Vote : <span className="text-lg bg-red-500 p-1 rounded-full">{question?.question_3?.question3Ans?.no}</span> </p>
                                </div>

                            </div>

                            <div className="mt-8">
                                <p className="text-xl font-semibold">Question: {question?.question_3?.question3} </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-actions justify-between my-10">
                    <div className="tooltip" data-tip="Only user proUser can participale">
                        <button disabled={dbUserRole !== 'user' && dbUserRole !== "proUser"}
                            className="btn btn-ghost bg-black text-white font-semibold text-lg"
                            // onClick={() => document.getElementById('my_modal_1').showModal()}
                            onClick={() => { handelOpenModal(_id) }}
                        >Participate in Surveys
                        </button>
                    </div>

                    {
                        commentField && <div className="flex items-center gap-2">
                            <textarea onChange={handelTextChange} className="border-2 rounded-lg border-gray-400" name="comment" id="myTextArea" cols="20" rows="2"></textarea>
                            <input onClick={handelComment} className="bg-slate-500 px-2 py-3 rounded-xl" type="submit" value="Comment" />
                        </div>
                    }

                    <button disabled={dbUserRole !== 'user' && dbUserRole !== "proUser"}
                        className="btn"
                        onClick={() => handelReport()}
                    >Report</button>
                </div>


                {/* comment section */}

                <div className="my-5">
                    {
                        survey?.comment?.map((item, index) => <div key={index}
                            className="my-10">
                            <div className="flex md:gap-32 mb-2 items-center">
                                <h2 className="text-2xl font-medium"> {item.name} </h2>
                                <p className="text-xl font-medium"> {item?.commentDate} </p>
                            </div>
                            <p className="text-2xl font-medium ml-3 bg-slate-600 p-3 rounded-r-full rounded-bl-full inline-block"> {item?.userComment} </p>
                        </div>)
                    }
                </div>


                {
                    activeItemId == _id && (
                        <dialog id="my_modal_1" className="modal" open>
                            <div className="modal-box">
                                {/* <h3 className="font-bold text-lg">Hello!</h3>
                        <p className="py-4">Press ESC key or click the button below to close</p> */}
                                <form onSubmit={handelSubmit} method="dialog">
                                    <div>
                                        <h3 className="font-bold text-lg">Question 1: {question?.question_1?.question1} </h3>
                                        <input type="radio" id="q1_yes" name="question1" value="yes" required />
                                        <label htmlFor="q1_yes">Yes</label><br />

                                        <input type="radio" id="q1_no" name="question1" value="no" required />
                                        <label htmlFor="q1_no">No</label><br />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg">Question 2: {question?.question_2?.question2} </h3>
                                        <input type="radio" id="q2_yes" name="question2" value="yes" required />
                                        <label htmlFor="q2_yes">Yes</label><br />

                                        <input type="radio" id="q2_no" name="question2" value="no" required />
                                        <label htmlFor="q2_no">No</label><br />
                                    </div>

                                    <div>
                                        <h3 className="font-bold text-lg">Question 3: {question?.question_3?.question3} </h3>
                                        <input type="radio" id="q3_yes" name="question3" value="yes" required />
                                        <label htmlFor="q3_yes">Yes</label><br />

                                        <input type="radio" id="q3_no" name="question3" value="no" required />
                                        <label htmlFor="q3_no">No</label><br />
                                    </div>

                                    <div className="modal-action">
                                        <button className="btn" type="submit">Submit</button>
                                        <button className="btn" type="button"
                                            // onClick={() => document.getElementById('my_modal_1').close()}
                                            onClick={() => {
                                                handelCloseModal()
                                            }}
                                        >Close</button>
                                    </div>
                                </form>
                            </div>
                        </dialog>
                    )
                }

            </div>
        </div>

    );
};

export default DetailsExplore;