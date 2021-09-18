import { Alert } from "@material-ui/lab";

export function AlertError(props) {
    const { children, ...rest } = props;
    return (
        <Alert
            elevation={6}
            {...rest}
            variant="filled"
            severity={'error'}
        >
            {children}
        </Alert>
    );
}