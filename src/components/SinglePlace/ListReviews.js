import React, { Component } from 'react'
import Review, { review } from './review'
export class ListReviews extends Component {

    state = {
        reviews : []
    }

    componentDidUpdate(prevProps) {
        if (this.props.reviews !== prevProps.reviews) {
            this.setState({
                reviews : this.props.reviews
            });
        }
    }

    render() {

        return (
            <div className="reviews">
            <ul>
                {this.state.reviews.map((rev) => (
                    <Review review={rev}/>
                ))}
            </ul>
            </div>
        );
    }
}

export default ListReviews
