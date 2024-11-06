import errorPageImage from "../../../assets/images/github-error-page.png";
import Search from "../../Search/Search";

const NotFoundPage = () => {
    return (
        <div className="error-page">
            <img src={errorPageImage} className="error-image" alt="Github Error Page" width={1897} height={462} />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>Search a username to find a profile:</p>
                        <Search/>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage;