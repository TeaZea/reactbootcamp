import classes from "./MeetupLists.module.css";
import MeetupItems from "./MeetupItems";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.meetups.map((meetup) => (
        <MeetupItems
          key={meetup.it}
          id={meetup.id}
          image={meetup.image}
          title={meetup.address}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
}

export default MeetupList;
