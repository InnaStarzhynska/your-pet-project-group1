import React from 'react';
import {ContentBox, Input, Label} from "./ChooseOptions.styled";

export default function ChooseOptions() {
  return (
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
  )
}
