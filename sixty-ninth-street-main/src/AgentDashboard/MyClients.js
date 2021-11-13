import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../components/contexts/AuthContext";

const MyClients = () => {
	const { currentUser } = useAuth();
	const [client, setClient] = useState([]);

	useEffect(() => {
		fetch(
			`https://sixtyninethstreet.herokuapp.com/api/getHireByAgent/${currentUser.user_email}`
		)
			.then((res) => res.json())
			.then((data) => setClient(data.data));
	}, []);
	return (
		<>
			{client.map((clnt) => (
				<div className="col-12 col-sm-6 col-md-4 mt-3">
					<div className="BSRSec">
						<Link to={`/singleAgent/${clnt._id}`} className="RjcardLInk">
							<div class="card RjcustomCard">
								{/* <img
									src={clnt.agent_image}
									class="card-img-top RjagentsCardImg"
									alt="agent_image"
								/> */}
								<div class="card-body">
									<h5 class="card-title">{clnt.user_email}</h5>
									<p class="card-text pt-2 RjAgentPageP">
                  {clnt.agent_name}
									</p>
									<span className="RjAgentPageSpan">{clnt.agent_title}</span>
									{/* <div className="RjAgentsPageIconSection">
										<div className="RjAgentsLeftIcon">
											<Link to="">{facebook}</Link>&nbsp;&nbsp;
											<Link to="">{linkend}</Link>&nbsp;&nbsp;
											<Link to="">{twitter}</Link>
										</div>
										<div className="RjAgentsrighttIcon">
											<Link to="">{email}</Link>&nbsp;&nbsp;
											<Link to="">{phone}</Link>
										</div>
									</div> */}
								</div>
							</div>
						</Link>
					</div>
				</div>
			))}
		</>
	);
};

export default MyClients;
