import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ExperienceAccordion from '../../containers/experienceAccordion/ExperienceAccordion.js';
// import experience from '../../shared/experience_data.json';
import "./Experience.css";
import { Fade } from "react-reveal";

const experience = {
	title: "Experience",
	subtitle: "Work, Internship and Volunteership",
	description:
		"I have worked with many evolving startups as ML and DL Developer, Designer and Software Architect. I have also worked with some well established companies mostly as AI Developer. I love organising events and that is why I am also involved with many opensource communities as a representative.",
	header_image_path: "experience.svg",
	sections: [
		{
			title: "Achievement",
			experiences: [
				{
					title: "Smart Business Hackathon 2019",
					company: "JECRC Foundation",
					company_url: "https://www.facebook.com/JECRCfoundation/photos/a.668787183153104/2684957891536013/?type=3&theater",
					logo_path: "basline.png",
					duration: "11-12 Oct 2019",
					location: "Jaipur, Rajasthan",
					description:
						"Won II prize in Smart Business Hackathon organized at JECRC Foundation and sponsored by RTU associated with TUQIP III (2019). ",
					color: "#9b1578"
				},
				{
					title: "Smart India Hackathon 2020",
					company: "JIET Jodhpur",
					company_url: "https://www.instagram.com/p/B8aaI-lAhOd/",
					logo_path: "jiet_logo.png",
					duration: "16-17 Jan 2020",
					location: "Jodhpur, Rajasthan",
					description:
						"Semi-Finalist for “Smart India Hackathon 2020” by Internal hackathon organized by JIET Jodhpur.",
					color: "#9947F5"
				},
				{
					title: "Rajasthan Student Startup Exposure Program (RSSEP)",
					company: "Department of Information Technology and Communication (Rajasthan)",
					company_url: "https://istart.rajasthan.gov.in/",
					logo_path: "main_logo.png",
					duration: "23 June 2018",
					location: "Jaipur, Rajasthan",
					description:
						"Semi-Finalist of “Rajasthan Student Startup Exposure Program (RSSEP)” hosted by the Department of Information Technology and Communication that took place in Manipal University, Jaipur.",
					color: "#F5A047"
				}
			]
		},
		{
			title: "Internships / Training",
			experiences: [
				{
					title: "Android App Development",
					company: "CG Technosoft Pvt. Ltd.",
					company_url: "http://cgt.co.in/",
					logo_path: "cg_logo.png",
					duration: "Dec 2019 - Jan 2020",
					location: "Jodhpur, Rajasthan",
					description:
					"In this internship I learnt development of Android app and worked upon various projects.",
					color: "#ee3c26"
				},
				{
					title: "Software Intern",
					company: "Open Innovation Lab",
					company_url:
						"https://www.openinnovationslab.com/",
					logo_path: "logo_oil.png",
					duration: "May 2018 - July 2018",
					location: "Jodhpur, Rajasthan",
					description:
						"Worked on the development and designing side of project like AI chatbot using IBM watson. Also learned application UI design & prototyping for RSSEP challenge.",
					color: "#58F547"
				},
				{
					title: "Python Programming",
					company: "Dmatics Technology Pvt. Ltd.",
					company_url:
						"https://www.justdial.com/Jodhpur/Dmatics-Technology-Near-High-Court-Colony-High-Court-Road/0291PX291-X291-001100181891-P4P5_BZDET",
					logo_path: "dmatics.jpg",
					duration: "June 2019 - July 2019",
					location: "Jodhpur, Rajasthan",
					description:
						"In this training I learnt about Python programming, different functionality of Python and implementation of Python in real computer science world.",
					color: "#0071C5"
				}
			]
		},
		{
			title: "Volunteerships",
			experiences: [
				{
					title: "Campus Hustler",
					company: "Skillenza",
					company_url: "https://skillenza.com/home",
					logo_path: "community_skillenza.png",
					duration: "April 2020 - PRESENT",
					location: "Jodhpur, Rajasthan",
					description:
					"Skillenza Campus Hustler Programr is a program for university students to lead the awareness and to promote competitive programming within out college.",
					color: "#4285F4"
				},
				{
					title: "Campus Ambassador",
					company: "BitGrit",
					company_url: "https://bitgrit.net/",
					logo_path: "bitgrit.jpg",
					duration: "Dec 2019 - PRESENT",
					location: "Jodhpur, Rajasthan",
					description:
						" Bitgrit INC Campus Ambassador programme is program for establishing a Bitgrit community in the college, making the community understand about Bitgrit platform and how they would get benefited from it and  Co-ordinating with the core team for events",
					color: "#AE47F5"
				},
				{
					title: "Devfest ‘19",
					company: "Google Developer Group",
					company_url: "https://www.meetup.com/GDGJodhpur/",
					logo_path: "google_logo.png",
					duration: "14 Sept 2019",
					location: "Jodhpur, Rajasthan",
					description:
						"My responsibility for this program was to organized the event.",
					color: "#000000"
				},
				{
					title: "Developer Program Member",
					company: "Github",
					company_url: "https://github.com/",
					logo_path: "github_logo.png",
					duration: "July 2019 - PRESENT",
					location: "Work From Home",
					description:
						"I am actively contributing to many opensource projects. I have contributed to projects of organisations like Android, Python, Java etc. These contributions include bug fixes, feature requests and formulating peoper documentation for project.",
					color: "#181717"
				}
			]
		}
	]
};

class Experience extends Component {
	render() {
		return (
			<div className="experience-main">
				<Header />
				<div className="basic-experience">
					<Fade bottom duration={1000} distance="40px">
						<div className="experience-heading-div">
							<div className="experience-heading-img-div">
								<img
									src={require(`../../assests/images/${experience["header_image_path"]}`)}
								    alt=""
								/>
							</div>
							<div className="experience-heading-text-div">
								<h1 className="experience-heading-text">{experience.title}</h1>
								<h3 className="experience-heading-sub-text">
									{experience["subtitle"]}
								</h3>
								<p className="experience-header-detail-text subTitle">
									{experience["description"]}
								</p>
							</div>
						</div>
					</Fade>
				</div>
				<ExperienceAccordion sections={experience["sections"]} />
				<Footer />
			</div>
		);
	}
}

export default Experience;
