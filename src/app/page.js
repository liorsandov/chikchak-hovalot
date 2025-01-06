'use client';
import Image from 'next/image';

export default function Home() {

    const encodedMessage = encodeURIComponent('אני מעוניין לקבל הצעת מחיר להובלה');
    const whatsappLink = `https://wa.me/0542343033?text=${encodedMessage}`;

    return (
        <main
            style={{
                fontFamily: 'Arial, sans-serif',
                padding: '20px',
                maxWidth: '800px',
                margin: '0 auto',
                direction: 'rtl',
            }}
        >
            <div style={{ justifySelf: 'center' }}>
                <Image src='/truck.gif' alt='צ׳יק-צ׳ק הובלות' width={100} height={100} alignContent={'center'} />
            </div>
            <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>צ׳יק-צ׳ק הובלות</h1>
            <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>מובילים באיכות ובמקצועיות</h2>

            <p style={{ fontSize: '28px', color: '#2c3e50', textAlign: 'center' }}>
                📞 <strong>התקשרו עכשיו:</strong> <br />
                <a href='tel:0542343033' style={{ color: '#2980b9', textDecoration: 'none', textAlign: 'center' }}>
                    054-2343033
                </a>
            </p>
            <br />
            <hr></hr>
            <br />
            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e' }}>
                <strong>שירותי הובלה לכל מטרה</strong>
                <br />
                בין אם אתם עוברים דירה, משרד, או זקוקים להובלה מיוחדת – אנחנו כאן בשבילכם. עם ניסיון עשיר בתחום, צוות
                מקצועי ויחס אישי, נדאג להעביר אתכם בצורה חלקה ובטוחה.
            </p>

            <section>
                <h2 style={{ color: '#2c3e50', marginTop: '20px' }}>מה אנחנו מציעים?</h2>
                <ul style={{ listStyleType: 'circle', marginLeft: '20px', color: '#34495e' }}>
                    <div>✔️ הובלות דירות ומשרדים</div>
                    <div>✔️ שירותי אריזה ופריקה מקצועיים</div>
                    <div>✔️ הובלות קטנות לכל יעד</div>
                </ul>
            </section>

            <section>
                <h2 style={{ color: '#2c3e50', marginTop: '20px' }}>למה לבחור בנו?</h2>
                <ul style={{ listStyleType: 'circle', marginLeft: '20px', color: '#34495e' }}>
                    <div>
                        🔹 <strong>אמינות ומקצועיות</strong> – אנחנו מתחייבים לעמוד בזמנים ולשמור על הציוד שלכם.
                    </div>
                    <div>
                        🔹 <strong>יחס אישי</strong> – כל לקוח חשוב לנו, ונעשה הכל כדי שתהיו מרוצים.
                    </div>
                    <div>
                        🔹 <strong>מחירים תחרותיים</strong> – הצעות מחיר הוגנות ומותאמות אישית.
                    </div>
                    <div>
                        🔹 <strong>זמינות גבוהה</strong> – שירות מהיר וגמיש לפי הצרכים שלכם.
                    </div>
                </ul>
            </section>

            <section
                style={{
                    marginTop: '30px',
                    textAlign: 'center',
                    padding: '20px',
                    border: '1px solid #ddd',
                    borderRadius: '8px',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <h3 style={{ color: '#e74c3c' }}>מתכננים מעבר? אנחנו כאן כדי לעזור!</h3>
                <div>
                    <p style={{ fontSize: '28px', color: '#2c3e50' }}>
                        📞 <strong>התקשרו עכשיו:</strong> <br />
                        <a href='tel:0542343033' style={{ color: '#2980b9', textDecoration: 'none' }}>
                            054-2343033
                        </a>
                    </p>
                    <br />
                    <br />
                    <section>
                        <a
                            href={whatsappLink}
                            target='_blank'
                            rel='noopener noreferrer'
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '50px',
                                height: '50px',
                                backgroundColor: '#25D366',
                                borderRadius: '50%',
                                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                                textDecoration: 'none',
                            }}
                        >
                            <Image
                                src='/whatsapp.gif'
                                alt='whatsapp-us'
                                width={100}
                                height={100}
                                alignContent={'center'}
                            />
                        </a>
                    </section>
                </div>
            </section>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </main>
    );
}
