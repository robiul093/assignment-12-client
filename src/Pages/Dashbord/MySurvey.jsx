import { useContext } from "react";
import useSurvey from "../../hooks/useSurvey";
import { AuthContext } from "../../Provider/AuthProvider";
import { Link } from "react-router-dom";

const MySurvey = () => {

    const { data } = useSurvey();
    const { user } = useContext(AuthContext);
    console.log(user.email)
    const mySurvey = data?.filter(item => item?.userEmail === user?.email)
    console.log(mySurvey)

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
                            <th>Details</th>
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
                                <td>
                                    <Link className="btn" to={`/surveyDetailsExplore/${item?._id}`}>Details</Link>
                                </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MySurvey;