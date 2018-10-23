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

        let formMessage = moodValue === ":)" ? 'form__part' : 'hidden';
        return (
            <form className="form__entire">
                <fieldset className="form__part">
                    <legend className="form__title">Date</legend>
                    <label htmlFor="form__date"></label>
                    <input
                        id="form__date"
                        className="form__info"
                        type="date"
                        onChange={handleDate}
                    />
                </fieldset>
                <fieldset className="form__part">
                    <legend className="form__title">State</legend>
                    <div className="form__radios">
                        <div>
                            <input
                                className="form__input"
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
                                className="form__input"
                                type="radio"
                                id="sad"
                                name="mood"
                                value=":("
                                required="required"
                                onChange={handleStateMood}
                            />
                            <label htmlFor="sad">:(</label>
                        </div>
                    </div>
                </fieldset>
                <fieldset
                    className={formMessage}
                >
                    <legend className="form__title">Message</legend>
                    <label htmlFor="message"></label>
                    <textarea
                        id="message"
                        className="form__info message"
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