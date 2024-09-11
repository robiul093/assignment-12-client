
import { Link } from "react-router-dom";
import surrveybg from "../assets/surveyBg.png";

const AllSurveyCard = ({item}) => {
    // console.log(item);
    const {_id, description, title, category, totalVote} = item;
    return (
        <div className="card bg-base-100 image-full shadow-xl z-0">
            <figure>
                <img
                    src={surrveybg}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Title : {title}</h2>
                <p>Description : {description}</p>
                <p>Category : {category}</p>
                <p>TotalVote : {totalVote}</p>
                <div className="card-actions justify-end">
                    {/* <Link to={`surveyUpdate/updateFo
                    rm/${_id}`} className="btn btn-primary">Update</Link> */}
                </div>
            </div>
        </div>
    );
};

export default AllSurveyCard;