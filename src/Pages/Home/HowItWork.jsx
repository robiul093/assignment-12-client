import img1 from "../../assets/download.png";
import img2 from "../../assets/download (1).png";
import img3 from "../../assets/download (2).png";
import img4 from "../../assets/download (3).png";
import img5 from "../../assets/download (4).png";
import { HiArrowCircleLeft, HiArrowCircleRight } from "react-icons/hi";
// import img1 from '../../assets/download.png';


const HowItWork = () => {
    return (
        <div className="my-16">
            <div className="text-center w-[700px] mx-auto space-y-3">
                <h2 className="text-3xl font-bold">How It Works</h2>
                <p className="text-xl text-gray-500">Find, book, and pay for services effortlessly. Browse various categories, view profiles and reviews, and enjoy secure payments, real-time tracking, and responsive customer support for a seamless service experience.</p>
            </div>

            <div className="w-[500px] mx-auto space-y-5">
                <div className="flex items-center gap-10">
                    <div className="w-[250px]">
                        <h1 className="text-2xl font-semibold">Sign Up</h1>
                        <p className="text-gray-500">come and sign up first to get the best feeling of this survey site.</p>
                    </div>
                    <HiArrowCircleRight className="text-3xl" />
                    <img className="w-[200px]" src={img1} alt="" />
                </div>
                <div className="flex items-center gap-10">
                    <img className="w-[200px]" src={img2} alt="" />
                    <HiArrowCircleLeft className="text-3xl" />
                    <div className="w-[250px]">
                        <h1 className="text-2xl font-semibold">Create Profile</h1>
                        <p className="text-gray-500">after signingig up look at your profile and assemble it gorgiously.</p>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <div className="w-[250px]">
                        <h1 className="text-2xl font-semibold">Participate Survey</h1>
                        <p className="text-gray-500">Now participate any of the survey you are interested but one survey one time</p>
                    </div>
                    <HiArrowCircleRight className="text-3xl" />
                    <img className="w-[200px]" src={img3} alt="" />
                </div>
                <div className="flex items-center gap-10">
                    <img className="w-[200px]" src={img4} alt="" />
                    <HiArrowCircleLeft className="text-3xl" />
                    <div className="w-[250px]">
                        <h1 className="text-2xl font-semibold">Report Survey</h1>
                        <p className="text-gray-500">Report any kind of survey if you think them inappropriate</p>
                    </div>
                </div>
                <div className="flex items-center gap-10">
                    <div className="w-[250px]">
                        <h1 className="text-2xl font-semibold">Pro user</h1>
                        <p className="text-gray-500">Spend some money and be a Pro user to get more unlocked feature</p>
                    </div>
                    <HiArrowCircleRight className="text-3xl" />
                    <img className="w-[200px]" src={img5} alt="" />
                </div>

                <button className="btn px-6 bg-green-400 text-white">Learn More</button>
            </div>
        </div>
    );
};

export default HowItWork;