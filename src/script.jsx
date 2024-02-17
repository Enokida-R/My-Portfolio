/*import { useState } from "react";

//フォームのsubmitイベントハンドラー
const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    
try{
    const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if(response.ok) {
        alert('メールを送信しました');
    } else {
        alert('メールの送信に失敗しました');
    }
} catch {
    console.error('送信エラー',error);
    alert('メールの送信に失敗しました');
}

};


function ContactForm() {
    return (
        <section className="text-gray-700">
            <div className="container px-5 py-24 mx-auto">
                <form id="contact-form" className="flex flex-col w-full max-w-md mx-auto" onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder="Your Email" required className="px-3 py-2 mb-4 border rounded"/>
                    <textarea name="message" placeholder="Your Message" required className="px-3 py-2 mb-4 border rounded"></textarea>
                    <button type="submit" className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">Send</button>
                </form>
            </div>
        </section>
    );
}

export default ContactForm;
*/
