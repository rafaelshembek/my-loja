
export default function Footer() {
    return (
        <footer className="flex items-center justify-start flex-wrap bg-teal-400 text-white p-4" style={{ bottom: 0, width: "100%" }}>
            <div className="flex justify-center items-center flex-row m-1 p-3">
                <h4 className="mr-2">Developer by</h4>
                <p className="text-xs">Rafael Silva</p>
            </div>
            <div className="flex flex-row items-center flex-wrap">
                <h4 className="mr-2">Contatos</h4>
                <i className="text-xs">rafaelsilvagomesreal@gmal.com</i>
                <i className="text-xs ml-2">www.rafaelsilvadev.com</i>
            </div>
        </footer>
    )
}