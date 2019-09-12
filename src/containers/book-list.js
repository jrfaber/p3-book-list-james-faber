import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { selectBook } from '../actions/index';


class BookList extends Component {
    renderList() {
        // this.props.books works here thanks to the mapStateToProps function below
        return this.props.books.map(book => {
            const cn =
                this.props.activeBook &&
                this.props.activeBook.title === book.title
                    ? "list-group-item class-item-mine selected-item-mine"
                    : "list-group-item class-item-mine";

            return (
                <li
                    onClick={() => this.props.selectBook(book)}
                    key={book.title}
                    className={cn}
                >
                    {book.title}
                    <br />
                    {book.numberOfClicks}
                </li>
            );
        });
    }
    render() {
        return <ul className="list-group">{this.renderList()}</ul>;
    }
}
// Anything returned from this function will end up as props on the 
// BookList container
function mapDispatchToProps(dispatch){
    return bindActionCreators({ selectBook: selectBook }, dispatch);
};

function mapStateToProps(state) {
    return {
        books: state.books,
        activeBook: state.activeBook
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
