import Creator_Chatspage from "@/components/Creators_components/Creator_Chatspage"
import Creator_layout from "@/components/Creators_components/Creator_layout"

const Creator_chat = () => {
    return (
        <>
            <div className="flex ">
                <Creator_layout />
                <Creator_Chatspage/>
            </div>
        </>
    )
}

export default Creator_chat