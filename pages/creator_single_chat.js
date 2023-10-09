import Creator_layout from "@/components/Creators_components/Creator_layout"
import Creator_single_chatspage from "@/components/Creators_components/Creator_single_chatspage"

const Creator_single_chat = () => {
    return (
        <>
            <div className="flex">
                <Creator_layout />
                <Creator_single_chatspage/>
            </div>
        </>
    )
}

export default Creator_single_chat