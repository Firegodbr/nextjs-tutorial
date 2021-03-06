import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active meetups!"
                />
            </Head>
            <MeetupList meetups={props.meetups}></MeetupList>
        </Fragment>
    );
};
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//     return {
//         props: {
//             meetups: DUMMY_MEETUP,
//         },
//     };
// }
export async function getStaticProps() {
    const client = await MongoClient.connect(
        "mongodb+srv://rfmdev:Abc000@cluster0.4k8eo.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                description: meetup.description,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 10,
    };
}
export default HomePage;
