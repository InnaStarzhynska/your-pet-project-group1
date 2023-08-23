import {
    FormWrapper,
    FormItem,
    FormLabel,
    // EditInpuButton,
    FormInput,
    InputName,
    // Confirm,

} from './UserDataItem.styled'

// import SvgIcon from 'components/SvgIcon/SvgIcon';


export const UserDataItem = ({
    label,
    name,
    value,
    formik,
    ...props
}) => {

    return (
        <FormWrapper>
            <FormItem>
                <InputName>{label}</InputName>
                <FormLabel></FormLabel>
                {/* <EditInpuButton
                    type="button"
                >
                <SvgIcon id = {'icon-cross-small'} className="icon-cross-small" />
                </EditInpuButton> */}
                <FormInput
                    autoComplete="off"
                    // id={id}
                    name={name}
                    // on change
                    onBlur={formik.handleBlur}
                    value={formik.values[name]}
                    // active or not
                    touched={
                        formik.touched[name]
                            ? formik.touched[name].toString()
                            : ''
                    }
                    error={formik.errors[name]}
                    {...props}
                />
            </FormItem>
        </FormWrapper>
    );
};

export default UserDataItem;
