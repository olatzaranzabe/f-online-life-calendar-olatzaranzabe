import React, { Component } from 'react';

class Editor extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <form>
                <fieldset>
                    <legend>Date</legend>
                    <label htmlFor="form__date"></label>
                    <input
                        id="form__date"
                        className="form_date"
                        type="text"
                    />
                </fieldset>
                <fieldset>
                    <legend>State</legend>
                    <div>
                        <input
                            type="radio"
                            id="happy"
                            name="happy"
                            value="happy"
                        />
                        <label htmlFor="happy">:)</label>
                    </div>
                    <div>
                        <input
                            type="radio"
                            id="sad"
                            name="sad"
                            value="sad"
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
                    />
                </fieldset>
                <div className="button">
                    <button type="submit">Save</button>
                </div>
            </form>
        );
    }
}

export default Editor;