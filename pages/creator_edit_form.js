import Creator_edit_formpage from "@/components/Creators_components/Creator_Homepage/Creator_edit_formpage"
import Creator_layout from "@/components/Creators_components/Creator_layout"

const Creator_edit_form = () => {
    return (
        <>
            <div className="flex">
                <Creator_layout />
                <Creator_edit_formpage />
            </div>
        </>
    )
}

export default Creator_edit_form