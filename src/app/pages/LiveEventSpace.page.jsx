import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Team from "../components/Team";
import { ContactDetails, ContactForm } from "./Contact.page";
import { AboutESSTHSSB, AboutTSYP, AboutTunisiaSection } from "./Home.page";
import { Fade } from "react-awesome-reveal";
import {
	faCalendar,
	faChalkboardUser,
	faGamepad,
	faHandshake,
	faMapLocationDot,
	faPersonRunning,
	faRefresh,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function LiveEventSpacePage() {
	return (
		<div className="flex min-h-full items-center justify-center">
			<div>
				<div>
					<h1 className="mb-10 text-center text-3xl font-bold tracking-tight   lg:text-5xl lg:font-extrabold lg:leading-none">
						Live Congress Space
					</h1>
				</div>
				<div className="grid gap-8 md:grid-cols-3">
					{[
						{
							name: "Challenges",
							icon: faPersonRunning,
							link: "/challenges",
						},
						{
							name: "Sessions",
							icon: faChalkboardUser,
							link: "/sessions",
						},
						{
							name: "Schedule",
							icon: faCalendar,
							link: "/schedule",
						},
						{
							name: "Partners & Sponsors",
							icon: faHandshake,
							link: "/partners-sponsors",
						},
						{
							name: "Venue",
							icon: faMapLocationDot,
							link: "/venue",
						},
						{
							name: "Virtual Game",
							icon: faGamepad,
							link: "/virtual-game",
						},
					].map((e) => (
						<Link
							to={e.link}
							className="flex items-center justify-center gap-2 rounded-2xl border-2 bg-gray-50 p-8 text-xl font-semibold transition hover:border-gray-600 focus:border-gray-900 dark:border-gray-800 dark:bg-black dark:hover:border-gray-600 dark:focus:border-gray-500"
						>
							<FontAwesomeIcon icon={e.icon} />
							{e.name}
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}