import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import DoctorContext from "./Components/utils/DoctorContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<DoctorContext>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</DoctorContext>
);