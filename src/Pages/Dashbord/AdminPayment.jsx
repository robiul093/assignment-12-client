import { useQuery } from "@tanstack/react-query";

const AdminPayment = () => {

    const { data } = useQuery({
        queryKey: ['survey'],
        queryFn: async () => {
            const res = await fetch('https://assignment-12-server-lemon-delta.vercel.app/allPayment');
            return res.json();
        }
    })
    console.log(data)
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>transection_Id</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data?.map((item, index) => <tr key={index}>
                                <th> {index + 1} </th>
                                <td> {item?.name} </td>
                                <td> {item?.email} </td>
                                <td> {item?.transection_Id} </td>
                                <td> {item?.date} </td>
                                <td> 10 $ </td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminPayment;