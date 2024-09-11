import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateForm = () => {

    const {id} = useParams()

    const { data: survey } = useQuery({
        queryKey: ['survey'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/survey');
            return res.json();
        }
    })

    const data = survey?.find(item => item._id === id)
    console.log(data, id, survey);
    
    
    const handelUpdate = (e) => {
        e.preventDefault();
        const form = e.target;

        const title = form.title.value;
        const category = form.category.value;
        const description = form.description.value;
        const deadline = form.deadline.value;


        const surveyData = { title, category, description, deadline };


        console.log(surveyData);

        fetch(`http://localhost:5000/updateSurvey/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(surveyData),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Survey Update Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className="">
            <h2 className="text-3xl text-center">Create a survey</h2>

            <div>
                <form onSubmit={handelUpdate} className="card-body">
                    <div className="flex gap-3">
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Survey title :</span>
                            </label>
                            <input type="text" defaultValue={data?.title} name="title" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Choose category :</span>
                            </label>
                            {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                            <select className="bg-slate-400 py-3 rounded-lg" defaultValue={data?.category} name="category" id="">
                                <option value="Education">Education</option>
                                <option value="Travelling">Travelling</option>
                                <option value="Science">Science</option>
                                <option value="Agriculture">Agricultur</option>
                            </select>

                        </div>

                    </div>

                    <div className="flex gap-3">
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Survey Description :</span>
                            </label>
                            <input type="text" defaultValue={data?.description} name="description" placeholder="description" className="input input-bordered" required />
                        </div>
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Survey Deadline :</span>
                            </label>
                            <input type="date" defaultValue={data?.deadline} name="deadline" placeholder="title" className="input input-bordered" required />
                        </div>

                    </div>


                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Update</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;