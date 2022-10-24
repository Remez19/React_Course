import { Fragment } from "react";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = (props) => {
  return (
    <Fragment>
      <Head>
        <title>{props.meetupData.title}</title>
        <meta name="description" content={props.meetupData.description} />
      </Head>
      <MeetupDetail
        img={props.meetupData.image}
        alt={props.meetupData.title}
        address={props.meetupData.address}
        description={props.meetupData.description}
      />
    </Fragment>
  );
};

// Needed because its a dynamic page component and we using
// getStaticProps
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://Remez:vbMk3le70okvPy0r@react-udemy.bbvem7r.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const DataBase = client.db();
  const meetupsCollection = DataBase.collection("meetups");
  // gewt only the id field
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  // Creating the pages paths dynamically (Array of paths)
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://Remez:vbMk3le70okvPy0r@react-udemy.bbvem7r.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const DataBase = client.db();
  const meetupsCollection = DataBase.collection("meetups");
  // gewt only the id field
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectId(meetupId),
  });
  client.close();
  return {
    props: {
      meetupData: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        image: selectedMeetup.image,
        description: selectedMeetup.description,
      },
    },
  };
}

export default MeetupDetails;

/*
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "Haifa City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Western_Haifa_from_the_air.jpg",
    address: "Haifa",
    description: "The First meetup",
  },
  {
    id: "m2",
    title: "Haifa City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/1d/Western_Haifa_from_the_air.jpg",
    address: "Haifa-Center",
    description: "The Second meetup",
  },
];
*/
