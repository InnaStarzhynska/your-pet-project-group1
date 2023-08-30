import loadingCat from '../../images/Cutie Fox-1.1s-201px.svg';
import { Backdrop, Img } from './IsLoading.styled';
export const IsLoading = () => {
 return <Backdrop>
     <Img src={loadingCat} alt="Loading cat" />;
   </Backdrop>
};

export default IsLoading;
