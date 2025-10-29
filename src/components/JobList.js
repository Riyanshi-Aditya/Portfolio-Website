import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`
    };
  } else {
    return {
      id: `vertical-tab-${index}`
    };
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`
  }
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "IIT Jammu": {
      jobTitle: "Research Intern @",
      duration: "NOV 2022 - PRESENT",
      desc: [
        " Read thesis on predicting the flow of glaciers",
        " Identifying the Data Set that could be used for mapping of glacier extent using deep learning method and improvising pre existing researches",
        " Relevant technologies/tools used: Python · Machine Learning."
      ]
    },
    "NIT Srinagar - Training and Placement Department": {
      jobTitle: "Internship Coordinator @",
      duration: "OCT 2022 - PRESENT",
      desc: [
        " Contacting various companies to invite them to the campus to hire interns",
        " Handling whole Internship Procedure, while acting as the go-to between the students and the company",
        "Relevant skills used: Communication · Public Relations · Time Management · Leadership"
      ]
    },
     "Semicolon (NIT Srinagar)" : {
      jobTitle: "Semicolon Student Coordinator @",
      duration: "NOV 2022 - PRESENT",
      desc: [
        " Organised Coding events, and hackathons every week, while working on the club's website",
        " Organised various cultural and fun events such as Animiea, Extraction, Ganesh Chaturthi, Ram Navami, etc",
        "Relevant skills used: Communication · Public Relations · Time Management · Leadership"
        // "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations."
      ]
    },
    "NIT Srinagar": {
      jobTitle: "Student Representative @",
      duration: "DEC 2020 - SEP 2022",
      desc: [
        " Handled all the issues and queries of students and representing my year's major to the authorities.",
        " Relevant skills used: Communication · Public Relations · Time Management · Leadership"
      ]
    },
    // "UN Volunteer": {
    //   jobTitle: "Covid Relief Ambassador @",
    //   duration: "MAY 2022 - JUL 2022",
    //   desc: [
    //     "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
    //     "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
    //     "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
    //   ]
    // },
    "Let's Vume": {
      jobTitle: "Marketing Intern @",
      duration: "APR 2021 - MAY 2021,",
      desc: [
        "Attracted the audience through my Interaction skills.",
        "Made a Custom Discord Server for Music Community.",
        "Headed the Graphics Team and Created Social Media Posts for artists and events.",
        "Worked with the tech team to Design the Website."
      ]
    },
    "Hult Prize, SolesearchIndia": {
      jobTitle: "Graphic Designer @",
      duration: "DEC 2020 - FEB 2021",
      desc: [
        "Designed and created letterheads as well as Banners along with the team",
        // "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
        "Relevant technologies/tools used: Canva · Adobe Illustrator · Adobe Photoshop"
      ]
    },
    "Casio and a few companies": {
      jobTitle: "Campus Ambassador @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Coordinated the events and opportunities provided by the organisations, to the students",
        // "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
        "Relevant skills used: Communication · Public Relations · Time Management · Leadership"
      ]
    }/*,
    "Q": {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
        "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
        "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
      ]
    },
    "R": {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
        "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
        "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
      ]
    },
    "S": {
      jobTitle: "Software Engineering Intern @",
      duration: "MAY 2019 - AUG 2019",
      desc: [
        "Developed a Node.js smart home system through Facebook’s Messenger integrated with Bocco sen- sors and other smart devices (Nest camera, TPLink smart plugs) to derive conclusions about the current state of the home",
        "Identified continuous improvements in data quality, design reports and coding activities, presenting results and findings to internal business stakeholders.",
        "Relevant technologies/tools used: DialogFlow, Vision, AutoML, Messenger Bot API, MongoDB."
      ]
    }*/
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <FadeInSection delay={`${i + 1}00ms`}>
                  <li key={i}>{descItem}</li>
                </FadeInSection>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;
