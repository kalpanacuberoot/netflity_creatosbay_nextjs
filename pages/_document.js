import { Html, Head, Main, NextScript } from 'next/document';
// import 'flowbite';


export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* <script src="../path/to/flowbite/dist/flowbite.min.js"></script> */}
        <script src="../path/to/flowbite/dist/datepicker.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/datepicker.min.js"></script>
      </body>
    </Html>
  )
}
