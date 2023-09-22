import React from "react";

const emergencyConcerns = [
    {
        name: "General Emergency",
        description: (<>
        <p>You should inform the lodge any emergencies happening within the college, or 
            the central security office if the emergency is happening in other areas of the 
            university office. The porters/securities have been trained to provide initial assessments 
            and could help with further reporting if necessary.</p>
        <p><b>The lodge is open from 7am to 11pm, but you can contact the head porter / central 
            security office at any time.</b></p>
        </>),
        stageOne: [
            (<>Visit the lodge in person (7am to 11pm, tel: (0)7775 764117 if the 
            porters are away)</>), 
            (<>Head porter (24 hr, tel: (0)1865 276602, extension: 76602, email: <a href="mailto:lodge@univ.ox.ac.uk">
                lodge@univ.ox.ac.uk</a>)</>), 
            (<>Junior Deans (Night)</>)
        ],
        stageTwo: [(<>Security office, tel: (0)1865 272944</>)],
        stageThree: [(<>Thames Valley Police, tel: 999</>)],
    },
    {
        name: "Suicidal Thoughts",
        description: (<>You are not alone! Our welfare team and other parties are here 
        to provide confidential, non-judgmental supports. A vast majority of people 
        who have felt suicidal go on to live fulfilling lives!
        </>),
        stageOne: [ 
            (<>Chaplain and Welfare Fellow: Rev. Dr. Andrew Gregory <a href="mailto:andrew.gregory@univ.ox.ac.uk">andrew.gregory@univ.ox.ac.uk</a></>), 
            (<>WCR Welfare committee members</>)
        ],
        stageTwo: [
            (<>University counselling service</>), 
            (<>Student Union</>)],
        stageThree: [
            (<>Your general practice (GP)</>), 
            (<>Oxford Nightline</>), 
            (<>Samaritans</>), 
            (<>Papyrus</>), 
            (<>CALM</>)],
    },
    {
        name: "(Sexual) Harassment",
        description: (<>
        <p>The college takes any harassments seriously. Please make the 
        college harassment officers as your first points of contact if you have 
        experienced any harassment within the college, or would like to seek general 
        advice. You can also talk to any other members of the welfare team / external 
        parties if necessary. Please also refer to the <a href="http://bit.ly/univpolicy">college code</a> for any general 
        harassments.</p>
        <p><b>Should you wish to report your harassment to a police, please consider 
            retaining evidence of harassments by following the following guidance.</b></p>
        </>),
        stageOne: [(<>
            <div>Harassment officers:</div> 
            <ul>
            <li>Dr. Trevor Sharp <a href="mailto:Trevor.Sharp@univ.ox.ac.uk">Trevor.Sharp@univ.ox.ac.uk</a>,</li> 
            <li>Cameron Ott <a href="mailto:Cameron.Ott@univ.ox.ac.uk">Cameron.Ott@univ.ox.ac.uk</a>,</li> 
            <li>Prof. Sarah Harper <a href="mailto:Sarah.Harper@univ.ox.ac.uk">Sarah.Harper@univ.ox.ac.uk</a></li>
            </ul>
            </>)],
        stageTwo: [
            (<>University counselling service</>), 
            (<>Student Union</>)],
        stageThree: [
            (<>Your general practice</>), 
            (<>Oxford Nightline</>), 
            (<>Samaritans</>), 
            (<>Papyrus</>), 
            (<>CALM</>)],
    }
]

export default emergencyConcerns