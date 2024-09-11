
import { Link } from "react-router-dom";
import surrveybg from "../../assets/surveyBg.png";

const FeaturedCard = ({item}) => {
    // console.log(item);
    const { _id, description, title, category, totalVote } = item;
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
                    <Link to={`/surveyDetailsExplore/${_id}`} className="btn btn-ghost bg-black text-white">Details</Link>
                </div>
            </div>
        </div>
    );
};

export default FeaturedCard;