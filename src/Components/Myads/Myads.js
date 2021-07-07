import React, { useContext, useEffect, useState } from "react";
import {FirebaseContext } from "../../Store/Context";
import "./Myads.css";

function Posts() {
  const { firebase } = useContext(FirebaseContext);
  const [myAds, setMyAds] = useState([]);

  

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        const uid = user.uid;
        firebase
          .firestore()
          .collection("products")
          .where("userId", "==", uid)
          .get()
          .then((snapshot) => {
            const myads = snapshot.docs.map((product) => {
              return {
                ...product.data(),
                id: product.id,
              };
            });
            setMyAds(myads);
          });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleDelete = (id) =>{
      firebase.firestore().collection("products")
        .doc(id)
        .delete()
        .then(() => {
          console.log("Document successfully deleted!");
        })
  }

  return (
    <div className="myadsParentDiv">
      <div className="myadsheading">
        <span>Myads</span>
      </div>
      <div className="cards">
        {myAds.map((product) => {
          return (
            <div className="card">
              <div className="favorite">
                <i
                  onClick={() => handleDelete(product.id)}
                  class="fas fa-trash-alt"
                ></i>
              </div>
              <div className="image">
                <img src={product.url} alt="loading...." />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
