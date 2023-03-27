import banner from '../../resources/img/Banner.png';
import ComicsList from "../comicsList/ComicsList";
import ErrorBoundary from "../errorBoundary/ErrorBoundary";

const ComicsPage = () => {
    return(
        <>
            <img src = {banner}></img>
            <ErrorBoundary><ComicsList/></ErrorBoundary>
        </>
    );
};

export default ComicsPage;