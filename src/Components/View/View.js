import React, { useContext, useEffect, useState } from 'react';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/PostCotext';
import './View.css';
function View() {

const [userDetails, setUserDetils]= useState()
const {postDetails} =useContext(PostContext)
const {firebase} =useContext(FirebaseContext)
useEffect(() => {
  const { userId } = postDetails;
  firebase
    .firestore()
    .collection("users")
    .where("id", "==", userId)
    .get()
    .then((res) => {
      res.forEach((doc) => {
        setUserDetils(doc.data());
      });
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
},[])


  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price} </p>
          <span>{postDetails.name}</span>
          <p>{postDetails.category}</p>
          <span>{postDetails.createdAt}</span>
        </div>
        {userDetails &&
        <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phonenumber}</p>
        </div>
}
      </div>
    </div>
  );
}
export default View;
