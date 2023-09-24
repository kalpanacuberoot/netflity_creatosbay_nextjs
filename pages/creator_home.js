import Creator_Home from "@/components/Creators_components/Creator_Homepage"
import Creator_layout from "@/components/Creators_components/Creator_layout"

const Creator_Homepage = () => {
    return (
        <>
            <div className="flex">
                <Creator_layout />
                {/* <h1 className="text-center">Creator_Homepage</h1> */}
                <Creator_Home/>
            </div>
        </>
    )
}

export default Creator_Homepage