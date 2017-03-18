
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


// Conditional rendering
function iiHOC(WrappedComponent) {
    return class Enhancer extends WrappedComponent {
        render() {
            if (this.props.loggedIn) {
                return super.render()
            } else {
                return null
            }
        }
    }
}


// Debugger Component
function IIHOCDEBUGGER(WrappedComponent) {
    return class II extends WrappedComponent {
        render() {
            return (
                <div>
                    <h2>HOC Debugger Component</h2>
                    <p>Props</p> <pre>{JSON.stringify(this.props, null, 2)}</pre>
                    <p>State</p><pre>{JSON.stringify(this.state, null, 2)}</pre>
                    {super.render()}
                </div>
            )
        }
    }
}
