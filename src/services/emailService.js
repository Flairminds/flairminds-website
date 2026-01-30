/**
 * EmailJS Service Module
 * Common email functionality for the FlairMinds website
 * 
 * Emails from Contact Us page -> sales@flairminds.com
 * Emails from Careers page -> hr@flairminds.com
 */

import emailjs from '@emailjs/browser';

// EmailJS Configuration from environment variables
const EMAILJS_CONFIG = {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'service_c8u0j56',
    contactTemplateId: import.meta.env.VITE_EMAILJS_CONTACT_TEMPLATE_ID || 'template_00oj8b7',
    careerTemplateId: import.meta.env.VITE_EMAILJS_CAREER_TEMPLATE_ID || 'template_6na76aj',
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'ZJYs0GjSODwde8Ajd',
};

/**
 * Initialize EmailJS with the public key
 * Should be called once when the app starts
 */
export const initEmailJS = () => {
    if (EMAILJS_CONFIG.publicKey) {
        emailjs.init(EMAILJS_CONFIG.publicKey);
        console.log('[EmailJS] Initialized successfully');
        return true;
    }
    console.warn('[EmailJS] Public key not configured');
    return false;
};

/**
 * Send contact inquiry email to sales@flairminds.com
 * @param {Object} formData - Contact form data
 * @param {string} formData.name - Sender's full name
 * @param {string} formData.email - Sender's email address
 * @param {string} formData.phone - Sender's phone number
 * @param {string} formData.message - Inquiry message
 * @param {string} [formData.organization] - Optional organization name
 * @param {string} [formData.industry] - Optional industry
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const sendContactEmail = async (formData) => {
    try {
        if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.contactTemplateId) {
            console.error('[EmailJS] Contact email configuration missing');
            return {
                success: false,
                message: 'Email configuration error. Please try again later.',
            };
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            contact_number: formData.phone,
            message: formData.message || 'No message provided'
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.contactTemplateId,
            templateParams
        );

        console.log('[EmailJS] Contact email sent successfully:', response);
        return {
            success: true,
            message: 'Your inquiry has been sent successfully! We will get back to you soon.',
        };
    } catch (error) {
        console.error('[EmailJS] Failed to send contact email:', error);
        return {
            success: false,
            message: 'Failed to send email. Please try again or contact us directly.',
        };
    }
};

/**
 * Send career/job application email to hr@flairminds.com
 * @param {Object} formData - Career application form data
 * @param {string} formData.name - Applicant's full name
 * @param {string} formData.email - Applicant's email address
 * @param {string} formData.phone - Applicant's phone number
 * @param {string} formData.position - Position applying for
 * @param {string} [formData.experience] - Years of experience
 * @param {string} [formData.resumeLink] - Link to resume (Google Drive, LinkedIn, etc.)
 * @param {string} [formData.coverLetter] - Brief cover letter or message
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const sendCareerEmail = async (formData) => {
    try {
        if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.careerTemplateId) {
            console.error('[EmailJS] Career email configuration missing');
            return {
                success: false,
                message: 'Email configuration error. Please try again later.',
            };
        }

        const templateParams = {
            from_name: formData.name,
            from_email: formData.email,
            contact_number: formData.phone,
            position: formData.position,
            experience: formData.experience,
            resume_link: formData.resumeLink,
            cover_letter: formData.coverLetter
        };

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.careerTemplateId,
            templateParams
        );

        console.log('[EmailJS] Career email sent successfully:', response);
        return {
            success: true,
            message: 'Your application has been submitted successfully! Our HR team will review it shortly.',
        };
    } catch (error) {
        console.error('[EmailJS] Failed to send career email:', error);
        return {
            success: false,
            message: 'Failed to submit application. Please try again or email us directly at hr@flairminds.com',
        };
    }
};

/**
 * Generic email sending function for custom use cases
 * @param {string} templateId - EmailJS template ID
 * @param {Object} templateParams - Template parameters
 * @returns {Promise<{success: boolean, message: string}>}
 */
export const sendCustomEmail = async (templateId, templateParams) => {
    try {
        if (!EMAILJS_CONFIG.serviceId || !templateId) {
            console.error('[EmailJS] Custom email configuration missing');
            return {
                success: false,
                message: 'Email configuration error.',
            };
        }

        const response = await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            templateId,
            templateParams
        );

        console.log('[EmailJS] Custom email sent successfully:', response);
        return {
            success: true,
            message: 'Email sent successfully!',
        };
    } catch (error) {
        console.error('[EmailJS] Failed to send custom email:', error);
        return {
            success: false,
            message: 'Failed to send email.',
        };
    }
};

export default {
    initEmailJS,
    sendContactEmail,
    sendCareerEmail,
    sendCustomEmail,
};
