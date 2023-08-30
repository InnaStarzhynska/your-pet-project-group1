import React from 'react';
import * as Yup from 'yup';
import { ContentBox, Input, Label } from './ChooseOptions.styled';
import { Formik, Form, ErrorMessage } from 'formik';
import { useNavigate } from 'react-router-dom';
import {
  ButtonBox,
  ErrorText,
  Button,
} from 'pages/AddPetPage/AddPetPage.styled';
import SvgIcon from 'components/SvgIcon/SvgIcon';
import { colors } from '../../../constants/colors';

const validationChooseOptions = Yup.object().shape({
  category: Yup.string()
    .oneOf(['your pet', 'sell', 'lost/found', 'in good hands'])
    .required('Сhoose one of the categories! '),
});

export default function ChooseOptions(props) {
  const navigate = useNavigate();

  const handleSubmit = values => {
    props.next(values);
  };

  return (
    <Formik
      initialValues={props.data}
      onSubmit={handleSubmit}
      validationSchema={validationChooseOptions}
    >
      {({ values }) => (
        <Form>
          <ContentBox>
            <Input type="radio" name="category" value="your pet" id="1" />
            <Label htmlFor="1">your pet</Label>
            <Input type="radio" name="category" value="sell" id="2" />
            <Label htmlFor="2">sell</Label>
            <Input type="radio" name="category" value="lost/found" id="3" />
            <Label htmlFor="3">lost/found</Label>
            <Input type="radio" name="category" value="in good hands" id="4" />
            <Label htmlFor="4">in good hands</Label>
          </ContentBox>
          <ErrorMessage name="category">
            {msg => <ErrorText>{msg}</ErrorText>}
          </ErrorMessage>
          <ButtonBox>
            <Button type="submit" $primary>
            Next&nbsp;&nbsp;
            <SvgIcon id={'icon-pawprint-1'} color={'none'} />
            </Button>
            <Button type="button" onClick={() => navigate(-1)}>
            <SvgIcon id={'icon-arrow-left'} color={colors.blueColor} />
            &nbsp;&nbsp;Cancel
            </Button>
          </ButtonBox>
        </Form>
      )}
    </Formik>
  );
}
