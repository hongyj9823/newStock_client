import React, {Component} from 'react';
import ErrorMessage from './ErrorMessage';
export class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state  = {
            hasError : false ,
            message : props.message || "Something went wrong."
        };
    }
    
    static getDerivedStateFromError(error) {
        return { hasError:true};
    }
    componentDidCatch(error,errorInfo) {

    }
    render() {
        if (this.state.hasError) {
            return <ErrorMessage>{this.props.message}</ErrorMessage>
        }
        return this.props.children;
    }
}
export default ErrorBoundary;