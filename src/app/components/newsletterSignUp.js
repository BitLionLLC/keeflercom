export default function NewsletterSignUp ({ email, setEmail }) {
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          const response = await fetch('/api/newsletter', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });

          if (!response.ok) {
            const err = await response.json().catch(() => null);
            console.log(err)
            return;
          }

          const data = await response.json().catch(() => ({ message: 'Subscription successful!' }));
          setEmail('');
        } catch (error) {
          console.error('Error:', error);
        }
      };

    return (
        <form className="mt-4 max-w-md" onSubmit={handleSubmit}>
            <label htmlFor="email" className="sr-only">Email</label>
            <p className="text-white/60">Enter your email here *</p>
            <input id="email" name="email" type="email" placeholder="you@example.com" aria-required="true" required className="min-w-[400px] w-full focus:bg-white/30 h-[40px] focus:border-0 focus:ring-0 outline-0 p-2 border-b-1 border-white" value={email} onChange={e => setEmail(e.target.value)} />
            <div className="flex flex-col md:flex-row md:justify-between">
                <div className="mt-3 flex items-center gap-3">
                <input id="subscribe" type="checkbox" className="!bg-transparent" required />
                <label htmlFor="subscribe" className="text-md">Yes, subscribe me to your<br/> newsletter. *</label>
                </div>
                <button type="submit" className="mt-4 bg-black px-10 py-2 text-sm text-white">Submit</button>
            </div>
        </form>
    )
}