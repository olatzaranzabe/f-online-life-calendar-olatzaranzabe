import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Editor extends Component {
    render() {
        const {
            handleCreateMood,
            handleStateMood,
            handleDelete,
            handleMessage,
            handleDate
        } = this.props;

        return (
            <form>
                <fieldset>
                    <legend>Date</legend>
                    <label htmlFor="form__date"></label>
                    <input
                        id="form__date"
                        className="form_date"
                        type="text"
                        onChange={handleDate}
                    />
                </fieldset>
                <fieldset>
                    <legend>State</legend>
                    <div>
                        <input
                            type="radio"
                            id="happy"
                            name="mood"
                            value=":)"
                            required="required"
                            onChange={handleStateMood}
                            // defaultChecked
                        />
                        <label htmlFor="happy">:)</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="sad"
                            name="mood"
                            value=":("
                            required="required"
                            onChange={handleStateMood}
                        />
                        <label htmlFor="sad">:(</label>
                    </div>
                </fieldset>
                <fieldset className="form__optional__message">
                    <legend>Message</legend>
                    <label htmlFor="message"></label>
                    <input
                        id="message"
                        className="form_message"
                        type="text"
                        name="messageArea"
                        onChange={handleMessage}
                        placeholder="Why is it a good day?"
                    />
                </fieldset>
                <Link to='/'>
                    <div className="form__submit">
                        <button onClick={handleCreateMood} type="submit">Save</button>
                    </div>
                    <div className="form__cancel">
                        <button onClick={handleDelete} type="reset">Cancel</button>
                    </div>
                </Link>
            </form>
        );
    }
}

export default Editor;