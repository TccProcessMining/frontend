import { Alert } from "@material-ui/lab";

export function AlertWarning(props) {
    const { children, ...rest } = props;
    return (
        <Alert
            elevation={6}
            {...rest}
            variant="filled"
            severity={'warning'}
        >
            {children}
        </Alert>
    );
}