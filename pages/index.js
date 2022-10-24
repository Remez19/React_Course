import MeetupList from "../components/meetups/MeetupList";
import Head from "next/head";
import { MongoClient } from "mongodb";
import { Fragment } from "react";

const HomePage = (props) => {
  return (
    <Fragment>
      <Head>
        <title>Rect&Nextjs</title>
        <meta
          name="description"
          content="React&Nextjs project fetch Meetups data from mongoDB"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
};
/*

only in component files that are in the pages floder.
Nextjs will look first for this kind of function 
and will call it before the component function.
The code inside the function wil not be excuted on the client side and,
will never endup in the client side.
The function needs to allways return an object.
The object must have a "props" "field" and this field must contain an object.
this object with the field "props" than will be sent as our props
in our component.
kida like in java or c (console arguments) main(argv, args).
The revalidate field handy in cases where we want to revalidate (get the data again).
sometimes the data we are working with can be out-dated quickly therefore
if we use revalidate (and as a value we need to give it a number)
we tell nextjs that we want to call getStaticProps every number of seconds 
(the number we set as an argument. here we set it to 10 - every 10 seconds)
(only if requests come's to this path) 
*/
export async function getStaticProps() {
  // fetch data from database/Api/ or what ever
  const client = await MongoClient.connect(
    "mongodb+srv://Remez:vbMk3le70okvPy0r@react-udemy.bbvem7r.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const DataBase = client.db();
  const meetupsCollection = DataBase.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => {
        return {
          title: meetup.title,
          address: meetup.address,
          description: meetup.description,
          image: meetup.image,
          id: meetup._id.toString(),
        };
      }),
    },
    revalidate: 10,
  };
}

/*
this function will always run on the server after deployment.
use it in cases were we want to revalidate for every request.

export async function getServerSideProps(context) {
  // with the context we get access to the request:
  const req = context.req;
  // with the context we get access to the response:
  const res = context.res;
  // fetch data or anything we want to do.
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
*/

export default HomePage;
