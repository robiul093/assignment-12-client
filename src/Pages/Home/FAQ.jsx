import faq from "../../assets/faq.png";

const FAQ = () => {
    return (
        <div className="my-16">
            <div className="text-center w-[700px] mx-auto space-y-3 my-12">
                <h2 className="text-3xl font-bold">How It Works</h2>
                <p className="text-xl text-gray-500">Find, book, and pay for services effortlessly. Browse various categories, view profiles and reviews, and enjoy secure payments, real-time tracking, and responsive customer support for a seamless service experience.</p>
            </div>

            <div className="flex gap-10">
                <div>
                    <img className="w-[600px] " src={faq} alt="" />
                </div>
                <div className="w-1/2 space-y-5">
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title text-xl font-medium">
                            What is the purpose of this survey website?
                        </div>
                        <div className="collapse-content">
                            <p>The purpose of our survey website is to gather valuable feedback from participants. This data help researchers in making informed decisions.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            How do I participate in a survey
                        </div>
                        <div className="collapse-content">
                            <p>To participate in a survey, simply visit our website and browse the available surveys. Once you find a survey you are interested in, click on it to start.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Can I see the results of the survey I participated in?
                        </div>
                        <div className="collapse-content">
                            <p>Depending on the survey, results may be shared with participants. Some surveys will provide a summary of the results after completion, while others may keep the results private for research purposes.
                            </p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            What should I do if I encounter technical issues while taking a survey?
                        </div>
                        <div className="collapse-content">
                            <p>If you experience any technical issues while taking a survey, please contact our support team for assistance. Provide as much detail as possible about the issue, and we will help resolve it promptly.</p>
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-base-200">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title text-xl font-medium">
                            Are my responses anonymous and confidential?
                        </div>
                        <div className="collapse-content">
                            <p>Yes, your responses are completely anonymous and confidential. We ensure that all personal information is protected and never shared with third parties.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default FAQ;