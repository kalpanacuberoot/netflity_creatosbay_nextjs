

// export default async function handler(req, res) {

//     console.log("payementsucess", "payementsucess");
//     if (req.method === 'POST') {
//         try {

//             const data = req.body
//             console.log("payementsucess--------", data);

//             res.status(200).json({ message: 'Data received successfully' });

//         } catch (error) {
//             console.error(error);
//             res.status(400).json({ error: 'Invalid JSON data' });
//         }
//     } 
//     else {
//         res.status(405).end();
//     }
// };

export default async function handler(req, res) {

    // console.log("Received POST request to /api/handler");
    // console.log("Request Method:", req.method);
    // console.log("Request Body:", req.body);

    if (req.method === 'POST') {
        try {

            const data = req.body
            console.log("payementsucess--------", data);

            // res.status(200).json({ message: 'Data received successfully' });
            res.status(200).json({data});

        } catch (error) {
            console.error(error);
            res.status(400).json({ error: 'Invalid JSON data' });
        }
    }
    else {
        res.status(405).end();
    }
};