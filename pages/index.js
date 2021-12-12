import { useRouter } from "next/router";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUP = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80",
        address: "Some place somewhere",
        description: "I hope is cool",
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://images.unsplash.com/photo-1495954380655-01609180eda3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
        address: "Some place somewhere else",
        description: "I hope is cool",
    },
    {
        id: "m3",
        title: "A Third Meetup",
        image: "https://images.unsplash.com/photo-1514565131-fce0801e5785?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=956&q=80",
        address: "Some place somewhere far way",
        description: "I hope is cool",
    },
];
const HomePage = () => {
    const router = useRouter();
    return <MeetupList meetups={DUMMY_MEETUP}></MeetupList>;
};
export default HomePage;
