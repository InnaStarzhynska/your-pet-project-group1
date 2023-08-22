import { PetsHeader, Title } from "./PetsData.styled";
import PetsList from "../PetsList/PetsList";
export const PetsData = () => {
    return (
        <>
            <PetsHeader>
                <Title>My pets:</Title>
                {/* <AddPetBtn text="Add pet" path="/add-pet" isFixed={false} /> */}
                {/* <AddPetBtn /> */}
            </PetsHeader>
            {/* <NoPetsMessageWrapper>
                <p>There are no animals added yet. Click button to add</p>
            </NoPetsMessageWrapper> */}
            {/* {!!pets.length && <PetsList pets={pets} />} */}
            <PetsList />
        </>
    );
};

export default PetsData;