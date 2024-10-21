
import BasicLayout from "../layout/BasicLayout.jsx";
import {Outlet} from "react-router-dom";

function QnaIndex() {
    return (
        <BasicLayout>
        <div>
            <Outlet/>
        </div>
        </BasicLayout>
    );
}

export default QnaIndex;