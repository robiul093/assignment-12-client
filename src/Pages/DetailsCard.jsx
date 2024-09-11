
import { Link } from "react-router-dom";
import surrveybg from "../assets/surveyBg.png";
import { useEffect, useState } from "react";
import useSurvey from "../hooks/useSurvey";
import Swal from "sweetalert2";

const DetailsCard = ({ item }) => {

    const { refetch } = useSurvey();
    const [activeItemId, setActiveItemId] = useState(null);

    // console.log(item);
    const { description, title, category, creationDate, deadline, status, _id, question, totalVote } = item;

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
        
        
        
        // const question1Ans = form.question1.value;
        // const question2Ans = form.question2.value;
        // const question3Ans = form.question3.value;

        // const answer = { question1Ans, question2Ans, question3Ans,  total }
        // console.log(_id, question1Ans, question2Ans, question3Ans, answer);

        fetch(`http://localhost:5000/surveyAnswer/${_id}`, {
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


    return (
        <div className="card card-side items-center bg-base-100 shadow-xl p-6 gap-5">
            <figure className="w-[600px] h-[500px] rounded-xl">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
                    alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title text-4xl font-bold"> {title} </h2>
                <p className="text-xl font-medium my-3"> {description} </p>

                <div className="flex justify-between border-t-2 border-t-gray-500 border-dashed py-8">
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Total Voat : {totalVote ? totalVote : 0} </h3>
                    <h3 className="text-lg font-medium bg-[#859770] px-5 w-[200px] py-4 rounded-xl "> Status : {status} </h3>
                </div>

                <div className="flex justify-between border-t-2 border-t-gray-500 border-dashed py-8">
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Total Yes Vote : {totalYesVote ? totalYesVote : 0} </h3>
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Total No Vote : {totalNoVote ? totalNoVote : 0} </h3>
                </div>

                <div className="flex justify-between border-t-2 border-t-gray-500 border-dashed py-8">
                    <h3 className="text-lg font-medium bg-[#859770] px-5  py-4 rounded-xl "> Create : {creationDate} </h3>
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Deadline : {deadline} </h3>
                </div>

                <div className="flex justify-between border-t-2 border-t-gray-500 border-dashed py-8">
                    <h3 className="text-lg font-medium bg-[#859770] px-5 py-4 rounded-xl "> Category : {category} </h3>
                    {/* <h3 className="text-lg font-medium bg-[#859770] px-5 w-[200px] py-4 rounded-xl ">  :  </h3> */}
                </div>

                <div className="card-actions justify-end">
                    {/* <button
                        className="btn btn-ghost bg-black text-white font-semibold text-lg"
                        // onClick={() => document.getElementById('my_modal_1').showModal()}
                        onClick={() => { handelOpenModal(_id) }}
                    >Participate in Surveys
                    </button> */}
                    
                    <Link to={`/surveyDetailsExplore/${_id}`} className="btn btn-ghost bg-black text-white font-semibold text-lg">Explore More</Link>
                </div>

                {
                    // activeItemId == _id && (
                    //     <dialog id="my_modal_1" className="modal" open>
                    //         <div className="modal-box">
                    //             {/* <h3 className="font-bold text-lg">Hello!</h3>
                    //     <p className="py-4">Press ESC key or click the button below to close</p> */}
                    //             <form onSubmit={handelSubmit} method="dialog">
                    //                 <div>
                    //                     <h3 className="font-bold text-lg">Question 1: {question?.question_1?.question1} </h3>
                    //                     <input type="radio" id="q1_yes" name="question1" value="yes" required />
                    //                     <label htmlFor="q1_yes">Yes</label><br />

                    //                     <input type="radio" id="q1_no" name="question1" value="no" required />
                    //                     <label htmlFor="q1_no">No</label><br />
                    //                 </div>

                    //                 <div>
                    //                     <h3 className="font-bold text-lg">Question 2: {question?.question_2?.question2} </h3>
                    //                     <input type="radio" id="q2_yes" name="question2" value="yes" required />
                    //                     <label htmlFor="q2_yes">Yes</label><br />

                    //                     <input type="radio" id="q2_no" name="question2" value="no" required />
                    //                     <label htmlFor="q2_no">No</label><br />
                    //                 </div>

                    //                 <div>
                    //                     <h3 className="font-bold text-lg">Question 3: {question?.question_3?.question3} </h3>
                    //                     <input type="radio" id="q3_yes" name="question3" value="yes" required />
                    //                     <label htmlFor="q3_yes">Yes</label><br />

                    //                     <input type="radio" id="q3_no" name="question3" value="no" required />
                    //                     <label htmlFor="q3_no">No</label><br />
                    //                 </div>

                    //                 <div className="modal-action">
                    //                     <button className="btn" type="submit">Submit</button>
                    //                     <button className="btn" type="button"
                    //                         // onClick={() => document.getElementById('my_modal_1').close()}
                    //                         onClick={() => {
                    //                             handelCloseModal()
                    //                         }}
                    //                     >Close</button>
                    //                 </div>
                    //             </form>
                    //         </div>
                    //     </dialog>
                    // )
                }

            </div>
        </div>

    );
};

export default DetailsCard;