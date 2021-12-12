import Head from "next/head";
import { useRouter } from "next/router";
import { Fragment } from "react";
import NewMeetForm from "../components/meetups/NewMeetupForm";
const NewMeetupPage = () => {
    const router = useRouter();
    const addMeetupHandler = async (enteredMeetUp) => {
        const response = await fetch("/api/new-meetup", {
            method: "POST",
            body: JSON.stringify(enteredMeetUp),
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();
        router.push("/");
    };
    return (
        <Fragment>
            <Head>
                <title>Add a New Meetup</title>
                <meta
                    name="description"
                    content="Add your own meetup and create amazing networking opportunities!"
                />
            </Head>
            <NewMeetForm onAddMeetup={addMeetupHandler} />
        </Fragment>
    );
};

export default NewMeetupPage;
