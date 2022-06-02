import React from "react";

class Progress extends React.Component {
    render() {
        const {percentage} = this.props;
        const styleComponent = {
            width: percentage + `%`,
        }

        return (
            <div className='progress mt-3 m-5'>
                <div className='progress-bar-striped bg-info'
                     role='progressbar'
                     aria-valuenow={percentage}
                     aria-valuemin='0'
                     aria-valuemax='100'
                     aria-label='progressbar'
                     style={styleComponent}></div>
            </div>
        )
    }
}

export default Progress;