import React from 'react';
import firebase from 'firebase';
import { Paypal } from '../components';

const client = {
    sandbox: 'xxxxxx',
    production: 'xxxxxxx'
}

const env = process.env.NODE_ENV === 'production' ? 'production' : 'sandbox';

const total = 50;

const currency = 'USD';

const onError = error => {
    console.log('error', error);
}

const onCancel = data => {
    console.log('Payment cancelled', data);
};


const Payment = props => {
    const onSuccess = payment => {
        console.log('payment successed');
        const user = firebase.auth().currentUser;
        const dbRef = firebase.database().ref(`users/${user.uid}`);
        const now = new Date();
        const newDate = now.setDate(now.getDate() + 30);
        console.log(newDate);
        dbRef
            .set({ validUntil: newDate })
            .then(() => {
                console.log('operation succeed');
                props.history.push({ pathname: '/' });
            })
            .catch(e => {
                console.log('error', e);
            });
    };
    return (
        <Paypal
            env={env}
            client={client}
            total={total}
            currency={currency}
            onError={onError}
            onCancel={onCancel}
            onSuccess={onSuccess}
        />
    )
}

export { Payment }