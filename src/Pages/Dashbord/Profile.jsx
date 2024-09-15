import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import useUser from "../../hooks/useUser";

const Profile = () => {

    const { user } = useContext(AuthContext);
    const { data: dbUser } = useUser();
    const isExistDbUser = dbUser?.find(item => item?.email === user?.email)
    // console.log(user, dbUser, isExistDbUser)

    return (
        <div>
            <div>
                {
                    isExistDbUser && <div>
                        <div tabIndex={0} className="flex justify-center mx-auto">
                            <div className="flex flex-col justify-center items-center mb-6">
                                <img className="text-lg" alt="Tailwind CSS Navbar component" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkPgAFR3iO79BJ_8AKpTCKuGfx_WpsMLhLhRiI15rjseuOjNF0YvcKzBXCYIgemXz6kk&usqp=CAU" />
                                <p className="text-xl font-medium bg-green-700 text-center p-2 rounded-lg text-white inline-flex items-center mx-auto justify-center">{isExistDbUser?.role}</p>
                            </div>
                        </div>

                    </div>

                }
            </div>
            <div className="flex justify-evenly">
                <div>
                    <p className="text-2xl">Name:</p>
                    <h2 className="text-xl font-medium">{isExistDbUser?.name}</h2>
                </div>

                <div>
                    <p className="text-2xl">Email:</p>
                    <h2 className="text-xl font-medium">{isExistDbUser?.email}</h2>
                </div>

                <div>
                    <h2 className="text-lg font-medium bg-green-900 p-3 mb-2 rounded-xl text-white">Update Profile</h2>
                    <h2 className="text-lg font-medium bg-green-900 p-3 mb-2 rounded-xl text-white">Change Password</h2>
                </div>

            </div>
        </div>
    );
};

export default Profile;