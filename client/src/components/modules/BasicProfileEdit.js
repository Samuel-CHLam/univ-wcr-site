import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { post } from "../../utilities";

import ButtonFlex from "./ButtonFlex";

import "../../utilities.css";
import "./BasicProfileEdit.css";

const BasicProfileEdit = ({userId, currentBasicProfile, afterSubmit}) => {
  const {register, handleSubmit, formState: { errors }} = useForm();
  const [data, setData] = useState(currentBasicProfile);

  const onSubmit = (data, e) => {
    setData(JSON.stringify(data));
    post("/api/basicuserupdate", {userId: userId, ...data}).then(afterSubmit);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="basicprofileedit-item">
        <div className="basicprofileedit-item-left">Name:</div>
        <div className="basicprofileedit-item-right">
            <input {...register("name", {required: true, maxLength: 30})} placeholder="name" defaultValue={currentBasicProfile.name}/>
            {errors.name ? (
                <>
                    {errors.name.type === "required" && <span>Your name is required.</span>}
                    {errors.name.type === "maxLength" && <span>Max length exceeded.</span>}
                </>) : null}
        </div>
      </div>
      <div className="basicprofileedit-item">
        <div className="basicprofileedit-item-left">WCR Position:</div>
        <div className="basicprofileedit-item-right">
            <fieldset disabled>
            <input {...register("wcrposition")} placeholder="WCR Role" defaultValue={currentBasicProfile.wcrRole} />
            </fieldset>
            <span>You cannot change this field.</span>
        </div>
      </div>
      <div className="basicprofileedit-item">
        <div className="basicprofileedit-item-left">Subject:</div>
        <div className="basicprofileedit-item-right">
            <input {...register("subject", {required: true})} placeholder="subject" defaultValue={currentBasicProfile.subject}/>
            {errors.subject && errors.subject.type === "required" && <span>Your subject is required.</span>}
        </div>
      </div>
      <div className="basicprofileedit-item">
        <div className="basicprofileedit-item-left">Joined Univ since:</div>
        <div className="basicprofileedit-item-right">
            <input {...register("joinedUnivSince", {required: "Your year of joining Univ is required.", min: 1249, max: 9999})} placeholder="Joined Univ Since" defaultValue={currentBasicProfile.joinedUnivSince}/>
            {errors.joinedUnivSince ? (<>
                {errors.joinedUnivSince.type === "required" ? (<span>Your year of joining Univ is required.</span>) : (<span>Invalid input: input should be between 1249 and 9999.</span>)}
            </>) : null}
        </div>
      </div>
      <div className="basicprofileedit-item">
        <div className="basicprofileedit-item-left">Website:</div>
        <div className="basicprofileedit-item-right">
            <input {...register("websiteLink")} placeholder="Website link" defaultValue={currentBasicProfile.websiteLink}/>
        </div>
      </div>
      <div className="basicprofileedit-item">
        <div className="basicprofileedit-item-left">Facebook:</div>
        <div className="basicprofileedit-item-right">
            <input {...register("facebookLink")} placeholder="Facebook link" defaultValue={currentBasicProfile.facebookLink}/>
        </div>
      </div>
      <div className="basicprofileedit-item">
        <div className="basicprofileedit-item-left">Twitter:</div>
        <div className="basicprofileedit-item-right">
            <input {...register("twitterLink")} placeholder="Twitter link" defaultValue={currentBasicProfile.twitterLink}/>
        </div>
      </div>
      <div className="basicprofileedit-item">
        <div className="basicprofileedit-item-left">LinkedIn:</div>
        <div className="basicprofileedit-item-right">
            <input {...register("linkedInLink")} placeholder="LinkedIn link" defaultValue={currentBasicProfile.linkedInLink}/>
        </div>
      </div>
      <ButtonFlex display={[{key: 1, isSubmit: true}, {key: 2, des: "Return to profile", onClick: afterSubmit}]}/>
    </form>
  );
}

export default BasicProfileEdit;