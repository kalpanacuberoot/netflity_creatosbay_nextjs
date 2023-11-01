import Register from "@/components/Register"
import Loginpage from "@/components/Loginpage"

const index = () => {

  return (
    <>
      {/* <Register/> */}

      <div className="page">
        {/* <div className="background-video-container">
          <video autoPlay loop muted className="background-video">
            <source src="/background-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div> */}
        <div className="content">
          <Loginpage />
        </div>
      </div>
    </>
  )
}

export default index