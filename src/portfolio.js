/* Change this file to get your personal Porfolio */
import emoji from "react-easy-emoji";


const theme = {
  primaryTheme: "#6C63FF",
  secondaryTheme: "#55198b",
  easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
};

const greeting = {
	/* Your Summary And Greeting Section */
  username: "Ashok Chouhan",
  title: "Hi all, I'm Ashok",
  subTitle: emoji("A passionate Andoird App Developer 📱 having an experience of building Mobile applications with Android / Flutter."),
  resumeLink: "https://drive.google.com/file/d/15HGvV2uTsKXkQyJVQf8bUCDQD8NX3jaC/view?usp=sharing",
 
};

const socialMediaLinks = {
	/* Your Social Media Link */
  github: "https://github.com/ashok1708",
  linkedin: "https://www.linkedin.com/in/ashok-chouhan-3473b9165/",
  gmail: "ashok.chouhan1708@gmail.com",
  instagram: "https://www.instagram.com/ashok08_17/"
};

const skills = {
  data: [
    {
      title: "Android App Development",
      imagePath: "mobile_app.svg",
      skills: [
        "⚡  Develop highly interactive Front end / User Interfaces for your mobile applications",
        "⚡  Ensure applications are properly integrated with Android APIs.",
        "⚡  Integration of third party services such as Firebase/ Material Design / AWS"
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "ion-logo-android",
          style: {
            backgroundColor: "transparent",
            color: "#68F759"
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "white",
            color: "#D00000"
          }
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B"
          }
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28"
          }
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#CC6699"
          }
        },
        {
          skillName: "Kotlin",
          fontAwesomeClassname: "simple-icons:kotlin",
          style: {
           
            color: "#E34F26"
          }
        }
      ]
    },
    {
      title: "Data structure and Algorithms",
      imagePath: "dsa.svg",
      skills: [
        "⚡ To understanding about writing algorithms and step by step approach in solving problems with the help of fundamental data structures.",
        "⚡ To impart the basic concepts of data structures and algorithms"
        
      ],
      softwareSkills: [
        {
          skillName: "C",
          fontAwesomeClassname: "simple-icons:c",
          style: {
            color: "#2C8EBB"
          }
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
           // backgroundColor: "#000000",
            color: "#2C8EBB"
          }
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#E34F26"
          }
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#1572B6"
          }
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#CC6699"
          }
        }
      ]
    },
  
    {
      title: "UI/UX Design",
      imagePath: "ui_desinging.svg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience"
      ],
      softwareSkills: [
        {
          skillName: "Android",
          fontAwesomeClassname: "ion-logo-android",
          style: {
            color: "#68F759"
          }
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#F24E1E"
          }
        }
      ]
    }
  ]
};

const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://www.hackerrank.com/ashrit1708"
    },
    {
      siteName: "Geeks for Geeks",
      iconifyClassname: "fa-brands:goodreads",
      style: {
        color: "#2EC866"
      },
      profileLink: "https://auth.geeksforgeeks.org/user/ashokchouhan1708/profile"
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754"
      },
      profileLink: "https://www.hackerearth.com/@ashok426"
    }
  ]
}

const degrees = {
  degrees : [
    {
      title: "Jodhpur institute of engineering and technology, Jodhpur",
      subtitle: "B.Tech. in Computer Engineering",
      logo_path: "jiet_logo.png",
      alt_name: "JIET Jodhpur",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Android Develpment and Python Programming.",
        "⚡ Actively participated in Tech Fest ‘Open House 2017 and 2018’ in JIET Jodhpur, at college level."
      ],
      website_link: "https://jietjodhpur.ac.in/"
    }
  ]
}

const certifications = {
	certifications: [
		{
			title: "1st Runner-Up in Hackathon",
			subtitle: "- Smart Business Hackathon 2019",
			logo_path: "hackatho_logo.jpg",
			certificate_link:
      "https://www.facebook.com/JECRCfoundation/photos/a.668787183153104/2684957891536013/?type=3&theater",
			alt_name: "JECRC Hackathon",
			color_code: "#FFFFFFF9"
		},
		{
			title: "Semi-Finalist",
			subtitle: "-Smart India Hackathon 2020(JIET)",
			logo_path: "sih_2020.png",
			certificate_link:
				"https://www.instagram.com/p/B8aaI-lAhOd/",
			alt_name: "SIH 2020",
			color_code: "#00000099"
		},
		{
			title: "Android Internship",
			subtitle: "- CG Technosoft Pvt. Ltd.",
			logo_path: "cg_logo.png",
			certificate_link:
				"https://github.com/ashok1708/Ashok-Chouhan/blob/master/internship_cg.pdf",
			alt_name: "Internship",
			color_code: "#0C9D5899"
		},
		{
			title: "Qualifier",
			subtitle: "- India Innovation Challenge design contest",
			logo_path: "texus.jpg",
			certificate_link:
				"https://github.com/ashok1708/Ashok-Chouhan/blob/master/texus.pdf",
			alt_name: "IBM",
			color_code: "#FFFFFFF9"
		},
		{
			title: "Baseline: Data, ML, AI",
			subtitle: "- QWIKLABS by Google",
			logo_path: "basline.png",
			certificate_link:
				"https://www.qwiklabs.com/public_profiles/2015a68a-75c4-4bf9-b020-a2feca655c05",
			alt_name: "Google",
			color_code: "#D83B0199"
		},
		{
			title: "BigQuery For Data Analysis",
			subtitle: "-  QWIKLABS by Google",
			logo_path: "bigquery.png",
			certificate_link:
				"https://www.qwiklabs.com/public_profiles/2015a68a-75c4-4bf9-b020-a2feca655c05",
			alt_name: "Google",
			color_code: "#1F70C199"
		},
		{
			title: "Data Science on Google Cloud",
			subtitle: "-  QWIKLABS by Google",
			logo_path: "deeplearning_ai_logo.png",
			certificate_link:
				"https://www.qwiklabs.com/public_profiles/2015a68a-75c4-4bf9-b020-a2feca655c05",
			alt_name: "Google",
			color_code: "#0C9D5899"
		},
		{
			title: "Python Programmming Training",
			subtitle: "- Dmatics",
      logo_path: "python.png",
			alt_name: "Dmatics",
			color_code: "#FFFFFFF9"
		},
		{
			title: "Java Programmming Training",
			subtitle: "- Dmatics",
			logo_path: "java.png",
			certificate_link:
				"https://github.com/ashok1708/Java_Beginner_program",
			alt_name: "dmatics",
			color_code: "#FFFFFFF9"
		}
	]
};

const openSource = {
  /* Your Open Source Section to View Your Github Pinned Projects */
  /* To know how to get github key look at readme.md */

  githubConvertedToken: "ad100ac77b37c814ab2194473d9ee2d9c0cd4e00",
  githubUserName: "ashok1708"
};

const bigProjects = {
  /* Some Big Projects You have worked with your company */
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELP TO CREATE THEIR TECH",
  projects: [
    {
      image: "https://drive.google.com/uc?id=1exWn9T6j8TsfDDHJnS3VR66eP6RiGAfY",
      link: "http://saayahealth.com/"
    },
    {
      image: "http://nextu.se/wp-content/themes/nextu/images/og_img.jpg",
      link: "http://nextu.se/"
    }
  ]
};

const achievementSection = {
  /* Your Achievement Section Include Your Certification Talks and More */

  title: "Achievements And Certifications 🏆 ",
  subtitle:
    "Achievements, Certifications Award Letters and Some Cool Stuff that i have done !",

  achivementsCards: [
    {
      title: "Google Code-In Finalist",
      description:
        "First Pakistani to be selected as Google Google-in Finalist from 4000 students from 77 diffrent countries",
      image:
        "https://1.bp.blogspot.com/-Ig-v1tDXZt4/XDODmZvWp1I/AAAAAAAAB0A/KtbFdBPFVQw2O15FekkIR0Yg8MUp--rngCLcBGAs/s1600/GCI%2B-%2BVertical%2B-%2BGray%2BText%2B-%2BWhite%2BBG.png",
      footerLink: [
        {
          name: "Certification",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url:
            "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url:
            "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      description:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Google_Assistant_logo.svg/1200px-Google_Assistant_logo.svg.png",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url:
            "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      description:
        "Completed Certifcation from SMIT for PWA Web App Development",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu93Bd6LDbxPEOXr-hfLqLYzmHny8c0MJoI3exQP-lwpFLRT7g&s",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ]
};

const blogSection = {
  /* Blogs Section */

  title: "Blogs",
  subtitle:
    "With love for individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
  link: "https://ashutoshhathidara.wordpress.com",
  avatar_image_path: "blogs_image.svg"

  
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅",

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
      image:
        "https://scontent.fkhi6-1.fna.fbcdn.net/v/t1.0-9/76714032_1730516240415559_1293494289556307968_o.jpg?_nc_cat=103&_nc_ohc=s5f81rdZd6wAQmqUa52YQBA21MjVOy7e-HN9jI7MspRDC-v5ahEouyInQ&_nc_ht=scontent.fkhi6-1.fna&oh=c29141a9a0de7ff2011a8191f5475a78&oe=5E83127C"
    }
  ]
};

// Podcast Section
const podcastSection = {
  title: "Podcast 🎙️",
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ]
};

const contactInfo = {
  title: "Contact Me ☎️",
  subtitle: "Discuss a project or just want to say hi my inbox is open for all",
  number: "+91-9509856067",
  email_address: "ashok.chouhan1708@gmail.com"
};

export {
	theme,
	greeting,
	socialMediaLinks,
	skills,
	competitiveSites,
	degrees,
	certifications,
	openSource,
	bigProjects,
	achievementSection,
	blogSection,
	talkSection,
	podcastSection,
	contactInfo
};
