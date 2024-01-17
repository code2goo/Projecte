import React from 'react';
import './contact_us.css';
import  Card  from './Card';
import Card_Social from './Card_Social';


function Cards() {
  return (
    <div>
        <Card 
            info = {{
                img:'#',
                contactTitle: 'العنوان',
                contactAdress: 'Hamm, Germany',
            }}
        />
        <Card 
            info = {{
                img:'#',
                contactTitle: 'الحساب البنكي',
                contactBankName: 'Ihsan e.v',
                contactBankIban: 'IBAN : DE50 4436 1342 5011 6204 00',
                contactBankBic: 'Bic : GENODEM1KWK',
                contactPaypal : 'Paypal : paypal.me/I7san', 
            }}
        />
        <Card 
            info = {{
                img:'#',
                contactTitle: 'للتواصل',
                contactTitle: 'Info@ihsan-ev.de',
                contactTitle: '015218712365',
            }}
        />

        <Card_Social
            info = {{
                img:'#',
                socialTitle: 'حسابنا على فيسبوك'
            }}
        />
        <Card_Social
            info = {{
                img:'#',
                socialTitle: 'حسابنا على أنستغرام'
            }}
        />
        <Card_Social
            info = {{
                img:'#',
                socialTitle: 'حسابنا على تويتر'
            }}
        />
        <Card_Social
            info = {{
                img:'#',
                socialTitle: 'حسابنا على يوتيوب'
            }}
        />
    </div>
  )
};

export default Cards;