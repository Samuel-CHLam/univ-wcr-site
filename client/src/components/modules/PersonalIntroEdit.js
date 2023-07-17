import React, { useEffect } from 'react';
import ReactQuill from 'react-quill';
import { useForm } from "react-hook-form";
import sanitizeHtml from "sanitize-html-react";
import { post } from "../../utilities";

import 'react-quill/dist/quill.snow.css';

import ButtonFlex from './ButtonFlex';


const PersonalIntroEdit = ({ userId, currentPersonalIntro, afterSubmit}) => {
  const {register, handleSubmit, setValue, watch, formState: { errors }} = useForm({
    defaultValues: {personalIntro: sanitizeHtml(currentPersonalIntro)}
  });

  useEffect(() => {
    register("personalIntro", { required: true });
  }, [register]);

  const onEditorStateChange = (editorState) => {
    setValue("personalIntro", editorState);
  };

  const onSubmit = (entry, e) => {
    post("/api/userpersonalintroupdate", {googleid: userId, ...entry}).then(afterSubmit);
  }

  const personalIntroContent = watch("personalIntro");

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ReactQuill theme="snow" value={personalIntroContent} onChange={onEditorStateChange} />
      <ButtonFlex display={[{key: 1, isSubmit: true, onClick: handleSubmit(onSubmit)}, {key: 2, des: "Return to profile", onClick: afterSubmit}]}/>
      {errors.emailContent && <span>Enter valid content!</span>}
    </form>)
}

export default PersonalIntroEdit;