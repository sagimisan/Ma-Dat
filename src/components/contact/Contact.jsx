import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles, TextField, Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export default function Contact() {
  const classes = useStyles();

  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        margin="normal"
        inputRef={register({
          required: 'חובה לתת שם פרטי.',
          maxLength: {
            value: 12,
            message: 'השם חייב ליהיות קטן מ12 אותיות',
          },
        })}
        required
        name="name"
        label="שם פרטי"
      />
      {errors.name && <div>{errors.name.message}</div>}

      <TextField
        margin="normal"
        inputRef={register({
          required: 'חובה לתת שם משפחה.',
          maxLength: {
            value: 12,
            message: 'השם חייב ליהיות קטן מ12 אותיות',
          },
        })}
        required
        name="lastName"
        label="שם משפחה"
      />
      {errors.lastName && <div>{errors.name.message}</div>}

      <TextField
        margin="normal"
        inputRef={register({
          required: 'חייב לתת מייל',
          pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            message: 'חובה לתת כתובת תקנית!',
          },
        })}
        required
        id="email"
        label="אימייל"
        name="email"
      />
      {errors.email && <div>{errors.email.message}</div>}

      <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<SendIcon style={{ margin: "0 10px 0 0" }} />}
        type="submit"
      >
        שליחה
        </Button>
    </form>
  );
}
const useStyles = makeStyles((theme) => ({
  form: {
    display: "inline-grid"
  },
  button: {
    margin: theme.spacing(1),
  },
}));