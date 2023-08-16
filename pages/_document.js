import { Html, Head, Main, NextScript } from 'next/document';


export default function Document() {
  return (
    <Html lang="en">
      {/* <Head /> */}
      <Head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.0/datepicker.min.js"></script>
      <script src="../path/to/flowbite/dist/datepicker.js"></script>
      </Head>
     
      {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" /> */}
  
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
