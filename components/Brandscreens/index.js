import { useState } from "react";
import Brand1page from "./Brand1";
import Brand2page from "./Brand2";

const Brandscreens = () => {
    const [open, setOpen] = useState(false);
    const onNextpage = () => {
        // router.push('/Brand2')
        setOpen(true)
    }

    // const token = JSON.parse(localStorage.getItem('user_data'));
    // console.log("token",token);

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     try {
    //         // const getResponse = await apiCall('https://jsonplaceholder.typicode.com/posts/1', 'get');
    //         // console.log('GET response:', getResponse);

    //         const postData = {
    //             "email": email,
    //             "phone": phone,
    //             "type": options,
    //             "text": desc,
    //         };
    //         const headers = {
    //             'Authorization': `Bearer ${token?.token}`,
    //         }

    //         const postResponse = await apiCall(`${url}/feedbacks`, 'post', postData, headers);

    //         console.log('support response-------------:', postResponse);
    //         if (postResponse?.status) {
    //             // const usertoken = localStorage.setItem('user_data', JSON.stringify(postResponse));
    //             toast.success('Feedback Successfully', {
    //                 position: 'top-center',
    //                 autoClose: 5000,
    //             });

    //             router.push('/')
    //         } else {
    //             console.error('Error:', postResponse?.statusText);
    //             alert('logibn api response else', postResponse?.statusText)
    //         }
    //         // const usertoken = localStorage.setItem('user_data', JSON.stringify(postResponse.token));
    //     } catch (error) {
    //         console.error('support response catrch error-------------', error);
    //     }
    // };
    return (
        <>
            {!open && <Brand1page onClick={() => onNextpage()} />}
            {open && <Brand2page />}
        </>
    )
}
export default Brandscreens