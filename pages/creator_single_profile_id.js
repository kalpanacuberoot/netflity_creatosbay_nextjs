import Creator_single_profilepage from "@/components/Creators_components/Creator_Homepage/Creator_single_profilepage"
import Creator_layout from "@/components/Creators_components/Creator_layout"

const Creator_single_profile_id = () => {
    return (
        <>
            <div className="flex">
                <Creator_layout />
                <Creator_single_profilepage/>
            </div>
        </>
    )
}

export default Creator_single_profile_id