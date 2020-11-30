import React from "react";
import "./style.css";

export default function Contact(props) {
  return (
    <div className="col-sm-4">
      <div className="singleContactWrapper">
        <div className="contactPersonImg text-center">
          <i className="fas fa-user-tie"></i>
        </div>
        <div className="contactPersonInfo text-center">
          <h2>{props.contact.name}</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> Kisko, Finland
          </p>
          <h3>
            <i className="far fa-envelope"></i> <a>{props.contact.email}</a>
          </h3>
          <h3 className="phone">
            <i className="fas fa-phone-volume"></i> {props.contact.phone}
          </h3>
        </div>
        <div className="contactUtility text-center">
          <div
            className="moreInfo"
            //   onClick={this.props.editehandleOpen}
          >
            <p>More Info</p>
            <i className="fas fa-long-arrow-alt-right"></i>
          </div>
          <div className="editInfo">
            <i className="far fa-edit" title="For Edit"></i>
          </div>

          <div
            className="deleteInfo"
            onClick={() => props.deletehandler(props.contact)}
          >
            <i className="far fa-trash-alt" title="For Delete"></i>
          </div>

          <div
            className="likeInfo"
            onClick={() => props.favouriteHandler(props.contact)}
          >
            {props.contact.isFavourite ? (
              <i className="fas fa-thumbs-up" title="For Unfavorite"></i>
            ) : (
              <i className="far fa-thumbs-up" title="For Fovrite"></i>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
