import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Editor extends Component {
    render() {
        const {
            handleCreateMood,
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
                            value="happy"
                            required="required"
                            defaultChecked
                        />
                        <label htmlFor="happy">:)</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="sad"
                            name="mood"
                            value="sad"
                            required="required"
                        />
                        <label htmlFor="sad">:(</label>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Message</legend>
                    <label htmlFor="message"></label>
                    <input
                        id="message"
                        className="form_date"
                        type="text"
                        name="messageArea"
                        onChange={handleMessage}
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