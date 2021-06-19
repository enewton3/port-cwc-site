import { makeStyles } from "@material-ui/core";
import React from "react";
import { sponsors } from "../assets/sponsors";

const useStyles = makeStyles((theme) => ({
  sponsors: { textAlign: "center", color: "black" },
  heading: { marginTop: "5vh" },
  sponsor: {},
}));

export default function Sponsors() {
  const classes = useStyles();

  return (
    <div className={classes.sponsors}>
      <div>
        <h3 className={classes.heading}>25th Anniversary Sponsor</h3>
        {sponsors.AnniversarySponsors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Presenting Sponsor</h3>
        {sponsors.PresentingSponsors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Platinum Sponsor</h3>
        {sponsors.PlatinumSponsors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Leadership Sponsor</h3>
        {sponsors.LeadershipSponsors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Gold Sponsor</h3>
        {sponsors.GoldSponsors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Entertainment Sponsor</h3>
        {sponsors.EntertainmentSponsors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Celebration Sponsor</h3>
        {sponsors.CelebrationSponsors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Exceptional Friend</h3>
        {sponsors.ExceptionalFriends.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Community Donor</h3>
        {sponsors.CommunityDonors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>

      <div>
        <h3 className={classes.heading}>Friendship Donor</h3>
        {sponsors.FriendshipDonors.map((person, index) => (
          <p
            key={`${person.split(" ")[0]}${index}`}
            className={classes.sponsor}
          >
            {person}
          </p>
        ))}
      </div>
    </div>
  );
}
