import mongoose from 'mongoose';
import { Admin } from './admins.model';
import { Application } from './applications.model';
import { Page } from './pages.model';
import { Contact } from './contacts.model';
import { Metric } from './metrics.model';
import { Setting } from './settings.model';

const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/trc-db';

export const dbCon = async () => {

    const initializeSite = async () => {
        const countAdmin: number = await Admin.countDocuments();
        const countSetting: number = await Setting.countDocuments();
        // create first Admin //
        (countAdmin === 0) && await Admin.create({
            name: 'TRC Admin',
            email: 'agu.chux@yahoo.com',
            password: 'admin'
        }).then((admin) => {
            console.log('Admin created...');
            console.log(admin);
        }).catch((error) => {
            console.log(error);
        });
        // create first Setting //
        (countSetting === 0) && await Setting.insertMany([
            {
                keyTitle: 'Site Title',
                keyName: 'siteTitle',
                keyValue: 'The Recruitment Consult'
            },
            {
                keyTitle: 'Site Description',
                keyName: 'siteDescription',
                keyValue: 'The Recruitment Consult'
            },
            {
                keyTitle: 'Site About',
                keyName: 'siteAbout',
                keyValue: 'The Recruitment Consult'
            },
            {
                keyTitle: 'Site Keywords',
                keyName: 'siteKeywords',
                keyValue: 'TRC, The Recruitment Consult'
            },
            {
                keyTitle: 'Site Address',
                keyName: 'siteAddress',
                keyValue: 'No 1, TRC Street, TRC City, TRC State, TRC Country'
            },
            {
                keyTitle: 'Site Phone',
                keyName: 'sitePhone',
                keyValue: '+234 803 000 0000'
            },
            {
                keyTitle: 'Site Email',
                keyName: 'siteEmail',
                keyValue: 'info@therecruitmentconsult.com',
            },
            {
                keyTitle: 'Site Facebook',
                keyName: 'siteFacebook',
                keyValue: 'https://facebook.com/therecruitmentconsult'
            },
            {
                keyTitle: 'Site Twitter',
                keyName: 'siteTwitter',
                keyValue: 'https://twitter.com/therecruitmentconsult'
            },
            {
                keyTitle: 'Site Instagram',
                keyName: 'siteInstagram',
                keyValue: 'https://instagram.com/therecruitmentconsult'
            },
            {
                keyTitle: 'Site LinkedIn',
                keyName: 'siteLinkedIn',
                keyValue: 'https://linkedin.com/therecruitmentconsult'
            },
            {
                keyTitle: 'Site YouTube',
                keyName: 'siteYouTube',
                keyValue: 'https://youtube.com/therecruitmentconsult'
            },
            {
                keyTitle: 'Site WhatsApp',
                keyName: 'siteWhatsApp',
                keyValue: 'https://whatsapp.com/therecruitmentconsult'
            }
        ]).then((setting) => {
            console.log('Setting created...');
        }).catch((error) => {
            console.log(error);
        });
    }

    try {
        await mongoose.connect(uri);
        console.log('DB connected...');
        initializeSite();
    } catch (error) {
        console.log(error);
    }
    return {
        Admin,
        Application,
        Page,
        Contact,
        Metric,
        Setting
    }
}