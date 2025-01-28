
export const elections = [
    {
        id: "el1",
        title: "Presidential Election 2025",
        description: "Election to choose the next president.",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgKRZPmpFH2XlLOzoDC0FEbLYcMibxdOXhSA&s",
        candidates: ["C1", "C2", "C3"],
        voters: []
    },
    {
        id: "el2",
        title: "Senate Election 2025",
        description: "Election for the senate representatives.",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Flag_of_Togo.svg/800px-Flag_of_Togo.svg.png",
        candidates: ["C4", "C5", "C6", "C7", "C8", "C9", "C10"],
        voters: []
    },
    {
        id: "el3",
        title: "Governor Election 2025",
        description: "Election to select state governors.",
        thumbnail: "https://cdn.britannica.com/73/4473-050-0D875725/Grand-Union-Flag-January-1-1776.jpg",
        candidates: ["C11", "C12"],
        voters: []
    },
    {
        id: 'el4',
        title: "Local Council Election 2025",
        description: "Election for local council members.",
        thumbnail: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvYDMGHijr0eNHJErBW21ldivdS86zZfzkYg&s",
        candidates: [],
        voters: []
    },
    {
        id: 'el5',
        title: "School Board Election 2025",
        description: "Election to choose members of the school board.",
        thumbnail: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/640px-Flag_of_Australia_%28converted%29.svg.png",
        candidates: [],
        voters: []
    }
];


export const Candidates = [
    {
        id: "C1",
        fullname: "Candidate One",
        image: "https://media.wired.com/photos/6541b1817f41095655a3119f/4:3/w_2560%2Cc_limit/Joe-Biden-AI-Harms-Business-1241626130.jpg",
        motto: "Leadership for the future",
        voteCount: 200,
        electionId: "el1"
    },

    {
        id: "C2", fullname: "Candidate Two",
        image: "https://governors.library.ca.gov/images/governors/photos/gnewsom.jpg",
        motto: "Transparency and Trust",
        voteCount: 32,
        electionId: "el1"
    },

    {
        id: "C3",
        fullname: "Candidate Three",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv4acjNzR_RusqyIN-Obi_QYzklHmxnn4v2g&s",
        motto: "Change we need",
        voteCount: 500,
        electionId: "el1"
    },

    {
        id: "C4",
        fullname: "Candidate Four",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XSrl58pcUreshjFsT-E9xqa11wzZjeL-fQ&s",
        motto: "Progress for all",
        voteCount: 315,
        electionId: "el2"
    },
    {
        id: "C5",
        fullname: "Candidate Five",
        image: "https://www.rollingstone.com/wp-content/uploads/2023/11/Jeff-Landry-death-penalty.jpg?w=1581&h=1054&crop=1",
        motto: "Unity and Strength",
        voteCount: 478,
        electionId: "el2"
    },
    {
        id: "C6",
        fullname: "Candidate Six",
        image: "https://www.arc.gov/wp-content/uploads/2020/07/GA-Governor-Brian-P.-Kemp-X2-high-res-500x600-c-default.jpg",
        motto: "A brighter tomorrow",
        voteCount: 120,
        electionId: "el2"
    },
    {
        id: "C7",
        fullname: "Candidate Seven",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxRCvyDHtnZczHJkiNOiM97A20JXvDLFulHw&s",
        motto: "Innovation and Integrity",
        voteCount: 290,
        electionId: "el2"
    },
    {
        id: "C8",
        fullname: "Candidate Eight",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/SC_Governor_Henry_McMaster_2019_%28cropped%29.jpg/220px-SC_Governor_Henry_McMaster_2019_%28cropped%29.jpg",
        motto: "Equality for everyone",
        voteCount: 45,
        electionId: "el4"
    },

    {
        id: "C9",
        fullname: "Candidate Nine",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQauJVzqqBD_k1gceoJg2IrUZ75NWvDs6oWaw&s",
        motto: "Stronger together",
        voteCount: 3,
        electionId: "el5"
    },

    {
        id: "C10",
        fullname: "Candidate Ten",
        image: "https://dims.apnews.com/dims4/default/88f2083/2147483647/strip/false/crop/2348x1566+0+0/resize/1486x991!/quality/90/?url=https%3A%2F%2Fstorage.googleapis.com%2Fafs-prod%2Fmedia%2F4b1226ef4688418bb58b6f9d06b7dc2d%2F2348.jpeg",
        motto: "Community first",
        voteCount: 169,
        electionId: "e3"
    },

    {
        id: "C11",
        fullname: "Candidate Eleven",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Tate_Reeves_2019.jpg/640px-Tate_Reeves_2019.jpg",
        motto: "Vision for the future",
        voteCount: 210,
        electionId: "el3"
    },
    {
        id: "C12",
        fullname: "Candidate Twelve",
        image: "https://www.oldbrightonians.com/images/stories/hannington_04a.jpg",
        motto: "Sustainable growth",
        voteCount: 45,
        electionId: "el4"
    }
];



export const Voters = [
    {
        id: "v1",
        fullname: "Alice Johnson",
        email: "alice.johnson@example.com",
        password: "password123",
        isAdmin: true,
        votedElections: ["e1", "e2"] // Voted in Presidential and Senate Elections
    },
    {
        id: "v2",
        fullname: "Bob Smith",
        email: "bob.smith@example.com",
        password: "password456",
        isAdmin: false,
        votedElections: ["e2", "e3"] // Voted in Senate and Governor Elections
    },
    {
        id: "v3",
        fullname: "Charlie Brown",
        email: "charlie.brown@example.com",
        password: "password789",
        isAdmin: true,
        votedElections: ["e1", "e2", "e3"] // Voted in all three elections
    },
    {
        id: "v4",
        fullname: "Diana Green",
        email: "diana.green@example.com",
        password: "password101",
        isAdmin: false,
        votedElections: [] // Did not vote in any election
    },
    {
        id: "v5",
        fullname: "Eve White",
        email: "eve.white@example.com",
        password: "password202",
        isAdmin: true,
        votedElections: ["e2"] // Voted only in Senate Election
    }
];



export default { elections, Candidates, Voters };