'use client';

export default function Home() {
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
            <h1 style={{ textAlign: 'center', color: '#2c3e50' }}>צ׳יק-צ׳ק הובלות</h1>
            <h2 style={{ textAlign: 'center', color: '#2c3e50' }}>מובילים באיכות ובמקצועיות</h2>

            <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#34495e' }}>
                <strong>שירותי הובלה לכל מטרה</strong>
                <br />
                בין אם אתם עוברים דירה, משרד, או זקוקים להובלה מיוחדת – אנחנו כאן בשבילכם. עם ניסיון עשיר בתחום, צוות
                מקצועי ויחס אישי, נדאג להעביר אתכם בצורה חלקה ובטוחה.
            </p>

            <section>
                <h2 style={{ color: '#2c3e50', marginTop: '20px' }}>מה אנחנו מציעים?</h2>
                <ul style={{ listStyleType: 'circle', marginLeft: '20px', color: '#34495e' }}>
                    <li>✔️ הובלות דירות ומשרדים</li>
                    <li>✔️ שירותי אריזה ופריקה מקצועיים</li>
                    <li>✔️ הובלות קטנות לכל יעד</li>
                    <li>✔️ שירותי מנוף למקומות גבוהים</li>
                    <li>✔️ ביטוח מלא לכל הובלה</li>
                </ul>
            </section>

            <section>
                <h2 style={{ color: '#2c3e50', marginTop: '20px' }}>למה לבחור בנו?</h2>
                <ul style={{ listStyleType: 'circle', marginLeft: '20px', color: '#34495e' }}>
                    <li>
                        🔹 <strong>אמינות ומקצועיות</strong> – אנחנו מתחייבים לעמוד בזמנים ולשמור על הציוד שלכם.
                    </li>
                    <li>
                        🔹 <strong>יחס אישי</strong> – כל לקוח חשוב לנו, ונעשה הכל כדי שתהיו מרוצים.
                    </li>
                    <li>
                        🔹 <strong>מחירים תחרותיים</strong> – הצעות מחיר הוגנות ומותאמות אישית.
                    </li>
                    <li>
                        🔹 <strong>זמינות גבוהה</strong> – שירות מהיר וגמיש לפי הצרכים שלכם.
                    </li>
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
                <p style={{ fontSize: '16px', color: '#34495e' }}>
                    השאירו פרטים עכשיו וקבלו הצעת מחיר מותאמת אישית – ללא התחייבות.
                </p>
                <p style={{ fontSize: '28px', color: '#2c3e50' }}>
                    📞 <strong>התקשרו עכשיו:</strong>{' '}
                    <a href='tel:0542343033' style={{ color: '#2980b9', textDecoration: 'none' }}>
                        054-2343033
                    </a>
                </p>
            </section>
        </main>
    );
}
