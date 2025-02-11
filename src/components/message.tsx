import React from 'react';
import style from '../style/send.module.css';
import { useNavigate, useLocation } from 'react-router-dom';

const Message: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { subject, content } = location.state || {};

    return (
        <div className={style.sendEmail}>
            <h2>Message Details</h2>
            <div className={style.container}>
                <div className={style.formGroup}>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        readOnly
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        readOnly
                    />
                </div>
                <button type="button" onClick={() => navigate('/main')}>Back</button>
            </div>
        </div>
    );
};

export default Message;