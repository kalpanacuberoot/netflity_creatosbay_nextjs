// import bodyParser from "body-parser";
// import util from "util";

// const getBody = util.promisify(bodyParser.urlencoded());

// export async function getServerSideProps({ req, res }) {
//     if (req.method === "POST") {
//       await getBody(req, res);
//     }
  
//     return {
//       body: req.body
//     };
//   }

// /*
// export default async (req, res) => {
//     // const req = new NextApiRequest(request);
//     if (req.method === 'POST') {
//         try {
//             // const data = JSON.parse(req.body); // Parse the JSON request body
//             // const requestBody = await request.body.text();
//             // Now you can access the POST data in the `data` variable
//             // const data = req.body
//             await getBody(req, res);
//             console.log(req.method, req.body); // POST { name: 'smeijer' }
//             // const data = requestBody
//             // console.log("formData",data);

//             // Process data and send a response
//             res.status(200).json({ message: 'Data received successfully' });
//             // return NextResponse.json({ message: 'Data received successfully', data });
//         } catch (error) {
//             console.error(error);
//             res.status(400).json({ error: 'Invalid JSON data' });
//             // return NextResponse.json({ error: 'Invalid JSON data' }, { status: 400 });
//         }
//     } else {
//         res.status(405).end(); // Method not allowed for other request types
//         // return NextResponse.error("Method not allowed", { status: 405 });
//     }
// };
// */