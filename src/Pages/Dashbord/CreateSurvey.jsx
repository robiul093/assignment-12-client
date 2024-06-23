import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const CreateSurvey = () => {

    const [currentDate, setCurrentDate] = useState('');

    useEffect(() => {
        // Get the current date in YYYY-MM-DD format
        const today = new Date();
        const yyyy = today.getFullYear();
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const dd = String(today.getDate()).padStart(2, '0');
        setCurrentDate(`${yyyy}-${mm}-${dd}`);
      }, []);

      const status = 'publish';
    
    
    const handelSurveySubmit = (e) =>{
        e.preventDefault();
        const form = e.target;
        
        const title = form.title.value;
        const category = form.category.value;
        const description = form.description.value;
        const creationDate = currentDate;
        const deadline = form.deadline.value;
        // const question1 = form.question1.value;
        // const question2 = form.question2.value;
        // const question3 = form.question3.value;
        // const questionNo1 = form.questionNo1.value;
        // const questionNo2 = form.questionNo2.value;
        // const questionNo3 = form.questionNo3.value;
        const question = {
            question_1 :{
                questionNo1 : form.questionNo1.value,
                question1 : form.question1.value,
            },
            question_2 :{
                questionNo2 : form.questionNo2.value,
                question2 : form.question2.value,
            },
            question_3 :{
                questionNo3 : form.questionNo3.value,
                question3 : form.question3.value,
            }
        }



        
        const surveyData = {title, category, description, status, creationDate, deadline, question};


        console.log(surveyData);
        
        fetch('http://localhost:5000/createSurvey',{
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(surveyData),
          })
          .then(res => res.json())
          .then(data =>{
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Survey Add Successfully",
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
                <form onSubmit={handelSurveySubmit} className="card-body">
                    <div className="flex gap-3">
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Survey title :</span>
                            </label>
                            <input type="text" name="title" placeholder="title" className="input input-bordered" required />
                        </div>
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Choose category :</span>
                            </label>
                            {/* <input type="password" placeholder="password" className="input input-bordered" required /> */}
                            <select className="bg-slate-400 py-3 rounded-lg" name="category" id="">
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
                            <input type="text" name="description" placeholder="description" className="input input-bordered" required />
                        </div>
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Survey Deadline :</span>
                            </label>
                            <input type="date" name="deadline" placeholder="title" className="input input-bordered" required />
                        </div>
                        
                    </div>

                    <div className="flex gap-3">
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Question 1 :</span>
                            </label>
                            <input type="text" name="question1" placeholder="description" className="input input-bordered" required />
                        </div>
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">question no :</span>
                            </label>
                            <input type="number" name="questionNo1" placeholder="title" className="input input-bordered" required />
                        </div>
                    </div>
                    
                    <div className="flex gap-3">
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Question 1 :</span>
                            </label>
                            <input type="text" name="question2" placeholder="description" className="input input-bordered" required />
                        </div>
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">question no :</span>
                            </label>
                            <input type="number" name="questionNo2" placeholder="title" className="input input-bordered" required />
                        </div>
                    </div>
                    
                    <div className="flex gap-3">
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">Question 1 :</span>
                            </label>
                            <input type="text" name="question3" placeholder="description" className="input input-bordered" required />
                        </div>
                        <div className="w-1/2 form-control">
                            <label className="label">
                                <span className="label-text">question no :</span>
                            </label>
                            <input type="number" name="questionNo3" placeholder="title" className="input input-bordered" required />
                        </div>
                    </div>
                    
                    
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateSurvey;