import { useLocation } from "react-router-dom";

export default function Dailynews(props) {
        const location = useLocation() ;
        console.log(location.pathname);
        return (
            <div>
                daily news about 
            </div>
        );

};