import { useState } from "react";
import useSurvey from "../../hooks/useSurvey";
import Swal from "sweetalert2";

const ManageSurveyStatus = () => {

    const [activeItemId, setActiveItemId] = useState(null);
    const [surveyStatus, setSurveyStatus] = useState('');
    const [feedback, setFeedback] = useState('');
    const {refetch, data: survey } = useSurvey();
    // const reportedSurvey = survey?.map(item => item.report > 0)
    // console.log(activeItemId)

    const handelOpenModal = (status, id) => {
        setActiveItemId(id);
        setSurveyStatus(status)
        console.log(status, id)
    }

    const handelCloseModal = () => {
        setActiveItemId(null)
    }

    const handelSubmit = (e) =>{
        e.preventDefault();
        console.log(feedback);

        fetch(`http://localhost:5000/surveyStatus/${activeItemId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({surveyStatus, feedback}),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${surveyStatus} the survey status`,
                        showConfirmButton: false,
                        timer: 1500
                    });
                }

                refetch()
                
            })

        handelCloseModal();
    }


    return (
        <div>
            <p>Manage Survey Status</p>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Title</th>
                                <th>Report</th>
                                <th>Status</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                survey?.map((item, index) => <tr
                                    className="space-y-3"
                                    key={index}>
                                    <th>{index + 1}</th>
                                    <td>{item?.title}</td>
                                    <td> {item?.report} </td>
                                    <td className="">
                                        <div className="dropdown dropdown-hover">
                                            <div tabIndex={0} role="button" className="btn m-1">{item?.status}</div>
                                            <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                                                <li onClick={() => handelOpenModal('publish', item?._id)}><a>{item?.status !== 'publish' && 'publish'}</a></li>

                                                <li onClick={() => handelOpenModal('unPublish', item?._id)}><a>{item?.status !== 'unPublish' && 'unPublish'}</a></li>
                                            </ul>
                                        </div>
                                    </td>
                                    <td className="btn">Details</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

            </div>


            {
                activeItemId !== null && (
                    <dialog id="my_modal_1" className="modal" open>
                        <div className="modal-box">
                            {/* <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">Press ESC key or click the button below to close</p> */}
                            <div className="">
                                <form onSubmit={handelSubmit} method="dialog">
                                    <div>
                                        <p className="font-bold py-4">Give a feedback to the surveyor.</p>
                                        <input 
                                        className="border-2 w-full"
                                        onChange={(e) =>{setFeedback(e.target.value)}} type="text" name="feedback" id="" />
                                    </div>
                                    <div className="modal-action">
                                        <button className="btn" type="submit">Submit</button>
                                        <button className="btn" type="button"
                                            
                                            onClick={() => {
                                                handelCloseModal()
                                            }}
                                        >Close</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </dialog>
                )
            }

        </div>
    );
};

export default ManageSurveyStatus;