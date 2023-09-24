import Creator_Invoicespage from "@/components/Creators_components/Creator_Invoicespage"
import Creator_layout from "@/components/Creators_components/Creator_layout"

const Creator_invoices = () => {
    return (
        <>
            <div className="flex">
                <Creator_layout />
                {/* <h1 className="text-center">Creator_invoices</h1> */}
                <Creator_Invoicespage/>
            </div>
        </>
    )
}

export default Creator_invoices