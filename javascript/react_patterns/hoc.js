
// Adding props to a component

function ppHOC(WrappedComponent) {
    return class PP extends React.Component {
        render() {
            const newProps = { user: currentLoggedInUser }
            return <WrappedComponent { ...this.props } { ...newProps } />
        }
    }
}

// Getting refs


function refsHOC(WrappedComponent) {
    return class RefsHOC extends React.Component {
        proc(wrappedComponentInstance) {
            wrappedComponentInstance.method()
        }

        render() {
            const props = Object.assign({}, this.props, {ref: this.proc.bind(this)})
            return <WrappedComponent {...props}/>
        }
    }
}
