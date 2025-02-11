import React, { useState } from 'react';
import axios from 'axios';
import style from '../style/send.module.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const SendEmail: React.FC = () => {
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No token found');
                return;
            }

            const response = await axios.post(
                'https://sendme-backend.vercel.app/send', // Updated endpoint URL
                { subject, content },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            console.log('Message sent successfully:', response.data);
            navigate('/main'); // Navigate to /main after successful submission
        } catch (error) {
            console.error('Error sending message:', error);
        }
    };

    return (
        <div className={style.sendEmail}>
            <h2>Send Email</h2>
            <div className={style.container}>
                <div className={style.formGroup}>
                    <label htmlFor="subject">Subject:</label>
                    <input
                        type="text"
                        id="subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required
                    />
                </div>
                <div className={style.formGroup}>
                    <label htmlFor="content">Content:</label>
                    <textarea
                        id="content"
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        required
                    />
                </div>
                <button type="button" onClick={handleSubmit}>Send</button>
            </div>
        </div>
    );
};

export default SendEmail;
