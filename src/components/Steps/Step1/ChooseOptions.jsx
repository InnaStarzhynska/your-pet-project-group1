import React from 'react';
import { ContentBox, Input, Label } from './ChooseOptions.styled';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

export default function ChooseOptions(props) {
  const navigate = useNavigate();

  const handleSubmit = (values) => {
    props.next(values)
  }

  return (
    <Formik
    initialValues={props.data}
    onSubmit={handleSubmit}
    >
      {({values}) => (
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

          <button type='button' onClick={() => navigate(-1)}>Cancel</button>
          <button type='submit'>Next</button>
        </Form>
      )}
    </Formik>
  );
}


// export default function ChooseOptions() {
//   return (
//         <ContentBox>
//           <Input type="radio" name="category" value="your pet" id="1" />
//           <Label htmlFor="1">your pet</Label>
//           <Input type="radio" name="category" value="sell" id="2" />
//           <Label htmlFor="2">sell</Label>
//           <Input type="radio" name="category" value="lost/found" id="3" />
//           <Label htmlFor="3">lost/found</Label>
//           <Input type="radio" name="category" value="in good hands" id="4" />
//           <Label htmlFor="4">in good hands</Label>
//         </ContentBox>
//   )
// }
