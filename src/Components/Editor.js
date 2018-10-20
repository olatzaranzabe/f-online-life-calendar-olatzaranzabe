import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Stylesheets/Editor.css';

class Editor extends Component {
    render() {
        const {
            handleCreateMood,
            handleStateMood,
            handleDelete,
            handleMessage,
            handleDate,
            moodValue
        } = this.props;
        console.log(moodValue)
        let formMessage = moodValue === ":)" ? null : 'hidden';
        return (
            <form className="form__entire">
                <fieldset className="form__part">
                    <legend className="form__title">Date</legend>
                    <label htmlFor="form__date"></label>
                    <input
                        id="form__date"
                        className="form_date"
                        type="text"
                        onChange={handleDate}
                    />
                </fieldset>
                <fieldset className="form__part">
                    <legend className="form__title">State</legend>
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
                <fieldset 
                // className="form__part hidden"
                  className= {formMessage}
                >
                    <legend className="form__title">Message</legend>
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
                        <button className="form__submit__button" onClick={handleCreateMood} type="submit">save</button>
                    </div>
                    <div className="form__cancel">
                        <button className="form__submit__cancel" onClick={handleDelete} type="reset">cancel</button>
                    </div>
                </Link>
            </form>
        );
    }
}

export default Editor;