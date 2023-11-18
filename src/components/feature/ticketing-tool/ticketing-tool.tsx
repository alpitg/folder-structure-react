import "./ticketing-tool.scss"

const TicketingToolApp = () => {

    return <>
        <div className="container wrapper">
            <br />
            <br />

            <a href="#" className="icon facebook">
                <div className="tooltip">Facebook</div>
                <span><i className="bi bi-facebook"></i></span>
            </a>
            <a href="#" className="icon twitter">
                <div className="tooltip">Twitter</div>
                <span><i className="bi bi-twitter"></i></span>
            </a>
            <a href="#" className="icon instagram">
                <div className="tooltip">Instagram</div>
                <span><i className="bi bi-instagram"></i></span>
            </a>
            <a href="#" className="icon github">
                <div className="tooltip">Github</div>
                <span><i className="bi bi-github"></i></span>
            </a>
            <a href="#" className="icon youtube">
                <div className="tooltip">Youtube</div>
                <span><i className="bi bi-youtube"></i></span>
            </a>
        </div>
    </>
}

export default TicketingToolApp;