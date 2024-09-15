import { useContext } from "react";
import useSurvey from "../../hooks/useSurvey";
import { AuthContext } from "../../Provider/AuthProvider";

const SurveyFeedback = () => {

    const { data } = useSurvey();
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const mySurvey = data?.filter(item => item?.userEmail === user?.email)
    const unPublished = mySurvey.filter(item => item?.status === 'unPublished')
    console.log(unPublished)

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Total Vote</th>
                            <th>Create Date</th>
                            <th>Status</th>
                            <th>Feedback</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mySurvey?.map((item, index) => <tr key={index}>
                                <th> {index + 1} </th>
                                <td> {item?.title} </td>
                                <td> {item?.userEmail} </td>
                                <td> {item?.totalVote} </td>
                                <td> {item?.creationDate} </td>
                                <td> {item?.status} </td>
                                <td> {item?.adminFeedback} </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default SurveyFeedback;