import PetsItem from '../PetsItem/PetsItem';

const PetsList = () => {
    return (
        <ul>
            {/* <PetsItem key={pet._id} pet={pet} /> */}
            <PetsItem />
        </ul>
    );
};

export default PetsList;