
import { Link } from "react-router-dom";
import surrveybg from "../../assets/surveyBg.png";

const UpdateCard = ({item}) => {
    // console.log(item);
    const {_id, title, category, deadline} = item;
    return (
        <div className="card bg-base-100 image-full shadow-xl">
            <figure>
                <img
                    src={surrveybg}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Title : {title}</h2>
                <p>Category : {category}</p>
                <p>Deadline : {deadline}</p>
                <div className="card-actions justify-end">
                    <Link to={`/dashboard/surveyor/update/${_id}`} className="btn btn-primary">Update</Link>
                </div>
            </div>
        </div>
    );
};

export default UpdateCard;