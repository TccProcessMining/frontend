import { Alert } from "@material-ui/lab";

export function AlertSuccess(props) {
    const { children, ...rest } = props;
    return (
        <Alert
            elevation={6}
            {...rest}
            variant="filled"
            severity={'success'}
        >
            {children}
        </Alert>
    );
}